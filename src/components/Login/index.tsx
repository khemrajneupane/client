import { Button } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../hook/useForm'
import { logIn } from '../../redux/actions/LoginAction/loginAction'
import MyDrawer from '../pages/Drawer'

const Login = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
  }
  const history = useHistory()
  const { value, handleInputChange, setValue } = useForm(initialState)
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setKeyword(e.target.value)
    },
    []
  )
  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    logIn(value, dispatch)
    setValue(initialState)
    history.push('/')
  }
  return (
    <div className="container">
      <div className="row">
        <MyDrawer keyword={keyword} handleSearchChange={handleSearchChange} />
      </div>
      <div className="col-sm-4">
        <span style={{ backgroundColor: 'grey' }}>
          This is a demo app ! To test the app as admin: (Email:
          khem.neupane@integrify.io) Username: khemraj Password: khemraj
        </span>
      </div>
      <form onSubmit={handleLogin}>
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">Username </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            type="text"
            name="username"
            value={value.username}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="exampleInputEmail2">Email </label>
          <input
            className="form-control"
            id="exampleInputEmail2"
            type="email"
            name="email"
            value={value.email}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="exampleInputEmail3">Password</label>
          <input
            className="form-control"
            id="exampleInputEmail3"
            type="password"
            name="password"
            value={value.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Button type="submit" variant="outlined">
              Singin
            </Button>
          </div>
          <div className="col-sm-4">
            <Button variant="outlined">
              <Link to="/signup">Signup</Link>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Login
