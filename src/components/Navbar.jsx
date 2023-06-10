import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid mx-5">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <h3 className="
                d-inline-block
                align-top
                mb-0
                text-uppercase
                me-3
                fw-bold
                text-light
              ">
                Store
                
              </h3>
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <Link
                className="btn btn-primary d-none d-lg-block"
                to="/login"
            >
                <i className="fas fa-download fa-fw me-1" />
                Login
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
