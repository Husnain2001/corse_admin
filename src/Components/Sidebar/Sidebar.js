import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form } from 'react-bootstrap';

import './index.css'

import { AiFillDashboard, AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaDiscourse } from 'react-icons/fa';
import { FcDepartment } from 'react-icons/fc';

const SideBar = () => {

  const [active, setActive] = useState(1);

  const [activebutton, setActiveButton] = useState();



  return (
    <div className="sidebar col-3">

      <ul className="list-unstyled user-menubar">
        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/" className="menu-item" >
            <span className='d-flex'>
              <AiFillDashboard />
              <p style={{ textDecoration: 'none' }}> Dashboard </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/department" className="menu-item" >
            <span className='d-flex'>
              <AiOutlineUserAdd />
              <p style={{ textDecoration: 'none' }}> Department </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/teachers" className="menu-item" >
            <span className='d-flex'>
              <AiOutlineUserAdd />
              <p style={{ textDecoration: 'none' }}> Teachers </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/courses" className="menu-item" >
            <span className='d-flex'>
              <FcDepartment />
              <p style={{ textDecoration: 'none' }}> Courses </p>
            </span>
          </Link>
        </li>

        <li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/course file" className="menu-item" >
            <span className='d-flex'>
              <FaDiscourse />
              <p style={{ textDecoration: 'none' }}> Course File </p>
            </span>
          </Link>
        </li>

       {/*<li className={`${active == 1 ? "active-list" : ""}`} onClick={() => setActive(1)}>
          <Link to="/users" className="menu-item" >
            <span className='d-flex'>
              <AiOutlineUsergroupAdd />
              <p style={{ textDecoration: 'none' }}> Users </p>
            </span>
          </Link>
  </li>*/}

      </ul>

    </div>
  );
};

export default SideBar;
