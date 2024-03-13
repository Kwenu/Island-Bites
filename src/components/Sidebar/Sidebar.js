import React, { useState } from 'react';
import './Sidebar.css'; 
import { FaFileUpload ,FaBars} from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import LOGO from '../../images/logo.png'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<RiHome2Line />
        },
        {
            path:"/recipe",
            name:"Recipes",
            icon:<BiFoodMenu />
        },
        {
            path:"/favorite",
            name:"Favorites",
            icon:<MdFavoriteBorder />
        },
        {
            path:"/upload",
            name:"Upload",
            icon:<FaFileUpload />
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<CgProfile />
        },
        {
            path:"/logout",
            name:"Log Out",
            icon:<IoIosLogOut />
        },
    ]

    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "100px"}} className="sidebar">
                <div className="top_section">
                    <img
                        src={LOGO}
                        alt="Logo"
                        style={{ display: isOpen ? 'block' : 'none' }}
                        className="logo"
                    />
                    <div style={{marginLeft: isOpen ? "-15px" : "23px"}} className="bars cursor-pointer">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;