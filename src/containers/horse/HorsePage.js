import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchSelectedHorse, fetchRemoveHorse} from '../../actions/horseActionCreators'
import HorseShow from '../../components/horse/HorseShow'
class HorsePage extends Component {
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.fetchSelectedHorse(id);
    }
    render() {
        if(this.props.loading){
            return <div>Loading...</div>
        }else{
            return (
                <div>
                    {/* Your selected Horse */}
                    <HorseShow horse={this.props.selectedHorse} key={this.props.selectedHorse.id} user={this.props.user} id={this.props.selectedHorse.id} removeHorse={fetchRemoveHorse}/>
                </div>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        loading: state.horses.loading,
        selectedHorse: state.horses.selectedHorse,
        user: state.users.app_user
    }
}

export default connect(mapStateToProps, {fetchSelectedHorse, fetchRemoveHorse})(HorsePage)
