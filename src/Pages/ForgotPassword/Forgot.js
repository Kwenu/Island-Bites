import React from 'react'
import '../ForgotPassword/Forgot.css';
import { Link } from 'react-router-dom';
function Forgot() {
  return (
    <div className="forgot-password">
    <h2 className='FH2'>Forgot Password</h2>
    <p className='FP'>Enter your email address below to reset your password.</p>

    <div>
      <label className='FLABEL' htmlFor="email">Email:</label>
      <input className='FINPUT' type="email" id="email" />
    </div>

    <div>
      <Link to="/verify">
        <button className='FBUTTON' type="submit">Reset Password</button>
      </Link>
    </div>
  </div>
);
}
export default Forgot;