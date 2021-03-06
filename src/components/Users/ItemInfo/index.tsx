import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import HomeIcon from '@material-ui/icons/Home'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp'
import { deleteBookFromBasket } from '../../../redux/actions/BasketAction/basketAction'

import Tooltip from '@material-ui/core/Tooltip'
import { AppState } from '../../../types'
import CreateLoan from '../Loans/CreateLoan'

const useStyles = makeStyles({
  root: {
    width: 450,
    margin: '0 auto',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
})
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip)

const ItemInfo = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const myBasket = useSelector((state: AppState) => state.myBasket.myBasket)
  return (
    <div className="container">
      <div className="row mt-3">
        {myBasket.length > 0 ? (
          <Card className={classes.root}>
            {myBasket.map((myBasket) => (
              <Card key={myBasket.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={myBasket.title}
                    height="100"
                    image={myBasket.image}
                    title={myBasket.title}
                  />
                </CardActionArea>
                <CardActions>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography color="inherit">{`Do you want to delete ${myBasket.title}?`}</Typography>
                      </React.Fragment>
                    }
                  >
                    <Button
                      size="large"
                      color="primary"
                      onClick={() => dispatch(deleteBookFromBasket(myBasket))}
                    >
                      <DeleteOutlineSharpIcon fontSize="large" />
                    </Button>
                  </HtmlTooltip>
                  <Typography>
                    <CreateLoan book={myBasket.id} />
                  </Typography>
                </CardActions>
                <div
                  style={{
                    padding: `1rem`,
                    height: `1.5px`,
                    backgroundColor: `white`,
                    marginBottom: `2rem`,
                  }}
                />
              </Card>
            ))}
          </Card>
        ) : (
          <span style={{ margin: '0 auto', backgroundColor: 'brown' }}>
            Your cart is empty
          </span>
        )}

        <div>
          <Link to="/">
            {' '}
            <HomeIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemInfo
