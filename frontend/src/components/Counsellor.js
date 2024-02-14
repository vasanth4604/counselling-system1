import React from 'react'


const counsellor = () => {
  return (
    // <div><center><h1> Add counsellor</h1></center></div>
    <form><center>
    <div class="form-group"><br></br>
    <br></br>
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <br></br>
      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button></center>
  </form>
  )
}

export default counsellor