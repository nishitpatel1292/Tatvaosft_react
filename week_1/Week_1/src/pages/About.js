import React, { Component } from 'react'
import Title1 from '../components/Title1'
export default class About extends Component {
    render() {
        return (
            <>
            <h3>About Page</h3>
            <Title1 title="Conditional rendering" description="using ternary operator rendered seperate pages based on state which can be changed by clicking the button"/>
            </>

        )
    }
}
