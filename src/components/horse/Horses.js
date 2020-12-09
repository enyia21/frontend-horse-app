import React from 'react'
import HorseCard from './HorseCard'
const Horses = (props) => {
    const horses = props.horses.map((horse) => {
        return <HorseCard horse={horse} key={horse.id}/>
    })
    return (
        <div>
            {horses}
        </div>
    )
}

export default Horses
