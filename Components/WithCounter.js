import React from "react"; 

const UpdateComponet = (OriginalComponent) => {
    class NewComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    incrementHandler = () => {
        this.setState(preState => {
            return {
                counter: preState.counter + 1
            }
        })
    }
        render() {
            return (
                <OriginalComponent 
                counter={this.state.counter} 
                incrementHandler={this.incrementHandler} />
            )
        }
    }
    return NewComponent
}

export default UpdateComponet;