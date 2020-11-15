import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import clsx from "clsx"
import Paper from '@material-ui/core/Paper'
import { Avatar, Button, Typography } from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import loanRemove from '../../../redux/actions/LoanAction/removeLoanAction'

import useUser from '../../../hook/useUser'
import { AppState } from '../../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(2.5),
        width: theme.spacing(19),
        height: theme.spacing(21),
      },
      flexWrap:'wrap',
    },
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    rootButton: {
      background: 'linear-gradient(45deg, #706AF0 50%,  #768976 10%)',
      borderRadius: 3,
      border: 0,
      width: 'inherit',
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(209, 209, 204, .8)',
     
    }
  })
)

const LoanedBook = () => {
  const classes = useStyles()
  const [id, username] = useUser()
  const dispatch = useDispatch()
  const loans = useSelector((state: AppState) => state.loan.loans)
  return (
    <div className={classes.root}>
      {loans.map((m) =>
        m.book.map((b) => (
          <Paper elevation={3} key={b.id}>
            <Typography>{b.author}</Typography>
            <Typography>{b.category}</Typography>
            <Avatar alt="Remy Sharp" src={b.image} className={classes.large} />
            <Button className={clsx(classes.rootButton)} variant="outlined" onClick={() => loanRemove(m, dispatch)}>Return</Button>
          </Paper>
        ))
      )}
    </div>
  )
}
export default LoanedBook
