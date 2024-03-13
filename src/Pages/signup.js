import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import IMAGE from '../../images/img.jpg';
import LOGO from '../../images/logo.jpg';
import '../../Pages/Signuppage/signup.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    return (
    <div className="w-full h-screen flex" id='container'>
    <div className="relative w-1/2 h-full flex flex-col justify-start" id='image'>
    <img src={IMAGE} className="w-full h-full object-cover" id='img' />
</div>
<div className="w-1/2 h-full flex flex-col justify-start" id='login-details'>
    <img src={LOGO} className="w-1/2 p-10" id="logo" /> 

    <div className='w-full flex flex-col mb-10'>
        <h3 className='text-2x1 font-bold mb-4' id='login'>Sign up</h3>
        {/* <p className='text-sm mb-2' id='welcome'>Welcome back ! Please enter your details</p> */}
    </div>

    <div className='w-full flex flex-col' id='detail'>
        <p className='firstName'>First Name</p>
        <input 
            type="text" 
            placeholder='first name'
            className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='firstName'/>
        
        <p className='lastName'>lastName</p>
        <input 
            type="text" 
            placeholder='lastName'
            className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='lastName'/>
        
        <p className='contactNum'>Contact Number</p>
        <input 
            type="number" 
            placeholder='contactNum'
            className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' id='contactNum'/>
        
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


    <div className='w-full flex flex-col' id='signin'>
    <Link to="/Login">
        <button className='w-full font-bold text-white bg-[#65B741] rounded-2xl p-4 text-center flex items-center justify-center' id='button'>
            Sign up
        </button>
    </Link>
    </div>


</div>

</div>
    )
}

export default Signup; 
