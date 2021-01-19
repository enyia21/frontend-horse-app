import React, {useState} from 'react';
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
import {fetchCreateNewHorse} from '../../actions/horseActionCreators'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const initialHorseInfo = {
    name: "",
    location: "",
    gender: "",
    size: "",
    color: "",
    foal_date: "",
    profile_picture: "",
    video: "", 
    temperment: "",
    description: ""
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function HorseForm(props) {
    const classes = useStyles();
    const history = useHistory();
    const [values, setValues] = useState(initialHorseInfo)
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    // const loggedInUser = useSelector(state => state.app_user)
    const dispatch = useDispatch()
    const handleOnSubmit = (e) => {
    e.preventDefault()

    props.user ? (values.user_id = `${props.user.id}`) : (values.user_id="0")
    values.breed_id = `${(1 + Math.floor((Math.random()*1500)))}`
    dispatch(fetchCreateNewHorse(values))
    history.push("/horses")
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register Horse
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="hname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                onChange={handleOnChange}

                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                onChange={handleOnChange}
                autoComplete="location"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="gender"
                label="Gender"
                name="gender"
                onChange={handleOnChange}
                autoComplete="gender"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="color"
                label="color"
                id="color"
                onChange={handleOnChange}
                autoComplete="color"
              />
            </Grid>   
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="size"
                label="Size"
                id="size"
                type="number"
                onChange={handleOnChange}
                autoComplete="size"
              />
            </Grid>          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="profile_picture"
                label="Profile Picture"
                type="profile_picture"
                id="profile_picture"
                onChange={handleOnChange}
                autoComplete="profile_picture"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="foal_date"
                label="Foal Date"
                type="date"
                id="foal_date"
                onChange={handleOnChange}
                autoComplete="foalDate"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="video"
                label="Video"
                type="text"
                id="video"
                onChange={handleOnChange}
                autoComplete="video"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="temperment"
                label="Temperment"
                type="test"
                id="temperment"
                onChange={handleOnChange}
                autoComplete="temperment"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                name="description"
                label="Description"
                type="text box"
                id="description"
                onChange={handleOnChange}
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register Horse
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
