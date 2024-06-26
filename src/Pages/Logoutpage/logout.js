import React from "react";
import { Link } from 'react-router-dom';
import "../../Pages/Logoutpage/logout.css";
import axios from "axios";

function Logout({ setOpenModal }) {

  const handleDelete = () =>{
    axios.get("http://localhost:8800/logout")
    .then(res => {
      window.location.reload(true); // Use window.location.reload(true) instead of location.reload(true)
    }).catch(err => console.log(err));
  }
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
          <Link to="/login"><button onClick={handleDelete}>Log out</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;
