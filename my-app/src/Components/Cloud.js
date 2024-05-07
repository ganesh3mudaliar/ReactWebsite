import React, { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseRelevance, setCourseRelevance] = useState('');
  const [likes, setLikes] = useState('');
  const [dislikes, setDislikes] = useState('');
  const [instructorRating, setInstructorRating] = useState('');
  const [starRating, setStarRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send feedback data to backend or perform further actions
    console.log({
      name,
      contactNumber,
      email,
      courseTitle,
      courseRelevance,
      likes,
      dislikes,
      instructorRating,
      starRating
    });
    // Reset form fields after submission
    setName('');
    setContactNumber('');
    setEmail('');
    setCourseTitle('');
    setCourseRelevance('');
    setLikes('');
    setDislikes('');
    setInstructorRating('');
    setStarRating(0);
  };

  const handleStarClick = (rating) => {
    setStarRating(rating);
  };

    


  return (
    <div className="container mt-5">
      <h2 className="mb-4">Cloud Course Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number:</label>
          <input type="text" className="form-control" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email ID:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Course Title:</label>
          <input type="text" className="form-control" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label d-block">How relevant was the course?</label>
          <div className="form-check form-check-inline">
            <input type="radio" id="relevant1" className="form-check-input" name="courseRelevance" value="Highly relevant" onChange={(e) => setCourseRelevance(e.target.value)} required />
            <label htmlFor="relevant1" className="form-check-label">Highly relevant</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" id="relevant2" className="form-check-input" name="courseRelevance" value="Moderately relevant" onChange={(e) => setCourseRelevance(e.target.value)} />
            <label htmlFor="relevant2" className="form-check-label">Moderately relevant</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" id="relevant3" className="form-check-input" name="courseRelevance" value="Slightly relevant" onChange={(e) => setCourseRelevance(e.target.value)} />
            <label htmlFor="relevant3" className="form-check-label">Slightly relevant</label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">What did you like about the course?</label>
          <textarea className="form-control" value={likes} onChange={(e) => setLikes(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">What did you dislike about the course?</label>
          <textarea className="form-control" value={dislikes} onChange={(e) => setDislikes(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Rate the instructor:</label>
          <input type="number" min="1" max="5" className="form-control" value={instructorRating} onChange={(e) => setInstructorRating(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Overall rating:</label>
          <div>
            {[...Array(5)].map((_, index) => (
              <span key={index} onClick={() => handleStarClick(index + 1)} style={{ cursor: 'pointer', color: index < starRating ? 'gold' : 'grey' }}>★</span>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;

