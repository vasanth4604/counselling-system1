import React from 'react'

function Hello(props) {
    
  return (
    <div>
        <h1>
           <center>Hello  {props.name} id is {props.id}
           {props.children}</center> 
        </h1>
    </div>
  )
}

export default Hello