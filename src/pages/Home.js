import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'

class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar/>
                <h1>page Home</h1>
            </div>
        )
    }
}

export default Home
