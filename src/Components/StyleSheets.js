import React from 'react';
import './Style.css'
function StyleSheets(props) {
    let className=props.primary? 'primary' : ''
    const style={
         fontSize:'10px',
         backgroundColor:'red'

    }
    return (
        <div>
            <h1 className={`${className} font-xl`}>Hi all!</h1>
            <h2 style={style}>welcome</h2>
        </div>
    );
}

export default StyleSheets;