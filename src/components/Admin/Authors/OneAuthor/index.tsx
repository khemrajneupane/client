import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { red } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

import './OneAuthor.css'
import { useParams } from 'react-router-dom'
import { AppState } from '../../../../types'
import { useSelector } from 'react-redux'
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inline: {
      height: '1rem',
      lineHeight: '1rem',
      overflow: 'hidden',
    },
    image: {
      padding: '1px',
    },
    rating: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
)
const useStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})
interface Params {
  authoremail: string
}
const OneAuthor = () => {
  const classes = useStyles()
  const classe = useStyle()
  const { authoremail } = useParams<Params>()

  const authors = useSelector((state: AppState) => state.author.authors)
  const oneAuthor = authors.find((author) => author.email === authoremail)
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Card className={classe.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  KR
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="title"
              subheader="subhead"
            />

            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="./images/romeo.jpg"
                title="romeo and juliot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {oneAuthor?.firstName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {oneAuthor?.lastName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default OneAuthor
