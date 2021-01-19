import React from 'react'
import HorseCard2 from './HorseCard2'
import Grid from '@material-ui/core/Grid'
const Horses = (props) => {
    const horses = props.horses.map((horse) => {
        return (             
                <Grid item key={horse.id} xs={12} sm={6} md={4}>
                    <HorseCard2 horse={horse} key={horse.id} id={horse.id} removeHorse={props.removeHorse} user={props.user}/>               
                </Grid>
        )
    })
    return (
        <>
            {horses}
        </>
    )
}

export default Horses
