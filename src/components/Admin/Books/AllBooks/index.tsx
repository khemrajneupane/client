import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import clsx from 'clsx'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import UpdateBook from '../UpdateBook'
import useBooks from '../../../../hook/useBooks'
import bookRemove from '../../../../redux/actions/BookActions/removeBookAction'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
  rootButton: {
    background: 'linear-gradient(45deg, red 70%,  pink 10%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(209, 209, 204, .8)',
  },
}))
const CompleteTransactionInfo = () => {
  const classes = useStyles()
  const [keyword] = useState('')
  const books = useBooks(keyword)
  const dispatch = useDispatch()
  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Category</th>
          <th scope="col">Puhlisher</th>
          <th scope="col">ISBN</th>
          <th scope="col">Availability</th>
          <th scope="col">Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <th>{book.title}</th>
            <td>
              <img
                style={{ height: `4rem` }}
                src='romeo.jpg'
                alt={`${book.isbn}`}
              />
            </td>
            <td>{book.category}</td>
            <td>{book.publisher}</td>
            <td>{book.isbn}</td>
            <td>
              {book.isAvailable ? (
                `available: ${book.total} copies`
              ) : (
                <UpdateBook id={book.id} />
              )}
            </td>
            <td>
              {' '}
              {book.author.map(
                (author) => `${author.firstName} ${author.lastName}`
              )}
            </td>
            <td>
              <Button
                className={clsx(classes.rootButton, classes.textField)}
                onClick={() => bookRemove(book, dispatch)}
              >
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CompleteTransactionInfo
