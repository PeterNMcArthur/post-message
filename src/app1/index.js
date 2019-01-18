import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recievedMessage: ''
        }
        this.handleRecievingMessage = this.handleRecievingMessage.bind(this)
    }
    componentDidMount() {
        window.addEventListener("message", this.handleRecievingMessage) // set up even listener to listen for postMessage
    }
    handleRecievingMessage(e) {
        if (typeof e.data === 'string') {
            this.setState({
                recievedMessage: e.data // when the post messages is recieved then update the state.
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.handleRecievingMessage) // remove eventlistener to stop memory leaks
    }
    render() {
        const { recievedMessage } = this.state
        return (
            <div style={{background: 'pink'}}>
                <h1>We've recieved a new message! :D</h1>
                <p>{recievedMessage}</p>
            </div>
        )
    }
}

render(<App />, document.getElementById("app"))