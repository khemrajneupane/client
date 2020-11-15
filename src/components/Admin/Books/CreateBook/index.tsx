import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from "clsx"

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import { FilledInput, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core'
import { createStyles, makeStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'

import { AppState } from '../../../../types'
import useForm from '../../../../hook/useForm'
import bookAdd from '../../../../redux/actions/BookActions/bookAddAction'
import authorList from '../../../../redux/actions/AuthorAction/authorGetAllAction'


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

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CreateBook = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    authorList(dispatch)
  };
  const handleClose = () => {
    setOpen(false);
  };
 
  const allAuthors = useSelector(
    (state: AppState) => state.author.authors
  )

  console.log("allAuthorsallAuthors ", allAuthors)
  const initialState = {
    author: '',
    category: '',
    description: '',
    isbn: '',
    publishedYear: 0,
    publisher: '',
    title: '',
    total: 0
  }
  const { value, handleInputChange, setValue } = useForm(initialState)
  const dispatch = useDispatch()
  const classes = useStyles();
  
  const handleSubmit = (event: any) => {
    event.preventDefault()
    bookAdd(value, dispatch)
    setValue(initialState)
  }

  return (
    <div>
      <Button
        className={clsx(classes.rootButton)}
        variant="contained"
        onClick={handleClickOpen}>
        create Book
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Fill up Book info
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
            <FilledInput
              id="filled-adornment-name"
              type="date"
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
          <FormControl className={clsx(classes.margin, classes.textField)}
            variant="filled">
        <Select
          value={value.author}
          name= 'author'
          onChange={handleInputChange}
          displayEmpty
          
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            <span style= {{color: '#4CAF50'}}>Assign Author</span>
          </MenuItem>
          {allAuthors.map(names=>
            <MenuItem key = {names.email} value={names.id} >
                {`${names.firstName} ${names.lastName}`}
            </MenuItem>)}
          
        </Select>
        
        <FormHelperText>choose which auther to assign for a book</FormHelperText>
      </FormControl>
      <FormControl 
            variant="filled">    
          <Button
            className={clsx(classes.rootButton, classes.textField)}
            variant="contained"
            color="primary" type = "submit">
            CreateBook
          </Button>
      </FormControl>  
        </form>
        </DialogContent>

      </Dialog>
    </div>
  );
}
export default CreateBook