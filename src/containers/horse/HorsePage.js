import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchSelectedHorse, removeSelectedHorse} from '../../actions/horseActionCreators'
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
                    <HorseShow horse={this.props.selectedHorse} key={this.props.selectedHorse.id}/>
                </div>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        loading: state.horses.loading,
        selectedHorse: state.horses.selectedHorse
    }
}

export default connect(mapStateToProps, {fetchSelectedHorse, removeSelectedHorse})(HorsePage)
