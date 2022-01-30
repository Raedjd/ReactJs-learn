import React from "react";

 //functional component
/* function Greet(){
    return <h1>Hello Read Jaidi!</h1>
} */

export const Greet = props =>{
    console.log(props)
return (<h1>Welcome Raed Jaidi! {props.name}</h1>)
}
//export default Greet;