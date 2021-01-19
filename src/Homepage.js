import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import {useSelector} from 'react-redux'
import HorsesPage2 from './containers/horse/HorsesPage2'
const useStyles = makeStyles((theme) => ({
    homeDisplay: {
        alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixid=MXwxOTg2MDJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1')`,
        height: "600px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
          }
    }
}));

function Homepage(props) {
    const classes = useStyles();
    //selectors 
    const horses = useSelector(state => state.horses.horses)
    const user = useSelector(state => state.users.app_user)
    const loggedIn = useSelector(state => state.users.loggedIn)

    const interestingHorses = horses.filter(horse => horse.user.id < 3)
    
    return (
        <>
            <div>
                <Box className={classes.homeDisplay}>
                    <Box align="center">
                        Welcome to the Horse App Home Page
                    </Box>
                </Box>

                {
                    loggedIn && !!user.id ? 
                    <div>
                        <h2>
                            {`Welcome to your horse app ${props.user.first_name}`}
                        </h2>
                        <HorsesPage2 horses={props.horses}/>
                    </div>
                    : 
                    <div>
                        <h2>Interesting Horses</h2>
                        <HorsesPage2 horses={interestingHorses} />
                    </div>
                }

            </div>
        </>
    );
}
export default Homepage;