import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center">
      {/* <!-- Grid container --> */}
      <div className="container p-4">
        <p>To learn more join our other courses</p>
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2020 Copyright:
        <a className="text-body" href="/">Feedbackzz.com</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}
