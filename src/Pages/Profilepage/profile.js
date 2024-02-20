import './profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import Profile from '../../images/profilePic.jpg';

function App() {
  return (
    <div className="profile">
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
          <div className='right'></div>
        </div>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faUser} />
            <span>Edit Profile</span>
          </div>
        </div>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faHeart} />
            <span>Favourites</span>
          </div>
        </div>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </div>
        </div>

        <div className='bar'>
          <div className='center'>
            <FontAwesomeIcon icon={faSignOut} />
            <span>Log out</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;