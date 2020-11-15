import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {  SearchType } from '../../types'
import { logOut } from '../../redux/actions/LoginAction/logOutAction'

import './NavBar.css'
import useUser from '../../hook/useUser'


const NavBarHeader = ({ keyword, handleSearchChange }: SearchType) => {
  const dispatch = useDispatch()
  const [id, username, checkAdmin] = useUser()

  return (
    <div className="view">
      <header className="header">
        <div className="header__image">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GgKhpFq7OQCJZb_bI6daeL5h2sHTjs70_P9x6HD=s96-c"
            alt="khem-pic"
          />
        </div>
        <div className="header__search">
          <input
            value={keyword}
            onChange={handleSearchChange}
            className="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__list__list1">
              <Link to="/">Home</Link>{' '}
              <span className="sr-only">(current)</span>
            </li>
            <li className="header__nav__list__list2">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="header__nav__list__list3">
               {checkAdmin?.isAdmin && <>
               <span style={{ fontSize: `1.2rem` }}><sup>Admin </sup> </span><Link to="/admin">{username}</Link>
               </>}
            </li>
            <li className="header__nav__list__list3">
               {!checkAdmin?.isAdmin && <>
               <span style={{ fontSize: `1.5rem` }}><sup>Welcome </sup> </span><Link to="/">{` ${username}`}</Link>
               </>}
            </li>

            <li className={id?"hide":"header__nav__list__list4"}>
              <Link to="/login">Login</Link>
            </li>
            <li className={id?"hide":"header__nav__list__list5"}>
              <Link to="/signup">Signup</Link>
            </li>
            <li className={!id?"hide":"header__nav__list__list6"} >
            <button className="btn btn-danger"  onClick={()=>logOut(dispatch)}>
                <Link to ="/" >logout</Link>
            </button>
            </li>
            <li className={!id?"hide":"header__nav__list__list6"} >
           
            </li>
          </ul>
        </nav>

      </header>
      
    </div>
  )
}




