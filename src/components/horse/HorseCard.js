import React from 'react'

const HorseCard = ({horse}) => {
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
                <hr/>
            </div>
        </>
    )
}

export default HorseCard
