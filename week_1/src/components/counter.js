import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }
        this.increment = this.increment.bind(this)
    }
    increment() {
        this.setState((prevState) => (
            {
                number: prevState.number + 1
            }
        ))
    }

    render() {
        return (
            <>
                <h3 >
                    counter : {this.state.number}
                    <button className='ml-3' onClick={this.increment}>Increment</button>
                </h3>
            </>
        )
    }
}

