import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import Profile from '../../images/profilePic.jpg';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="profile">
      <div className='name'>
        Edit Profile
      </div>
      <div className='images'>
        <img src='https://images.pexels.com/photos/10837800/pexels-photo-10837800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='cover'></img>
        <img src= {Profile} alt='' className='profilePic'></img>
      </div>
      <div className='ProfileContainer'>
        <div className='uInfo'>
          <div className='left'></div>
          <div className='centerp'>
            <span>Adrian Brewer</span>
            <div className='info'>
              <div className='item'>
                <span>adrianbrewer@gmail.com</span>
              </div>
            </div>
          </div>
          <div className='right'></div>
        </div>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faUser} />
            <div className='edit'>
              <span>
                <Link to="/edit">Edit Profile</Link>
              </span>
            </div>
          </div>
        </div>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faHeart} />
            <div>
              <span>
                <Link to="/favorite">Favourites</Link>
              </span>
            </div>
          </div>
        </div>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faGear} />
            <div>
              <span>
                <Link to="/favorite">Settings</Link>
              </span>
            </div>
          </div>
        </div>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faSignOut} />
            <div className="App">
              <span>Log Out</span>
                <button
                  className="openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                    }}
                  >
                </button>
              {modalOpen && <Profile setOpenModal={setModalOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;