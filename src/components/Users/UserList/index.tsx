import React from 'react'
import { useSelector } from 'react-redux'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import Collapse from '@material-ui/core/Collapse'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TableContainer from '@material-ui/core/TableContainer'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import { AppState } from '../../../types'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})

function createData(
  username: string,
  email: string,
  joinedDate: string,
  id: string,
  isAdmin: boolean,
  password: string
) {
  return {
    username,
    email,
    joinedDate,
    id,
    isAdmin,
    password,
  }
}
const Row = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell size="medium" variant="head">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.username}
        </TableCell>
        <TableCell align="right">{row.email}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h4" gutterBottom component="p">
                SECRETs
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Member Date</TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Rights</TableCell>
                    <TableCell align="right">Password</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.joinedDate}>
                    <TableCell component="th" scope="row">
                      {row.joinedDate}
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell align="right">
                      {row.isAdmin ? 'Admin' : 'Normal User'}
                    </TableCell>
                    <TableCell>*********************</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const UserListTable = () => {
  const users = useSelector((state: AppState) => state.user.users)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Usernames</TableCell>
            <TableCell align="right">Emails</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((rows) => (
            <Row key={rows.username} row={rows} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default UserListTable
