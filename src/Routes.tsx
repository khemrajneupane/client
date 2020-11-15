import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Home from '../src/components/pages/home/Home'
import AdminTable from './components/Admin/AdminTable'
import OneAuthor from './components/Admin/Authors/OneAuthor'
import Dashboard from './components/Books/Dashboard'
import Dashboards from './components/Books/Dashboards'
import Login from './components/Login'
import SignUpForm from './components/SignUpForm'
import Profile from './components/Users/Profile'
import UserListTable from './components/Users/UserList'
import userServices from './services/userServices'
import { AppState } from './types'

const Routes = () => {
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const  users = useSelector((state: AppState) => state.user.users)
  const loggedUserInfo = users.find(userEmail => userEmail.email === email)
useEffect(()=>{
  const loggedUserJSON = window.localStorage.getItem("loggedUser");
  if (loggedUserJSON && loggedUserInfo) {
    const aUser = JSON.parse(loggedUserJSON);
    setEmail(aUser.userInfo.email)
    setIsAdmin(loggedUserInfo.isAdmin)
  }
},[])

  return (
    <Switch>
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboards" component={Dashboard} />
      <Route exact path="/dashboard" component={Dashboards} />
      <Route exact path="/admin" component={AdminTable} /> 
      <Route exact path="/login" component={Login} />
      <Route exact path="/authoremail" component={OneAuthor} />
      <Route exact path="/profile/:id" component={Profile} />
     
      
  </Switch>)
}

export default Routes
