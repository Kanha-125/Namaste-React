
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnName,setbtnName]= useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="error" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link  className="link" to="/">Home</Link></li>
                    <li><Link  className="link" to="/about">About</Link></li>
                    <li><Link  className="link" to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                     <button className="login" onClick={()=>{
                        setbtnName((oldName)=>
                             (oldName==="Login")?"Logout":"Login"
                        )
                       
                        
                     }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;