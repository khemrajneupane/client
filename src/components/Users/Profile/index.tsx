import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import HomeIcon from '@material-ui/icons/Home';

import { useSelector } from 'react-redux';
import { AppState } from '../../../types';
import useUser from '../../../hook/useUser';
import LoanedBook from '../LoanedBooks';

import './Profile.css'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UpdateUser from '../UserCreate';
import useBooks from '../../../hook/useBooks';
import MyDrawer from '../../pages/Drawer';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
    large: {
      width: 50,
      height: 50,
    },
});

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
    password
  
  };
}

const Row = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell size= "medium" variant ="head">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
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
                    <TableCell>Username</TableCell>
                    <TableCell align="right">Rights</TableCell>
                    <TableCell align="right">Password</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={row.joinedDate}>
                      <TableCell component="th" scope="row">
                        {row.joinedDate}
                      </TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell align="right">{row.isAdmin? 'Admin': 'Normal User'}</TableCell>
                      <TableCell>*********************</TableCell>
                    </TableRow>
                </TableBody> 
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Profile = () => {
  const [keyword, setKeyword] = useState('')
  const books = useBooks(keyword)
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setKeyword(e.target.value)
    },
    []
  )
  const classes = useRowStyles();
    const [id, username]= useUser()
    const users = useSelector((state: AppState) => state.user.users)
    const userById = users.filter(user => user.id === id)
  return (
    <div className='container background'>
       <MyDrawer keyword={keyword} handleSearchChange={handleSearchChange} />
      <div  className="mb-4">
       <LoanedBook />
       </div>
    <TableContainer component={Paper}>
    <Typography>Personal Information</Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Username</TableCell>
            <TableCell align="right">Emails</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userById && userById.map((rows) => (
            <><Row key={rows.id} row={rows} />
              <UpdateUser id={rows.id} /></>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
export default Profile