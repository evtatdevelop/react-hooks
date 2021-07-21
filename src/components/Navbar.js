// import React from 'react';
import { NavLink } from "react-router-dom"

export const Navbar = () => (
  <nav className = "navbar navbar-dark bg-primary navbar-expand-sm">
    <div className="container-fluid">  
      <div className = "navbar-brand">
        Github Search
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className = "navbar-nav">
          <li className = "nav-item">
            <NavLink to="/" exact className = "nav-link">Home</NavLink>
          </li>
          <li className = "nav-item">
            <NavLink to="/about" className = "nav-link">About</NavLink>
          </li>
        </ul>
      </div>  
    </div>  

  </nav>
)