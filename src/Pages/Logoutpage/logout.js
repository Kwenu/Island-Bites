import React from "react";
import { Link } from 'react-router-dom';
import "../../pages/Logoutpage/logout.css";

function Logout({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to log out?</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <Link to="/Login"><button>Log out</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;
