import React, { useEffect, useState } from 'react'

import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import { FilledInput, FormControl } from '@material-ui/core'
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import { AppState } from '../../../../types'
import useForm from '../../../../hook/useForm'
import useUser from '../../../../hook/useUser'
import loanAdd from '../../../../redux/actions/LoanAction/takeLoanAction'

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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  rootButton: {
    background: 'linear-gradient(45deg, #706AF0 50%,  #768976 10%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(209, 209, 204, .8)',
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

const CreateLoan = ({ book }: any) => {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const dispatch = useDispatch()
  const initialState = {
    book: book,
  }
  const { value, handleInputChange, setValue } = useForm(initialState)
  const authors = useSelector((state: AppState) => state.bookAll.books)
  const bookInfo = authors.find((author) => author.id === book)
  const classes = useStyles()
  const [id, username, checkAdmin] = useUser()
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const { book } = value
    loanAdd(book, dispatch)
    setValue(initialState)
  }
  return (
    <>
      <Button
        className={clsx(classes.rootButton)}
        variant="contained"
        onClick={handleClickOpen}
      >
        Take Loan
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add{' '}
          <sup>
            <strong>{bookInfo?.title}</strong>
          </sup>{' '}
          to basket
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="book"
                hidden={true}
                value={value.book}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button
              className={clsx(classes.rootButton)}
              variant="contained"
              type="submit"
            >
              Loan
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
export default CreateLoan
