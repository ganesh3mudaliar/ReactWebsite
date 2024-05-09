import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Loginpg() {

  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate("/Signup"); // Navigate to the feedback form page
  };

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:3000/",{
            email,password
        })
        .then(res=>{
            if(res.data==="exist"){
                navigate("/Loginpg",{state:{id:email}})
            }
            else if(res.data==="notexist"){
                alert("User have not sign up")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }

}



  return (
    <>
    {/* <!-- Section: Design Block --> */}
<div className=" text-center text-lg-start vh-100">
  
  <div className="my-6 ">
    <div className="row g-0 d-flex align-items-center">
      <div className=" col-lg-4 d-none d-lg-flex">
      <div className="container">
                {/* "WELCOME TO" text with smaller size */}
                <p className="fs-5 mb-0">WELCOME TO</p>
                {/* "FEEDBACKZZ" text with larger size */}
                <p className="fs-1 fw-bold">FEEDBACKZZ</p>
              </div>
      </div>
      <div className=" col-lg-8">
        <div className="card-body py-5 px-md-5">

          <form>
            {/* <!-- Email input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
              <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            {/* <!-- Password input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
              <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
                  <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={submit}>Sign in</button>
            <button type="button" className="btn btn-success btn-block mx-3 mb-4" onClick={handleFeedbackClick}>Sign up</button>
            

          </form>

        </div>
      </div>
    </div>
  </div>
</div>

</>
    

  )
}

// loginPg.prototype = {
    
// }