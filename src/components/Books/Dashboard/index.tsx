import React, { useCallback, useState } from 'react'

import MoodIcon from '@material-ui/icons/Mood'
import MoodBadIcon from '@material-ui/icons/MoodBad'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'

import MyDrawer from '../../pages/Drawer'
import useBooks from '../../../hook/useBooks'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  gridList: {
    padding: '10px',
  },
  typoText: {
    color: 'red',
  },
}))
const DashboardImage = () => {
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
    <div>
      <MyDrawer keyword={keyword} handleSearchChange={handleSearchChange} />
      <Grid container justify="center" alignItems="flex-start">
        {books.map((book) => (
          <Grid item xs={2} key={books.indexOf(book)}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="A good book to read"
                image={book.image}
                title="A good book to read"
                className={classes.gridList}
              />
              <div className={classes.typoText}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.description.substr(0, 60)}
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
            <Typography>
              {book.total > 1 ? <MoodIcon /> : 'Out of stock! '}{' '}
              {book.total < 1 ? <MoodBadIcon /> : `${book.total} Available`}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
export default DashboardImage
