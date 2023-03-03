import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import { useNavigate } from 'react-router-dom';

import { Auth } from '../../context/Auth.Context';

import { toast } from "react-toastify";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { isAuthenticated } = Auth()

  const navigate = useNavigate()

  const auth = Auth();

  const logout = () => {
    auth.activateAuthentication(false);
    auth.activateToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshCycle");
    localStorage.removeItem("user");
    toast("Logout")
    navigate("/");
  };

  return (
  
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            E Course Profile System
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
              <buton onClick={logout} style={{color:'#a1e1fa', }}>
                Logout
              </buton>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
