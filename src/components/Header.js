
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName,setbtnName]= useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL} alt="error" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ?"✅":"🔴"}</li>
                    <li className="px-4 hover:text-red-400 hover:font-semibold"><Link  className="link" to="/">Home</Link></li>
                    <li className="px-4 hover:text-red-400 hover:font-semibold"><Link  className="link" to="/about">About</Link></li>
                    <li className="px-4 hover:text-red-400 hover:font-semibold"><Link  className="link" to="/contact">Contact Us</Link></li>
                    <li className="px-4 hover:text-red-400 hover:font-semibold"><Link className="link" to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:text-red-400 hover:font-semibold">Cart</li>
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