import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import clsx from 'clsx'
import HomeIcon from '@material-ui/icons/Home'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, CardHeader } from '@material-ui/core'

import { AppState } from '../../../types'
import { addBookToBasket } from '../../../redux/actions/BasketAction/basketAction'

import './BookInfo.css'

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
  rootButton: {
    background: 'linear-gradient(45deg, #01caf9 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'brown',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
})
interface Params {
  id: string
}
const BookInfo = () => {
  const classe = useStyle()
  const { id } = useParams<Params>()
  const books = useSelector((state: AppState) => state.bookAll.books)
  const book = books.find((book) => book.id === id)
  const dispatch = useDispatch()
  return (
    <div className="container myContainer">
      {book ? (
        <div
          className="col-12"
          key={`${book.id} ${book.rating} ${book.publishedYear}`}
        >
          <Card className={clsx(classe.root)}>
            <div>
              <Link to="/">
                {' '}
                <HomeIcon fontSize="large" />
              </Link>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-7">
                  <img src="romeo.jpg" alt={book.title} />
                </div>
                <div className="col-sm-5">
                  <Typography>ISBN: {book.isbn}</Typography>
                  <Typography>
                    {book.title} is a {book.category} book
                  </Typography>

                  <Typography>
                    First published in {book.publishedYear.slice(0, 4)}
                  </Typography>
                  <Typography>Publisher: {book.publisher}</Typography>
                </div>
              </div>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span style={{ fontFamily: 'museo-sans' }}>
                    Description: {book.description}
                  </span>
                </Typography>
              </CardContent>
            </div>
            <CardHeader
              action={
                <div className="row">
                  <div>
                    <Button
                      className={clsx(classe.rootButton)}
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
      ) : null}
    </div>
  )
}
export default BookInfo
