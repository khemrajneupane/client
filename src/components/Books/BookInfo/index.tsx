import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, CardHeader } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import { AppState } from '../../../types'
import { addBookToBasket } from '../../../redux/actions/BasketAction/basketAction'
import { useState } from 'react'
import useBooks from '../../../hook/useBooks'
import MyDrawer from '../../pages/Drawer'

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

      rootButton: {
        background: 'linear-gradient(45deg, #01caf9 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'brown',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
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
  const [keyword, setKeyword] = useState('')
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setKeyword(e.target.value)
    },
    []
  )
  return (
    <div className="container">
      <MyDrawer keyword={keyword} handleSearchChange={handleSearchChange} />
      {book ? (
        <div
          className="col-12 mb-5"
          key={`${book.id} ${book.rating} ${book.publishedYear}`}
        >
          <Card className={clsx(classe.root)}>
            <div>
              <Link to="/">
                {' '}
                <HomeIcon fontSize="large" />
              </Link>
            </div>
            <div className="container mt-4">
              <div className="row">
                <div className="col-sm-7">
                  <img src={book.image} alt={book.title} />
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
                  <div className="mr-2">
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
