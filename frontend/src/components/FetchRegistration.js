import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const FetchRegistration = () => {
    const [res, setRes] = useState(null)

    if(res == null){
        axios.get('https://localhost:8080/retrive', {}).then(response => {
        setRes(response.data)
        console.log(response.data)
    })
    }
  return (
    <div><br/><br/><br/><br/>
    <h1>Student Registration Details</h1>

    
    {JSON.stringify(res)}

    </div>
  )
}

export default FetchRegistration;