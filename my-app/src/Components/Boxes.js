import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function Boxes() {

  const navigate = useNavigate();   
  const handleFeedbackClick1 = () => {
    navigate("/Boxes/Webdev"); // Navigate to the feedback form page
  };
  const handleFeedbackClick2 = () => {
    navigate("/Boxes/Appdev"); // Navigate to the feedback form page
  };
  const handleFeedbackClick3 = () => {
    navigate("/Boxes/Github"); // Navigate to the feedback form page
  };
  const handleFeedbackClick4 = () => {
    navigate("/Boxes/Cloud"); // Navigate to the feedback form page
  };
  
  return (
    <div className="container ">
      <div className="d-flex align-items-center row justify-content-center ">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card mb-4">
            {/* <img src="https://i.ibb.co/59cL70c/bgimage.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body " >
              <h5 className="card-title">Web-Dev Course</h5>
              <p className="card-text">We are glad you participated in our Web course. Please give us your feedback by clicking below. Your expirence and feebacks are of great value to us.</p>
              <button className="btn btn-primary" onClick={handleFeedbackClick1}>Click here</button>

            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card mb-4">
            {/* <img src="https://i.ibb.co/59cL70c/bgimage.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body ">
              <h5 className="card-title">App-Dev Course</h5>
              <p className="card-text">We are glad you participated in our App course. Please give us your feedback by clicking below. Your expirence and feebacks are of great value to us.</p>
              <button className="btn btn-primary" onClick={handleFeedbackClick2}>Click here</button>

            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center row justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card mb-4">
            {/* <img src="https://i.ibb.co/59cL70c/bgimage.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">GITHUB Course</h5>
              <p className="card-text">We are glad you participated in our GITHUB course. Please give us your feedback by clicking below. Your expirence and feebacks are of great value to us.</p>
              <button className="btn btn-primary" onClick={handleFeedbackClick3}>Click here</button>

            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card mb-4">
            {/* <img src="https://i.ibb.co/59cL70c/bgimage.jpg" className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Cloud Course</h5>
              <p className="card-text">We are glad you participated in our Cloud course. Please give us your feedback by clicking below. Your expirence and feebacks are of great value to us.</p>
              <button className="btn btn-primary" onClick={handleFeedbackClick4}>Click here</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
