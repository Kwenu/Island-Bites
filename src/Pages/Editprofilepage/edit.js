import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../Editprofilepage/edit.css'
import axios from 'axios';


const Edit = () => {
    
  const {id} = useParams();
  const [username,setUsername] = useState('');
  const [name, setName] = useState('');
  const [contactNum,setContactNum] = useState('');
  const [country, setCountry] = useState('');
  const [email,setEmail] = useState('');


useEffect (()=>{
        axios.get("http://localhost:8800/edit/" +id)
        .then(res =>{
            setUsername(res.data[0].username);
            setName(res.data[0].name);
            setContactNum(res.data[0].contactNum);
            setCountry(res.data[0].country);
            setEmail(res.data[0].email);
        })
        .catch(err => console.log(err));

    },[]);


    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:8800/editprofile/" +id,{username,name,contactNum,country,email})
        .then(res =>{
            if(res.data.updated){
                navigate("/profile")
            }else{
                alert("Not updated");
            }
        })
    
    }

    const handleCancel = () => {
        navigate("/profile")
      };

    return (
        <form onSubmit={handleSubmit} >
            <div className="edit-container">
                <h3 className='edit'>Edit Profile</h3>
                <div className="edit-details">
                <p className='username'>Username</p>
                    <input
                        type="text"
                        placeholder='username'
                        id='username'
                        value={username}
                        onChange={e => setUsername(e.target.value)} />

                <p className='name'>Name</p>
                    <input 
                        type="text" 
                        placeholder='name' 
                        id='name'
                        value={name}
                        onChange={e => setName(e.target.value)}/>

                <p className='contactNum'>Contact Number</p>
                    <input 
                        type="text" 
                        placeholder='Contact Number'
                        id='contactNum'
                        value={contactNum}
                        onChange={e => setContactNum(e.target.value)}/>

                <p className='country'>Country</p>
                    <input 
                        type="text" 
                        placeholder='country'
                        id='country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}/>

                <p className='email'>E-mail</p>
                    <input 
                        type="email" 
                        placeholder='example@gmail.com'
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                </div>
                
                <div className="buttons">
                <div className="cancel">
                    <button className='Cancel' id='button' >
                        Cancle
                    </button>
                </div>
                <div className="save">
                    <button className='Save' id='button' onClick={handleCancel}>
                        Save
                    </button>
                </div>
                </div>
            </div>
        </form>
        
    )
}

export default Edit;


















