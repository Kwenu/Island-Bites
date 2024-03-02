import React, { useState } from 'react';
import Profile from '../../images/profilePic.jpg';
import '../../Pages/Editprofilepage/edit.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    return (
        <div className="w-full h-screen flex" id='container'>
            <div className="profile">
                <div className='images'>
                    <img src= {Profile} alt='' className='profilePic'></img>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-start" id='login-details'>
                {/* <img src={LOGO} className="w-1/2 p-10" id="logo" />  */}

                <div className='w-full flex flex-col mb-10'>
                    <h3 className='text-2x1 font-bold mb-4' id='login'>Edit Profile</h3>
                </div>

                <div className='w-full flex flex-col' id='detail'>

                    <p className='firstName'>First Name</p>
                    <input 
                        type="text" 
                        placeholder='First Name'
                        className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='firstName'/>
                    
                    <p className='secondName'>Last Name</p>
                    <input 
                        type="text" 
                        placeholder='Last Name'
                        className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='secondName'/>

                    <p className='email'>E-mail</p>
                    <input 
                        type="email" 
                        placeholder='example@gmail.com'
                        className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='email'/>    

                    <p className='contactNumber'>Contact Number</p>
                    <input 
                        type="text" 
                        placeholder='Contact Number'
                        className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='contactNumber'/>
                    
                    <p className='country'>Country</p>
                    <input 
                        type="text" 
                        placeholder='country'
                        className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='country'/>

                    <div className="relative">
                        <p className='password'>Password</p>
                        <div className="password-input flex items-center">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder='@#*%'
                                className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none pr-10' id='password'/>
                                
                            <div className="h-full border-l border-grey-400"></div> {/* Vertical line */}
                            <span 
                                className="eye-icon px-3"
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="text-gray-400 hover:text-gray-700" /> : <FaEye className="text-gray-400 hover:text-gray-700" />}
                            </span>


                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col' id='signin'>
                    <button className='w-full font-bold text-black bg-[white] border border-solid border-[black] rounded-2xl p-4 text-center flex items-center justify-center' id='button'>
                        Cancle
                    </button>
                </div>

                <div className='w-full flex flex-col' id='signin'>
                    <button className='w-full font-bold text-white bg-[#65B741] border border-solid border-[#65B741] rounded-2xl p-4 text-center flex items-center justify-center' id='button'>
                        Save
                    </button>
                </div>
        
            </div>
            
        </div>
    )
}

export default Login;