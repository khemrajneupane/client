import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
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
    minWidth: 50,
    backgroundColor: 'rgba(0,0,0,.2)',
    overflow: 'scroll',
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

const BookCard = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const myBasket = useSelector((state: AppState) => state.myBasket.myBasket)
  return (
    <Card className={classes.root}>
      {myBasket.map((myBasket) => (
        <Card key={myBasket.id}>
          <CardMedia
            component="img"
            alt={myBasket.title}
            height="100"
            image={myBasket.image}
            title={myBasket.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {myBasket.title}
            </Typography>
          </CardContent>

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
  )
}

export default BookCard
