import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Horses} from './components/horse/Horses'
import {fetchRemoveHorse} from './actions/horseActionCreators'
import {fetchHorses} from './actions/horseActionCreators'
class Home extends Component {
    render() {
        debugger;
        const userHorses = this.props.horses.filter(horse => horse.user.id == this.props.user.id)
        return (
            <>
                <div>
                    <h2>Welcome to the Horse App Home Page</h2>
                    {
                        !!this.props.user.id ? 
                        <div>
                            <h3>
                                {`Welcome to your horse app ${this.props.user.first_name}`}
                            </h3>
                            {}
                        </div>
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
const mapStateToProps = (state) => ({
    loading: state.horses.loading,
    horses: state.horses.horses,
    user: state.users.app_user,
    loggedIn: state.users.loggedIn
})
export default connect(mapStateToProps, {fetchHorses, fetchRemoveHorse})(Home)
