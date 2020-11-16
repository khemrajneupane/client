import React, { useCallback, useState } from 'react'

import CreateBook from '../Books/CreateBook'
import CreateAuthor from '../Authors/CreateAuthor'
import UserListTable from '../../Users/UserList'

import './AdminTable.css'
import CompleteTransactionInfo from '../Books/AllBooks'
import useBooks from '../../../hook/useBooks'
import MyDrawer from '../../pages/Drawer'

const AdminTable = () => {
  const [keyword, setKeyword] = useState('')
  const books = useBooks(keyword)
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setKeyword(e.target.value)
    },
    []
  )
  return (
    <div className="containers">
      <div className="containers__headers">
        <MyDrawer keyword={keyword} handleSearchChange={handleSearchChange} />
      </div>
      <div className="containers__author">
        <CompleteTransactionInfo />
      </div>
      <div className="containers__all">
        <div className="containers__all__author">
          <CreateAuthor />
        </div>
        <div className="containers__all__book">
          <CreateBook />
        </div>
      </div>
      <div className="containers__all__user">
        <UserListTable />
      </div>
    </div>
  )
}

export default AdminTable
