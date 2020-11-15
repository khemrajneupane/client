import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCartSharp'

import { AppState } from '../../../types'
import useUser from '../../../hook/useUser'

const useMyStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        margin: '1rem',
      },
    },
  })
)
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -6,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    fontSize: `1rem`,
  },
}))(Badge)

const Basket = () => {
  const myClasses = useMyStyles()
  const [id] = useUser()
  const basket = useSelector((state: AppState) => state.myBasket.myBasket)
  return (
    <div>
      {basket.length === 0 ? (
        <Typography className={myClasses.title} variant="h6" noWrap>
          no items <RemoveShoppingCartIcon fontSize="large" color="error" />
        </Typography>
      ) : (
        <Link to="/countryList">
          {
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={id ? basket.length : 0}
                color="secondary"
              >
                <ShoppingCartIcon fontSize="large" />
              </StyledBadge>
            </IconButton>
          }
        </Link>
      )}
    </div>
  )
}

export default Basket
