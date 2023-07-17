
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnName,setbtnName]= useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="error" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
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