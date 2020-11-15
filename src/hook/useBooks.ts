import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, Books } from '../types'
import bookList from '../redux/actions/BookActions/bookGetAllAction'
import userList from '../redux/actions/UserActions/userGetAllAction'
import authorList from '../redux/actions/AuthorAction/authorGetAllAction'
import loanList from '../redux/actions/LoanAction/loanFetchAllAction'
const useBooks = (keyword: string) => {
  const [books, setBooks] = useState<Books[]>([])
  const myBooks = useSelector((state: AppState) => state.bookAll.books)
  const authors = useSelector((state: AppState) => state.author.authors)
   const dispatch = useDispatch()
  useEffect(() => {
    const loadData = async () => {
      try {
        dispatch(bookList(dispatch))
        dispatch(userList(dispatch))
        dispatch(authorList(dispatch))
       
      } catch (error) {
        console.log(error.name)
      }
      
    }
    loadData()
  }, [dispatch])

  useEffect(() => {
    let filteredBooks = myBooks.filter((book) => {
      return (
        book.title.toLowerCase().search(keyword) !== -1 ||
        book.category.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        book.isbn.toLowerCase().search(keyword.toLowerCase()) !== -1
      )
    })
    setBooks(filteredBooks)
  }, [myBooks, keyword])
  return books
}
export default useBooks
