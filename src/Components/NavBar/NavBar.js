import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import { Link, useNavigate } from 'react-router-dom';

import { Auth } from '../../context/Auth.Context';

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
    navigate("/signin");
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
              <buton style={{color:'white', }}>
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
