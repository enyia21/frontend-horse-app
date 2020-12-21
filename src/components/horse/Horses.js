import React from 'react'
import HorseCard from './HorseCard'
import {fetchRemoveHorse} from '../../actions/horseActionCreators'
const Horses = (props) => {
    const horses = props.horses.map((horse) => {
        return <HorseCard horse={horse} key={horse.id} id={horse.id} removeHorse={props.removeHorse} user={props.user}/>
    })
    return (
        <div>
            {horses}
        </div>
    )
}

export default Horses
