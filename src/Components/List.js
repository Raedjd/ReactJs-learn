import React from 'react';

function List(props) {
    const array= ['raed','jaidi','4twin4']
    const persons = [
        { id:1,
          name:"raed",
          age:26,
          skills:"react"  
        },
        {
            id:2,
            name:"mohamed",
            age:25,
            skills:"angular"
        }
    ];
    const personList =persons.map(person => <h2>I'am {person.name} , i know {person.skills}</h2> )

    return (
    /*     <div>
           <h2>{array[0]}</h2>
           <h2>{array[1]}</h2>
           <h2>{array[2]}</h2>

           { array.map(i => <h2>{i}</h2>)}
        </div> */
        <div>{personList}</div>
    );
}

export default List;