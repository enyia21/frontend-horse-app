import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
const HorseCard = ({horse, id}) => {
    console.log(id)
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
                    <Link to={`/horses/${id}`}>
                        <Button>{horse.name}'s Page</Button>
                    </Link>
                <hr/>
            </div>
        </>
    )
}

export default HorseCard
