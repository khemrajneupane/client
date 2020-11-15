import React from 'react'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'

import './SignUpForm.css'

const LogInForm = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Typography variant="h5">Already a member ?</Typography>
        </div>
        <div className="flip-card-back">
          <Typography variant="h5">
            Click <Link to="/login">here</Link> to login
          </Typography>
        </div>
      </div>
    </div>
  )
}
export default LogInForm
