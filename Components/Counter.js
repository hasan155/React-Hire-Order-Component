import React, { Component } from 'react'
import UpdateComponet from "./WithCounter";

class Counter extends Component {
    render() {
        const { counter, incrementHandler } = this.props;
        return (
            <div>
                <button onClick={incrementHandler}> Click {counter} Times</button>
            </div>
        )
    }
}

export default UpdateComponet(Counter);