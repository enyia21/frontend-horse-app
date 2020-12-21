import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'

const HorseShow = ({horse, id, removeHorse, user}) => {
    const dispatch = useDispatch();
    console.log(removeHorse)
    const deleteOnClick = () => {
        dispatch(removeHorse(id));
        <Redirect to="/" />
    }
    const {name, gender, size, color, 
        foal_date, profile_picture, 
        video, temperment, description} = horse;
    
    return (
        <>
            <h3>Horse Name: { name } </h3>
            <p>size: {size}</p>
            <p>color: {color}</p>
            <p>foal_date: {foal_date}</p>
            <p>profile_picture: {profile_picture}</p>
            <p>video: {video}</p>
            <p>temperment: {temperment}</p>
            <p>gender: {gender}</p>
            <p>Description: {description}</p>
            <hr />
            { !!user.id && (user.id === horse.user.id)  ?
                    <div>
                        <Link to={`/horses/${id}`}>
                            <Button>{horse.name}'s Page</Button>
                        </Link>
                        <Button onClick={deleteOnClick}>Remove {horse.name}</Button>
                        <Link to={`/horses/edit/${id}`}>
                            <Button>Update {horse.name}</Button>
                        </Link>
                    </div>
                    :
                    <Link to={`/horses/${id}`}>
                        <Button>{horse.name}'s Page</Button>
                    </Link>
                    }
        </>
    )
}

export default HorseShow;
