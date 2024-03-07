import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IMAGE from '../../images/img.jpg';
import LOGO from '../../images/logo.png';
import GOOGLE_LOGO from '../../images/Google_logo.png';
import FACEBOOK_ICON from '../../images/Facebook_logo.png';
import '../../Pages/Loginpage/login.js';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    return (
        <div className="w-full h-screen flex" id='container'>
            <div className="w-1/2 h-full flex flex-col justify-start" id='login-details'>
                <img src={LOGO} className="w-1/2 p-10" id="logo" /> 

                <div className='w-full flex flex-col mb-10'>
                    <h3 className='text-2x1 font-bold mb-4' id='login'>Login</h3>
                    {/* <p className='text-sm mb-2' id='welcome'>Welcome back ! Please enter your details</p> */}
                </div>

                <div className='w-full flex flex-col' id='detail'>
                    <p className='email'>E-mail</p>
                    <input 
                        type="email" 
                        placeholder='example@gmail.com'
                        className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='email'/>
                    
                    <div className="relative">
                        <p className='password'>Password</p>
                        <div className="password-input flex items-center">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder='@#*%'
                                className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none pr-10' id='password'/>
                            <div className="h-full border-l border-gray-400"></div> {/* Vertical line */}
                            <span 
                                className="eye-icon px-3"
                                onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className="text-gray-400 hover:text-gray-700" /> : <FaEye className="text-gray-400 hover:text-gray-700" />}
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center' id='remember'>
                        <input type="checkbox" className='w-4 h-4 mr-2'/>
                        <p className='text -sm1'>Remember me</p>
                    </div>
                    <Link to="/forgot">
                    <button className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2' id='forgot'>Forgot Password?</button>
                    </Link>
                </div>

                <div className='w-full flex flex-col' id='signin'>
                    <Link to="/Home">
                        <button className='w-full font-bold text-white bg-[#65B741] rounded-2xl p-4 text-center flex items-center justify-center' id='button'>
                            Sign in
                        </button>
                    </Link>
                </div>

                <div className='w-full flex items-center justify-center reletive py-2' id='or'>
                    <div className='w-full h-[1px] bg-black' id='line'></div>
                    <p className='text-base absolute text-black/80 bg-[#ffffff]' id='text'>OR</p>
                </div>

                <div className='google'>
                    <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-[d8d8d8] rounded-3xl p-4 text-center flex items-center justify-center' id='google'>
                        <img src={GOOGLE_LOGO} className='h-6 mr-5' />
                        Sign in with Google
                    </button>
                    <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-[d8d8d8] rounded-3xl p-4 text-center flex items-center justify-center' id='google'>
                        <img src={FACEBOOK_ICON} className='h-6 mr-5' />
                        Sign in with Facebook
                    </button>
                </div>
        
            </div>
            <div className='item-center flex flex-col my-4' id='signup'>
                <p className='text-sm font-normal text-black'>Don't have an account ? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></p>
            </div>
            
            <div className="relative w-1/2 h-full flex flex-col justify-start" id='image'>
                <img src={IMAGE} className="w-full h-full object-cover" id='img' />
            </div>
        </div>
    )
}

export default Login;