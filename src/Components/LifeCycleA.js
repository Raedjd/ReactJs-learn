import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

     
class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Raed'
        }
        console.log("Life cycleA from constructor");
    }
    static getDrivedStateFromProps(props,state){
        console.log("Life cycleA from getDrivedStateFromProps")
        return null
    }
     
    componentDidMount(){
        console.log("Life cycleA form componentDidMount")
    }

    
    shouldComponentUpdate(){
        console.log("Life cycleA form shouldComponentUpdate ");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Life cycleA form getSnapshotBeforeUpdate");
        return null
    }
    componentDidUpdate(){
        console.log("Life cycleA form componentDidUpdate");
    }
    changeState = () =>{
        this.setState({
            name:'jaidi'
        })
    }
    render() {
        console.log("Life cycleA from render");
        return (
            <div>
              <LifeCycleB></LifeCycleB>
              <button onClick={this.changeState}>chage state</button>
            </div>
        );
    }
}

export default LifeCycleA;