import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import clsx from 'clsx'
import {
  fade,
  Theme,
  makeStyles,
  useTheme,
  createStyles,
  withStyles,
} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { ListItem } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Divider from '@material-ui/core/Divider'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import CssBaseline from '@material-ui/core/CssBaseline'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import { CustomThemeContext } from '../../theme/CustomThemeProvider'
import HourglassEmptySharpIcon from '@material-ui/icons/HourglassEmptySharp'

import BookCard from '../../Users/Card'
import Basket from '../../Users/Basket'
import useUser from '../../../hook/useUser'
import { AppState, SearchType } from '../../../types'
import { logOut } from '../../../redux/actions/LoginAction/logOutAction'

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}))
const useMyStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })
)
export type DrawerThemeProp = {
  setTheme: (name: string) => void
}
export const StyledListItem = withStyles({
  root: {
    margin: '2px',
    color: 'black',
  },
})(ListItem)

const MyDrawer = ({ keyword, handleSearchChange }: SearchType) => {
  const classes = useStyles()
  const myClasses = useMyStyles()
  const theme = useTheme()
  const [id, username, checkAdmin] = useUser()
  const { setTheme }: DrawerThemeProp = useContext(CustomThemeContext)
  const myBasket = useSelector((state: AppState) => state.myBasket.myBasket)
  const loans = useSelector((state: AppState) => state.loan.loans)
  const values = loans.map((u) => u.user.filter((usr) => usr.id === id))
  const loansTotal = values.filter((v) => v.length > 0)
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const handleThemeChange = (theme: string) => setTheme(theme)

  const colors = [
    {
      name: 'black',
      color: '#000000',
    },
    {
      name: 'purple',
      color: '#6d1b7b',
    },
    {
      name: 'orange',
      color: '#f57c00',
    },
    {
      name: 'red',
      color: '#d32f2f',
    },
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Divider />
          <List>
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14GgKhpFq7OQCJZb_bI6daeL5h2sHTjs70_P9x6HD=s96-c"
              alt="profileimg"
            />

            <IconButton>
              <select
                className="form-control"
                onBlur={(e) => handleThemeChange(e.target.value)}
              >
                <option value="black">Theme Color</option>
                {colors.map((item) => (
                  <option value={item.name} key={item.name}>
                    {item.name.toUpperCase()}
                  </option>
                ))}
              </select>
            </IconButton>
            <Tooltip title="home" arrow placement='top-end'>
            <IconButton>
              <Link to="/"> <HomeIcon /></Link>
            </IconButton>
            </Tooltip>
            <Tooltip title ="dashboard" arrow>
            <IconButton>
              <Link to="/dashboard"><DashboardIcon /></Link>
            </IconButton>
            </Tooltip>
            <IconButton>
              {checkAdmin?.isAdmin && (
                <Link to="/admin">{` ${(username).toUpperCase()} Admin`}</Link>
              )}
            </IconButton>
            <Tooltip title ="profile" arrow>
            <IconButton>
              {id && (
                <ListItem>
                  {!checkAdmin?.isAdmin && (
                    <>
                      <Link
                        to={`/profile/:${id}`}
                      >{` ${(username).toUpperCase()}! Loans: ${loansTotal.length}`}</Link>
                    </>
                  )}
                </ListItem>
              )}
            </IconButton>
            </Tooltip>
          </List>
          {id && (
            <div className={myClasses.search}>
              <div className={myClasses.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: myClasses.inputRoot,
                  input: myClasses.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={keyword}
                onChange={handleSearchChange}
                aria-label="Search"
              />
            </div>
          )}
          <Basket />

          <IconButton onClick={() => logOut(dispatch)}>
            {!id ? (
              <Link to="/login">login</Link>
            ) : (
              <Link to="/login">logout</Link>
            )}
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {myBasket.length === 0 ? (
          <Typography>
            Cart is empty{' '}
            <HourglassEmptySharpIcon color="error" fontSize="large" />
          </Typography>
        ) : (
          <BookCard />
        )}
      </Drawer>
    </div>
  )
}

export default MyDrawer
