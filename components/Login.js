import React from 'react'
import { useHistory } from 'react-router-dom'


const Login = () => {
   
    let history = useHistory();
  
    return (
    <div style={{backgroundColor: "grey"}}>

        <div className="mb-3 ml-8 ">
            <label for="exampleFormControlInput1" class="form-label">Email address</label><br />
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3 ml-8">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <br />
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        <button className="ml-8 bg-red-500" onClick={() => { history.push("./profile"); }}>Login</button>
    </div>
  )
}

export default Login