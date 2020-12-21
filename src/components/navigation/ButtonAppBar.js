import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Horse ISO App
          </Typography>   
            <Button color="primary"><NavLink to='/'>Home</NavLink></Button>
            <Button color="primary"><NavLink to='/horses'>Horses</NavLink></Button>
            {props.loggedIn ? <><Button color="primary"><NavLink to='/horses/new'>Register Horse</NavLink></Button> <Button color="primary"><NavLink to='/logout'>LogOut</NavLink></Button></> : <Button color="primary"><NavLink to='/login'>Log in/Sign Up</NavLink></Button> }
        </Toolbar>
      </AppBar>
    </div>
  );
}