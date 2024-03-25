
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEdit } from 'react-icons/fa';
import { faGear, faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

import './profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

import Profile from '../../images/profilePic.jpg';
import Logout from '../../Pages/Logoutpage/logout';
import axios from 'axios';



function ProfilePage() {

  const [selectedFile, setSelectedFile] = useState(null); // State to store selected file

  const [data, setData] = useState([])

  const [openModel, setOpenModal] = useState(false);

  const [userInfo, setUserInfo] = useState(null);

  useEffect (() => {
    axios.get('http://localhost:8800/profileimagedisplay')
    .then(res => {
      setData(res.data[0])
    })
    .catch(err => console.log(err));
  },[])

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Fetch user information from the backend based on the email stored in localStorage or session
        const userEmail = localStorage.getItem('userEmail'); // Retrieve user email stored during login
        const res = await axios.get(`http://localhost:8800/user/${userEmail}`);
        setUserInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInfo();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Update selected file state
  };


  const handleUpload = async () => {
    if (!selectedFile) return; // If no file selected, return

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('userId', userInfo.id); // Assuming you're sending userId along with the request

    try {
      const res = await axios.post("http://localhost:8800/editprofileimage", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Upload successful:", res.data);
      // If upload is successful, you might want to update user's profilePic in state
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

      // Function to handle profile image deletion
      const handleDeleteProfileImage = async () => {
        try {
            const userId = userInfo.id; // Assuming you have access to user ID
            const res = await axios.delete(`http://localhost:8800/deleteprofileimage/${userId}`);
            console.log("Delete profile image successful:", res.data);
            // If deletion is successful, update user info to display default image
            setUserInfo(prevState => ({ ...prevState, profilePic: res.data.filename }));
        } catch (err) {
            console.error("Error deleting profile image:", err);
        }
    };



  if (!userInfo) {
    return <div>Loading...</div>;
  }


function App() {

  return (

    <div className="profile">

    <div className='name'>
      Edit Profile
    </div>
    <div className='images'>
      <img src='https://images.pexels.com/photos/10837800/pexels-photo-10837800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='cover'></img>
      <div className="editIcon">
          <FaEdit />
        </div>
        <input type='file' onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <button onClick={handleDeleteProfileImage}>Delete Profile Image</button>

        <img src={`http://localhost:8800/images/` + userInfo.profilePic} alt='' className='profilePic'></img>

    </div>
    <div className='ProfileContainer'>
      <div className='uInfo'>
        <div className='left'></div>
        <div className='centerp'>
          <span>{userInfo.id}:{userInfo.name}</span>
          <div className='info'>
            <div className='item'>
              <span>{userInfo.email}</span>

      <div className='images'>
        <img src='https://images.pexels.com/photos/10837800/pexels-photo-10837800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='cover'></img>
        <img src= {Profile} alt='' className='profilePic'></img>
      </div>
      <div className='ProfileContainer'>
        <div className='uInfo'>
          <div className='left'>
          </div>
          <div className='centerp'>
            <span>Adrian Brewer</span>
            <div className='info'>
              <div className='item'>
                <span>adrianbrewer@gmail.com</span>
              </div>

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
              <Link to={`/edit/${userInfo.id}`}>Edit Profile</Link>
            </span>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faUser} />
            <span>Edit Profile</span>

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

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faBowlFood} />
            <span>Your Recipes</span>

          </div>
        </div>
      </div>


      <div className='bar'>
        <div className='center'>
          <FontAwesomeIcon icon={faHeart} />
          <div>
            <span>
              <Link to="/myrecipe">My Recipe</Link>
            </span>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faHeart} />
            <span>Favourites</span>

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

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faSignOut} />
            <span>Log Out</span>

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
          setOpenModal(true); // Corrected the variable name here
        }}
      >
        Open Modal
      </button>
      {openModel && <Logout closeModal={setOpenModal} />} {/* Corrected the variable name here */}
    </div>
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default ProfilePage;
