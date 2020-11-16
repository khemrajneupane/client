import React from 'react'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
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

import useForm from '../../../../hook/useForm'
import authorAdd from '../../../../redux/actions/AuthorAction/addAuthorAction'
import authorUpdate from '../../../../redux/actions/AuthorAction/updateAuthorAction'
import { AppState, AuthorId } from '../../../../types'

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

const UpdateAuthor = ({ id }: any) => {
  const [open, setOpen] = React.useState(false)
  const authors = useSelector((state: AppState) => state.author.authors)
  const authorFields = authors.find((auths) => auths.id === id)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const initialState = {
    firstName: authorFields?.firstName,
    lastName: authorFields?.lastName,
    email: authorFields?.email,
    dob: authorFields?.dob,
  }
  const { value, handleInputChange, setValue } = useForm(initialState)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleSubmit = (event: any) => {
    event.preventDefault()
    authorUpdate(value, id, dispatch)
    setValue(initialState)
  }

  return (
    <div>
      <Button
        className={clsx(classes.rootButton, classes.labelButton)}
        variant="outlined"
        onClick={handleClickOpen}
      >
        UpdateAuthor
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Fill up author info
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>firstName</InputLabel>
              <FilledInput
                type="text"
                name="firstName"
                value={value.firstName}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small> type first name</small>
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>lastName</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="lastName"
                value={value.lastName}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type last name</small>
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>email</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="email"
                name="email"
                value={value.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <FilledInput
                id="filled-adornment-name"
                type="date"
                name="dob"
                value={value.dob}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type birth year</small>
              </FormHelperText>
            </FormControl>
            <FormControl variant="filled">
              <Button
                className={clsx(classes.rootButton, classes.labelButton)}
                id="signup"
                type="submit"
                variant="contained"
                color="primary"
              >
                {`Update ${authorFields?.firstName}`}
              </Button>
            </FormControl>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default UpdateAuthor
