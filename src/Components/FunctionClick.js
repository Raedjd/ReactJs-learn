import React from 'react';

function FunctionClick() {
    function clickHandle(){
        console.log("button clicked");
    }
    return (
        <div>
        <button onClick={clickHandle}>Click here</button>  
        </div>
    );
}

export default FunctionClick;