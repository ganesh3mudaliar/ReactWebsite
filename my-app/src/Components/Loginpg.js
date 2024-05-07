import React from 'react'
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Loginpg() {
  return (
    <>
    {/* <!-- Section: Design Block --> */}
<section className=" text-center text-lg-start vh-100">
  
  <div className="card mb-3">
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
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            {/* <!-- Password input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" />
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
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>

    </>

  )
}

// loginPg.prototype = {
    
// }