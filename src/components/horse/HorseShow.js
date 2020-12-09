import React from 'react'


const HorseShow = ({horse}) => {
    
    const {name, gender, size, color, 
        foal_date, profile_picture, 
        video, temperment, description,} = horse;
    
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
        </>
    )
}

export default HorseShow;
