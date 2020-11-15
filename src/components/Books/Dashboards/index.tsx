import React, { useCallback, useState } from 'react'

import Paper from '@material-ui/core/Paper'
import { Avatar, Typography } from '@material-ui/core'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import useBooks from '../../../hook/useBooks'
import MyDrawer from '../../pages/Drawer'

import './Dashboards.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(3.5),
        width: theme.spacing(19),
        height: theme.spacing(21),
        
      },
      flexWrap:'wrap',
    },
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    spaceTop: {
      marginTop: 200,
      backgroundColor:'green'
     
    }
  })
)

const Dashboards = () => {
  const classes = useStyles()
  const [keyword, setKeyword] = useState('')
  const books = useBooks(keyword)
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setKeyword(e.target.value)
    },
    []
  )
  return (
    <div className={classes.root}>
      <MyDrawer keyword={keyword} handleSearchChange={handleSearchChange} />
      {books.map((b) => (
        <div className={classes.spaceTop}>
          <Paper elevation={3} key={b.id}>
            <Typography key={b.id}>{b.category}</Typography>
            <Avatar key={b.id} alt="Remy Sharp" src={b.image} className={classes.large} />
          </Paper>
          <Typography key={b.id}>{(b.description).slice(0,75)}</Typography>
        </div>
      ))}
    </div>
  )
}
export default Dashboards
