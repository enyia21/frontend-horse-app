import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HorseCard({horse, id, removeHorse, user}) {
  const classes = useStyles();
  const deleteOnClick = () => {
      removeHorse(id);
      <Redirect to="/" />
  }
  const setHorseLocalStorage=()=>{
    debugger
    localStorage.id = horse.id
    localStorage.name = horse.name
    localStorage.gender = horse.gender 
    localStorage.size = horse.size
    localStorage.color = horse.color
    localStorage.location = horse.location    
    localStorage.foal_date = horse.foal_date
    localStorage.profile_picture = horse.profile_picture
        
    localStorage.video = horse.video
    localStorage.temperment = horse.temperment
    localStorage.description = horse.description
    localStorage.user_id = horse.user.id
}

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Owner: {horse.user.first_name}
        </Typography>
        <Typography variant="h5" component="h2">
       {horse.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Breed: {horse.breed.common_name}
        </Typography>
        <Typography variant="body2" component="p">
          Description: 
          <br />
          {horse.description}
        </Typography>
      </CardContent>
      <CardActions>
      { user && user.id === horse.user.id  ?
                    <div>
                        <Link to={`/horses/${id}`}>
                            <Button>{horse.name}'s Page</Button>
                        </Link>
                        <Button onClick={deleteOnClick}>Remove {horse.name}</Button>
                        <Link to={`/horses/edit/${id}`}>
                            <Button onClick={setHorseLocalStorage}>Update {horse.name}</Button>
                        </Link>
                    </div>
                    :
                    <Link to={`/horses/${id}`}>
                        <Button>{horse.name}'s Page</Button>
                    </Link>
                    }
      </CardActions>
    </Card>
  );
}