import React, { createElement } from "react";

const Hello = () =>{
    // return(
    //     <h3>Hello Raed!</h3>
    // )
    return React.createElement('div',{id:'hello',className:'classHeloo'},'Hello Raed!')
}
/* JSX differences:
Class ->className
for ->HTMLFor 
camel Case property*/

export default Hello;