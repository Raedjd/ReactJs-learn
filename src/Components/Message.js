import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super();
        this.state={message:'welcome all'}
    }
    changeMessage(){
        this.setState({message:'thank u for saving'});
    }
    render(){
        return (
        <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>save</button>
               </div>
               )
    }
}
export default Message; 