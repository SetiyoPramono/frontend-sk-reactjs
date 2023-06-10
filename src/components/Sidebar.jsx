import React from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const Logout = async() => {
    try{
      await axios.delete("http://localhost:5000/logout");
      navigate("/", {replace: true});
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
        
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: 280, height: "92vh"}}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Admin</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <button onClick={Logout} className="btn btn-outline-light">
          <svg className="" width={16} height={16}>
            <use xlinkHref="#sign-out" />
          </svg>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
