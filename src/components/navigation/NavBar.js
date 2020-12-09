import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav>
                 <ul>
                    <li><NavLink to='/horses'>Horses</NavLink></li>
                </ul>               
            </nav>
        )
    }
}

export default NavBar
