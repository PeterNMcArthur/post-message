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
        window.addEventListener("message", this.handleRecievingMessage)
    }
    handleRecievingMessage(e) {
        if (typeof e.data === 'string') {
            this.setState({
                recievedMessage: e.data
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.handleRecievingMessage)
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