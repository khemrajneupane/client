import React, { useCallback, useState } from 'react'

import useBooks from '../../../hook/useBooks'
import BookList from '../../Books/BookList'
import MyDrawer from '../Drawer'
const HomeView = () => {
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
      <BookList book={books} />
    </div>
  )
}
export default HomeView
