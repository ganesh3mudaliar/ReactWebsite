import React, { useState } from "react"
import { useNavigate } from "react-router";

import axios from "axios"

export default function Signup() {
    const navigate = useNavigate();
   
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')  
    const [name,setName]=useState('')  

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/Signup",{
                email,password,name
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    navigate("/Boxes",{state:{id:email}})
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

     
  <div className="container h-100" style={{ backgroundColor: '#eee' }}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: '25px' }} >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="name" id="form3Example1c" className="form-control" onChange={(e) => { setName(e.target.value) }} placeholder="name"/>
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" placeholder="Re-enter Password" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" onClick={submit}>SignUp</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Registration illustration"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>

  )
}