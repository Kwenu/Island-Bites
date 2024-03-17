import React from 'react';
import '../ForgotPassword/Verify.css';
import { Link } from 'react-router-dom';
function Verify() {
  return (
    <div className="verification">
      <h2 className='VH2'>Verification</h2>
      <p className='VP'>Enter the One-Time Password (OTP) sent to your email address.</p>

      <div>
        <label className='VLABEL' htmlFor="otp">OTP:</label>
        <input className='VINPUT' type="text" id="otp" />
      </div>

      <div>
        <Link to="/new">
        <button className='VBUTTON' type="submit">Verify</button>
        </Link>
      </div>
    </div>
  );
}

export default Verify;
