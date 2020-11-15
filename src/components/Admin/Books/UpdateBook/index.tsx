import React  from 'react'

import clsx from "clsx"
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import { FilledInput, FormControl, FormHelperText, InputLabel} from '@material-ui/core'
import { createStyles, makeStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import bookUpdate from '../../../../redux/actions/BookActions/bookUpdateAction'
import useForm from '../../../../hook/useForm'
import { AppState } from '../../../../types'

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
  });
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: 10,
      height: 50,
  
      width: 200
    },
    textField: {
      width: 200
    },
    fieldMargin: {
      marginRight: 100
    },
    marginCentered: {
      margin: "0 auto"
    },
    rootButton: {
      background: 'linear-gradient(45deg, #090872 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    labelButton: {
      textTransform: 'capitalize',
    },
  }));
export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const UpdateBook = ({id}: any) => {
  const [open, setOpen] = React.useState(false);
  const books = useSelector((state: AppState) => state.bookAll.books)
  const bookFields = books.find(bks =>bks.id === id)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const initialState = {
    category: bookFields?.category,
    description: bookFields?.description,
    isbn: bookFields?.isbn,
    publishedYear: bookFields?.publishedYear,
    publisher: bookFields?.publisher,
    title: bookFields?.title,
    total: bookFields?.total
  }
  const { value, handleInputChange, setValue } = useForm(initialState)
  const dispatch = useDispatch()
  const classes = useStyles();
  const handleSubmit = (event: any) => {
    event.preventDefault()
    bookUpdate(value, id, dispatch)
    setValue(initialState)
  }

  return (
    <div>
      <Button className={clsx(classes.rootButton, classes.labelButton)} variant="outlined"  onClick={handleClickOpen}>
        UpdateBook
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Update Book info
        </DialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>category</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="category"
                value={value.category}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type category</small>
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>description</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="description"
                value={value.description}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type description</small>
              </FormHelperText>
            </FormControl>

            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>Title</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="title"
                value={value.title}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type title</small>
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>Total</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="number"
                name="total"
                value={value.total}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type total books number</small>
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>published year</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="number"
                name="publishedYear"
                value={value.publishedYear}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type published year</small>
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>Publisher</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="publisher"
                value={value.publisher}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type publisher name</small>
              </FormHelperText>
            </FormControl>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="filled"
            >
              <InputLabel>ISBN</InputLabel>
              <FilledInput
                id="filled-adornment-name"
                type="text"
                name="isbn"
                value={value.isbn}
                onChange={handleInputChange}
              />
              <FormHelperText id="filled-weight-helper-text">
                <small>type isbn number</small>
              </FormHelperText>
            </FormControl>
            <Button className={clsx(classes.rootButton, classes.labelButton)} color="inherit" type = "submit">
            UpdateBook
            </Button>
          </form>
        </DialogContent>

      </Dialog>
    </div>
  );
}
export default UpdateBook