import React, { Component } from 'react'
import { connect } from 'react-redux'
import Horses from '../../components/horse/Horses'

class HorsesPage extends Component {

    render() {
        
        console.log(this.props)
        if (this.props.loading || this.props.loading===undefined){
            return <div>Loading...</div>
        }else{
            return (
                <div>
                    <h2>Horses</h2>
                    <Horses horses={this.props.horses}/>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return{
        loading: state.horses.loading,
        horses: state.horses.horses
    }
}
export default connect(mapStateToProps)(HorsesPage);
