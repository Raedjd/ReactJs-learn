import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Raed'
        }
        console.log("Life cycleB from constructor");
    }
    static getDrivedStateFromProps(props,state){
        console.log("Life cycleB from getDrivedStateFromProps")
        return null
    }
     
    componentDidMount(){
        console.log("Life cycleB form componentDidMount")
    }
    render() {
        console.log("Life cycleB from render");
        return (
            <div>
               
            </div>
        );
    }
}

export default LifeCycleB;