import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import IMAGE from '../../images/img.jpg';
import LOGO from '../../images/logo.jpg';
import '../../Pages/Signuppage/signup.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { IoMdAdd } from 'react-icons/io';
import axios from "axios";

const Signup = () => {

    const [values,setValues] = useState({
        username: "",
        email: "",
        name: "",
        contactNum: "",
        country: "",
        password: ""
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8800/signup" ,values)
        .then(res => {
            if(res.data.status === "Success") {
                navigate("/login")

            } else{
                alert("Error");
            }
        })
        .catch(err => console.log(err));

    }

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
        <p className='username'>Username</p>
        <input 
            type="text" 
            placeholder='username'
            className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' 
            id='username' 
            name='username'
            onChange={e => setValues({...values,username: e.target.value})}/>
        
        <p className='name'>Name</p>
        <input 
            type="text" 
            placeholder='name'
            className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' 
            id='name' 
            name='name'
            onChange={e => setValues({...values,name: e.target.value})}/>
        

        <p className='contactNum'>Contact Number</p>
        <input 
            type="number" 
            placeholder='contactNum'
            className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' 
            id='contactNum' 
            name='contactNum' 
            onChange={e => setValues({...values,contactNum: e.target.value})}/>
        
        <p className='country'>country</p>
        <input 
            type="text" 
            placeholder='country'
            className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' 
            id='country' 
            name='country' 
            onChange={e => setValues({...values,country: e.target.value})}/>
        
        <p className='email'>E-mail</p>
        <input 
            type="email" 
            placeholder='example@gmail.com'
            className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none' 
            id='email' 
            name='email' 
            onChange={e => setValues({...values,email: e.target.value})}/>
        
        <div className="relative">
            <p className='password'>Password</p>
            <div className="password-input flex items-center">
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder='@#*%'
                    className='w-full text-black py-4 my-1 bg-transparent outline-none focus:outline-none pr-10' 
                    id='password' 
                    name='password' 
                    onChange={e => setValues({...values,password: e.target.value})}/>

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
        
    <button
    className='w-full font-bold text-white bg-[#65B741] rounded-2xl p-4 text-center flex items-center justify-center'
    id='button'
    onClick={handleSubmit}>
    Sign up
    </button>

    </div>
</div>

</div>
    )
}

export default Signup; 
