import React, { Component } from 'react'
import {connect} from 'react-redux'
import HorseCard from './components/horse/Horses'
import {fetchRemoveHorse} from './actions/horseActionCreators'
import {fetchHorses} from './actions/horseActionCreators'
class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <h2>Welcome to the Horse App Home Page</h2>
                    {
                        !!this.props.user.id ? 
                            `Welcome to your horse app ${this.props.user.first_name}`
                        : 
                        <div>
                            <p>Horse Search Bar</p>
                            <p>Horse Breeds</p>
                        </div>
                    }

                </div>
            </>
        )
    }
}

export default connect(null, {fetchHorses, fetchRemoveHorse})(Home)
