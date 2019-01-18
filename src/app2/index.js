import React, { Component, createRef } from "react";
import { render } from "react-dom";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }
        this.iframeWindow = createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) { // update the state when the user types  in the input box
        this.setState({
            message: e.target.value,
        })
    }
    handleSubmit(e) { // control what happens when the form is submitted
        const { message } = this.state
        e.preventDefault() // stop the page refreshing on submit
        this.iframeWindow.current.contentWindow.postMessage(message, 'http://localhost:3010') // send our postMessage to the other server
        this.setState({
            message: '',
        })
    }

    render() {
        const { message } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="message">Please enter your message</label>
                    <input id="message" type="text" onChange={this.handleChange} value={message} />
                    <div>
                        <button type="submit">Send your message</button>
                    </div>
                </form>
                <iframe ref={this.iframeWindow} src="http://localhost:3010" frameborder="0" />
            </div>
        )
    }
}

render(<App />, document.getElementById("app"))