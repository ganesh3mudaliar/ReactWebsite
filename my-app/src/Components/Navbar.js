import React from 'react'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'


export default function Navbar() {
  const navigate = useNavigate();   
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Feedbackzz</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <button className="btn btn-link nav-link" onClick={() => {window.location.href = "/";}}>Home</button>

      </li>
      <li className="nav-item">
      <button className="btn btn-link nav-link" onClick={() => navigate("/Boxes")}>Forms</button>
      </li>
      
      
    </ul>
    {/* <form className="form-inline my-2 my-lg-0 "> */}
    {/* <form className="d-flex flex-row mr-3 ">
      <input className="form-control mr-3" type="search" placeholder="Search" aria-label="Search"/>
      
      <button className="btn btn-outline-success mr-3" type="submit">Search</button>
      
    </form> */}
  </div>
</nav>
  )
}

