import React, { Component } from 'react'
import {Button} from '@material-ui/core'
class NewButton extends Component {
    state = {
        count: 0
    }

    upDateCount = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })

        console.log('a: outside of the fetch');

        fetch('http://localhost:3001/horses')
            .then(resp => {
                console.log('b: inside the fetch', resp)
                return resp.json();
            })
            .then(data => console.log('c: inside the fetch', data))
            .catch(errors => console.log('d', errors))

        console.log("e: outside of the fetch")

        // a, e, b, c
    }

    render() {
        return (
            <div>
               <Button onClick={this.upDateCount}>Click Me</Button> 
                <h3>Count: {this.state.count}</h3>

            </div>
        )
    }
}

export default NewButton
