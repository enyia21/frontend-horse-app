import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
const HorseCard = ({horse, id, removeHorse, user}) => {
    const dispatch = useDispatch();
    console.log(horse)
    const deleteOnClick = () => {
        dispatch(removeHorse(id));
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
        <>
            <div>
                <hr/>
                    <h3>Horse Name: {horse.name}</h3>
                    <ul>
                        <li>Horse Gender: {horse.gender}</li>
                        <li>Horse Owner: {horse.user.first_name}</li>
                        <li>Horse Breed: {horse.breed.common_name}</li>  
                    </ul>
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
                <hr/>
            </div>
        </>
    )
}

export default HorseCard
