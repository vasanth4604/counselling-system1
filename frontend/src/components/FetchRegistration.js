import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import { useState } from 'react'

const FetchRegistration = () => {
    const [res, setRes] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:8080/retrive')
      .then(response => {
        setRes(response.data)
        console.log(Response.data)

    })},
    [])

    // if(res == null){
    //     axios.get('https://localhost:8080/retrive', {}).then(response => {
    //     setRes(response.data)
    //     console.log(response.data)
    // })
    // }
  return (
    <div><center><h1>Registrations</h1>
    <table style = {{width: '75%'}}border={1}>
      <tr>
        {/* <th>ID</th> */}
        <th>Name</th>
        <th>Role</th>
        <th>Email</th>
        <th>Password</th>
      </tr>

      {
        res.map((item, index) => (
          <tr key={index}>
            {/* <td>{item._id}</td> */}
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))
      }
    </table>
    </center>

{/*     
    {JSON.stringify(res)} */}

    </div>
  )
}

export default FetchRegistration;