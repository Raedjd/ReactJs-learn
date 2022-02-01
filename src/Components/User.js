import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn :true
        }
    }
    
    render() {
        
         return this.state.isLoggedIn && <div>User is logged!</div>

        //return this.state.isLoggedIn?(<div> User is logged!</div>):( <div>User is not logged!</div>)
                 
           
        /* let message;

        if(this.state.isLoggedIn)
          message = <div>User is logged!</div>
          else
          message = <div>User is not logged!</div>

          return (<div>{message}</div>) */

    /*      if(this.state.isLoggedIn){
             return(
                 <div>User is logged!</div>
             );
         }
         else{
             return(
                 <div>User is not logged!</div>
             )
         } */
    }
}

export default User;