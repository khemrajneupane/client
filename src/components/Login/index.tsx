import { Button } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../hook/useForm'
import bookList from '../../redux/actions/BookActions/bookGetAllAction'
import userList from '../../redux/actions/UserActions/userGetAllAction'
import loginServices from '../../services/loginServices'
import MyDrawer from '../pages/Drawer'

const Login = () => {
  const initialState = {
    username: '',
    email: '',
    password: '',
  }
  const [errMsg, setErrMsg] = useState('')
  const history = useHistory()
  const { value, handleInputChange, setValue } = useForm(initialState)
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()
  bookList(dispatch)
  userList(dispatch)
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setKeyword(e.target.value)
    },
    []
  )

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    try {
      const aUser = await loginServices.login(value)
      setValue(initialState)
      const loggedToken = window.localStorage.setItem(
        'loggedUser',
        JSON.stringify(aUser)
      )
      window.localStorage.setItem('userId', JSON.stringify(aUser.userInfo.id))
      window.localStorage.setItem(
        'username',
        JSON.stringify(aUser.userInfo.username)
      )
      if (aUser) {
        aUser.token = loggedToken
        history.push('/')
      }
    } catch (error) {
      if (error.name === 'TypeError') {
        setErrMsg('Please provide the field vlaues')
        setTimeout(() => {
          setErrMsg('')
        }, 5000)
      } else if (error.name === 'Error') {
        setErrMsg(`Incorrect fields. Please try login again!`)
        setTimeout(() => {
          setErrMsg('')
        }, 5000)
      }
    }
  }

  return (
    <div className="container" style={{marginTop:'8rem'}}>
      <div className="row">
        <MyDrawer keyword={keyword} handleSearchChange={handleSearchChange} />
      </div>
      <form onSubmit={handleLogin}>
        <div className="form-group mt-5">
          <div
            style={{
              backgroundColor: '#ffcccb',
              fontSize: '2rem',
              textAlign: 'center',
            }}
          >
            {errMsg ? <span>{errMsg}</span> : null}
          </div>
          <label htmlFor="exampleInputEmail1">Username:<strong>testaaja</strong> </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            type="text"
            name="username"
            value={value.username}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="exampleInputEmail2">Email: <strong>testaaja@gmail.com</strong> </label>
          <input
            className="form-control"
            id="exampleInputEmail2"
            type="email"
            name="email"
            value={value.email}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="exampleInputEmail3">Password: <strong>testaaja</strong></label>
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
              Login
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
