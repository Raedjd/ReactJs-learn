import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state={message: "hello"}
    }
    clickHandler(){
        this.setState({
            message: "welcome!"
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                 {/* {<button onClick={this.clickHandler.bind(this)}>Click</button>}  */}
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        );
    }
}

export default EventBind;