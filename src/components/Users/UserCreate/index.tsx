import React from 'react'

import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
} from '@material-ui/core'
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'

import { AppState, Users } from '../../../types'
import useForm from '../../../hook/useForm'
import userUpdate from '../../../redux/actions/UserActions/userUpdateAction'
import userPasswordUpdate from '../../../redux/actions/UserActions/userUpdateAction'
import useUser from '../../../hook/useUser'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  })
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: 10,
    height: 50,

    width: 200,
  },
  textField: {
    width: 200,
  },
  fieldMargin: {
    marginRight: 100,
  },
  marginCentered: {
    margin: '0 auto',
  },
  rootButton: {
    background: 'linear-gradient(45deg, #087211 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .9)',
  },
  labelButton: {
    textTransform: 'capitalize',
  },
}))

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const UpdateUser = ({ id }: any) => {
  const [open, setOpen] = React.useState(false)
  const users = useSelector((state: AppState) => state.user.users)
  const userFields = users.find((usr) => usr.id === id)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const initialState = {
    oldPassword: '',
    newPassword: '',
  }
  const { value, handleInputChange, setValue } = useForm(initialState)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleSubmit = (event: any) => {
    event.preventDefault()

    userPasswordUpdate(value, id, dispatch)

    console.log(value)
    setValue(initialState)
  }

  return (
    <>
      <Button
        className={clsx(classes.rootButton, classes.labelButton)}
        variant="outlined"
        onClick={handleClickOpen}
      >
        UpdateAccount
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update your personal information
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>Old Password</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="oldPassword"
                value={value.oldPassword}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type your previous password</small>
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>New Password</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="newPassword"
                value={value.newPassword}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>re-type your new password</small>
              </FormHelperText>
            </FormControl>

            <FormControl variant="filled">
              <Button
                className={clsx(classes.rootButton, classes.labelButton)}
                id="signup"
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                {`Update ${userFields?.username}'s password`}
              </Button>
            </FormControl>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
export default UpdateUser
