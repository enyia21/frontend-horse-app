import React, { Component } from 'react'
import { connect } from 'react-redux'
import Horses from '../../components/horse/Horses'
import {fetchHorses} from '../../actions/horseActionCreators'
import {fetchRemoveHorse} from '../../actions/horseActionCreators'
class HorsesPage extends Component {
    componentDidMount(){
    this.props.fetchHorses()
    }
    render() {
        if (this.props.loading || this.props.loading===undefined){
            return <div>Loading...</div>
        }else{
            return (
                <div>
                    <h2>Horses</h2>
                    <Horses horses={this.props.horses} removeHorse={fetchRemoveHorse} user={this.props.loggedIn ? this.props.user : false}/>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return{
        loading: state.horses.loading,
        horses: state.horses.horses,
        user: state.users.app_user,
        loggedIn: state.users.loggedIn
    }
}
export default connect(mapStateToProps, {fetchHorses,fetchRemoveHorse})(HorsesPage);
