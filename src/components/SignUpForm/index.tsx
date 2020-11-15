import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { Button, Typography } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import FormControl from '@material-ui/core/FormControl'
import FilledInput from '@material-ui/core/FilledInput'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'

import useForm from '../../hook/useForm'
import FlippyCard from '../Books/FlippyCard'
import userAdd from '../../redux/actions/UserActions/addUserAction'
import ConstantHeader from '../ConstantHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: 10,
    height: 50,

    width: 200,
  },
  textField: {
    width: 200,
  },
  fieldMargin: {
    marginRight: 100,
  },
  marginCentered: {
    margin: '0 auto',
  },
}))

const SignUpForm = () => {
  const classes = useStyles()
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: '',
    showPassword: false,
  })
  const initialState = {
    username: '',
    email: '',
    password: '',
  }
  const { value, handleInputChange, setValue } = useForm(initialState)
  const dispatch = useDispatch()
  const handleSubmit = (event: any) => {
    event.preventDefault()
    userAdd(value, dispatch)
    setValue(initialState)
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }

  return (
    <div className={classes.root}>
      <div className={classes.marginCentered}>
        <ConstantHeader />
        <Typography variant="h3" component="p">
          Create an Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel>Email</InputLabel>
            <FilledInput
              type="email"
              name="email"
              value={value.email}
              onChange={handleInputChange}
            />
            <FormHelperText id="filled-weight-helper-text">
              <small>Type your valid email</small>
            </FormHelperText>
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel>Enter your username</InputLabel>
            <FilledInput
              id="filled-adornment-name"
              type="text"
              name="username"
              value={value.username}
              onChange={handleInputChange}
            />
            <FormHelperText id="filled-weight-helper-text">
              <small>Type your Full Name</small>
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              name="password"
              value={value.password}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="filled-weight-helper-text">
              <small>Type a password of your choice</small>
            </FormHelperText>
          </FormControl>
          <FormControl variant="filled">
            <Button
              className={classes.withoutLabel}
              id="signup"
              type="submit"
              variant="contained"
            >
              Sign up
            </Button>
          </FormControl>
        </form>
        <div>
          <FlippyCard />
        </div>
      </div>
    </div>
  )
}
export default SignUpForm
