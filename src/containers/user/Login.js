// import React from 'react'
import { connect } from 'react-redux'
import {fetchLoginUser} from '../../actions/userActionCreators'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
// class Login extends Component {
  //     state = {
//         username: "",
//         password: ""
//     }

//     handleOnChange = (e) => this.setState({[e.target.name]: e.target.value})

//     handleOnSubmit = (e) => {
//         e.preventDefault()

//         this.props.fetchLoginUser(this.state);
//         debugger;
//         console.log(this.state);
//     }
//     render() {
//         return (
  //             <div>
  //                 <h3>Login!</h3>
//                 <form >
//                     <label>
//                         <input type="text" name="username" placeholder="username"  /><br />
//                     </label>

//                      <label>
//                         <input type="password" name="password" placeholder="password" onChange={this.handleOnChange} value={this.state.password} /><br />
//                     </label>    

//                     <label>
//                         <input type="submit" value="submit" />
//                     </label>   
//                 </form>
//             </div>
//         )
//     }
// }

// export default connect(null, { fetchLoginUser })(Login);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Horse ISO 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialLogin = {
    username: '',
    password: ''
}
function Login(){
  const classes = useStyles();
  const [values, setValues] = useState(initialLogin)


  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.loggedIn)

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]:value
    })   
  }
    const handleOnSubmit = (e) => {
      e.preventDefault()
      debugger
      
      dispatch(fetchLoginUser(values))

    }
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleOnSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                value={values.username}
                onChange = {handleOnChange}
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange = {handleOnChange}
                value={values.password}              
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2" href="/users/new">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
    }
export default Login