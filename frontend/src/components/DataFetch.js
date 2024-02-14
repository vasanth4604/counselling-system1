import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState('')
    const [buttonid, setButtonid] = useState('')
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res=>{
        console.log(res)
        setPosts(res.data)
      }) 
      
    }, [buttonid]);
function handleClick (){
    setButtonid(id)
}

    
    
  return (
    <div>
        <br></br>
        <br></br>
       <center> <input type='text' placeholder='EnterId'value={id} onChange={e=>setId(e.target.value)} /></center>
        <br></br>
        <center><button onClick={handleClick}>FetchData</button></center>
        <br></br>
        <center>{posts.title}</center>
        {/* <ul>
            { posts.map((post)=>(
                <li key={post.id}>{post.title}</li>
            )) }
        </ul> */}
    </div>
  )
}

export default DataFetch