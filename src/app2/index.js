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
    handleChange(e) {
        this.setState({
            message: e.target.value,
        })
    }
    handleSubmit(e) {
        const { message } = this.state
        e.preventDefault()
        this.iframeWindow.current.contentWindow.postMessage(message, 'http://localhost:3010')
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