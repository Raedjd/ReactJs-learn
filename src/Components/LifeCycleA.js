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
    render() {
        console.log("Life cycleA from render");
        return (
            <div>
              <LifeCycleB></LifeCycleB>
            </div>
        );
    }
}

export default LifeCycleA;