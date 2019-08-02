import React, { Component } from 'react'
import UpdateComponet from "./WithCounter";

class MouseHover extends Component {
    render() {
        const { counter, incrementHandler } = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementHandler}> Hoverd {counter} Times</h2>
            </div>
        )
    }
}

export default UpdateComponet(MouseHover)