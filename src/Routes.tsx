import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../src/components/pages/home/Home'
import AdminTable from './components/Admin/AdminTable'
import OneAuthor from './components/Admin/Authors/OneAuthor'
import Dashboard from './components/Books/Dashboard'
import Login from './components/Login'
import SignUpForm from './components/SignUpForm'
import Profile from './components/Users/Profile'
import ItemInfo from './components/Users/ItemInfo'
import BookInfo from './components/Books/BookInfo'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/admin" component={AdminTable} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/thisAuthor/:id" component={OneAuthor} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/item" component={ItemInfo} />
      <Route exact path="/bookinfo/:id" component={BookInfo} />
    </Switch>
  )
}

export default Routes
