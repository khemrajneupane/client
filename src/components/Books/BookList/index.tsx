import React from 'react'
import { useDispatch } from 'react-redux'

import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, CardHeader } from '@material-ui/core'

import useUser from '../../../hook/useUser'
import { BookListType } from '../../../types'
import UpdateBook from '../../Admin/Books/UpdateBook'
import UpdateAuthor from '../../Admin/Authors/UpdateAuthor'
import { addBookToBasket } from '../../../redux/actions/BasketAction/basketAction'

import './BookList.css'

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

    rootButton: {
      background: 'linear-gradient(45deg, #01caf9 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  })
)
const useStyle = makeStyles({
  root: {
    minWidth: 400,
    paddingRight: 2,
    background: 'linear-gradient(45deg, #01caf9 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .9)',
  },
  media: {
    height: 100,
  },
})
const makeInitials = (firstName: any, lastName: any) => {
  const joinNames = `${firstName} ${lastName}`
  const matcher = joinNames.match(/\b(\w)/g)?.join('')
  return matcher
}
const BookList = ({ book }: BookListType) => {
  const classes = useStyles()
  const classe = useStyle()
  const dispatch = useDispatch()
  const [id, username, checkAdmin] = useUser()
  return (
    <div className="container">
      {book.map((book) => {
        let authorName = ''
        return (
          <div
            className="col-12 mb-5"
            key={`${book.id} ${book.rating} ${book.publishedYear}`}
          >
            <Card className={clsx(classe.root)}>
              {book.author.map((author) => {
                authorName = `${author.firstName},${author.lastName}`
                return (
                  <CardHeader
                    key={`${book.id} ${book.rating} ${book.publishedYear}`}
                    action={
                      <div className="row">
                        {username && checkAdmin?.isAdmin && (
                          <div className="mr-5 w-20">
                            <UpdateAuthor id={author.id} />
                          </div>
                        )}
                        {username && checkAdmin?.isAdmin && (
                          <div className="mr-5 w-20">
                            <UpdateBook id={book.id} />
                          </div>
                        )}
                      </div>
                    }
                  />
                )
              })}
              <div className="container">
                <div className="row">
                  <div className="col-sm-7">
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="col-sm-5">
                    <Typography>ISBN: {book.isbn}</Typography>
                    <Typography>
                      {book.title} is a {book.category} book
                    </Typography>
                    {book.author.map((names) => (
                      <Typography key={names.id}>
                        by {names.firstName} {names.lastName}
                      </Typography>
                    ))}
                    <Typography>
                      First published in {book.publishedYear.slice(0, 4)}
                    </Typography>
                    <Typography>Publisher: {book.publisher}</Typography>
                  </div>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${book.title} by:  ${authorName}`}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <span style={{ fontFamily: 'museo-sans' }}>
                      {book.description}
                    </span>
                  </Typography>
                </CardContent>
              </div>
              <CardHeader
                action={
                  <div className="row">
                    <div className="mr-2">
                      <Button
                        type="submit"
                        className={clsx(classes.rootButton)}
                        color="inherit"
                      >
                        BookInfo
                      </Button>
                    </div>
                    <div className="mr-2">
                      <Button
                        type="submit"
                        className={clsx(classes.rootButton)}
                        color="inherit"
                      >
                        AuthorInfo
                      </Button>
                    </div>
                    <div className="mr-2">
                      <Button
                        onClick={() => dispatch(addBookToBasket(book, id))}
                      >
                        Add to basket
                      </Button>
                    </div>
                  </div>
                }
              />
            </Card>
          </div>
        )
      })}
    </div>
  )
}
export default BookList
