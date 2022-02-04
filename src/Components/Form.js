import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            topic:''
        }
    }
    handleChangeUsername = (event) =>{
        this.setState({ 
            username: event.target.value
        })
    }
    handleChangePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }
  handleChangeTopic = (event) =>{
      this.setState({
          topic: event.target.value
      })
  } 
  handleSubmit= event =>{
      alert(`${this.state.username} ${this.state.topic}`)
      event.preventDefault()
  }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                 <div>
                <label>username</label>
                <input type="text" value={this.state.username} onChange={this.handleChangeUsername}></input>
                </div>
                <div>
                <label>password</label>
                <input type="password" value={this.state.password} onChange={this.handleChangePassword}></input>
                </div>
                 <div>
                     <label>topic</label>
                     <select  value={this.state.topic} onChange={this.handleChangeTopic} >
                       <option value='angular'>Angular</option>
                       <option value='react'>React</option>
                       <option value='vue'>Vue</option>
                     </select>
                 </div>
                 <button type='submit'>Submit</button>
            </form>
          
        );
    }
}

export default Form;