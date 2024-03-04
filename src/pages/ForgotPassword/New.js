import React from 'react';
import '../ForgotPassword/New.css';
import { Link } from 'react-router-dom';

function New() {
  return (
    <div className="new-password">
      <h2 className='NH2'>New Password</h2>
      <p className='NP'>Create a new password for your account.</p>

      <div>
        <label className='NLABEL' htmlFor="new-password">New Password:</label>
        <input className='NINPUT' type="password" id="new-password" />
      </div>

      <div>
        <label className='NLABEL' htmlFor="confirm-password">Confirm Password:</label>
        <input className='NINPUT' type="password" id="confirm-password" />
      </div>

      <div>
      <Link to="/Login">
        <button className='NBUTTON' type="submit">Save Password</button>
      </Link>
      </div>
    </div>
  );
}

export default New;
