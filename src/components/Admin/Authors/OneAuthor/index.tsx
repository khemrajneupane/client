import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import HomeIcon from '@material-ui/icons/Home'
import { red } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

import { AppState } from '../../../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: '100%',
      height: '100%',
      backgroundColor: red[500],
    },
  })
)
const useStyle = makeStyles({
  root: {
    maxWidth: 390,
    margin: '0 auto',
  },
})
interface Params {
  id: string
}
const OneAuthor = () => {
  const classes = useStyles()
  const classe = useStyle()
  const { id } = useParams<Params>()
  const authors = useSelector((state: AppState) => state.author.authors)
  const oneAuthor = authors.find((author) => author.id === id)
  return (
    <div className="myContainer">
      <Card className={classe.root}>
        <Link to="/">
          {' '}
          <HomeIcon fontSize="large" />
        </Link>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src="romeo.jpg" alt="authorImage" />
            </Avatar>
          }
        />
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`Author: ${oneAuthor?.firstName} ${oneAuthor?.lastName}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {`Email: ${oneAuthor?.email}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {`Birth: ${oneAuthor?.dob?.slice(0, 10)}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
export default OneAuthor
