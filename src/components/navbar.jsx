import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { NavLink } from 'react-router-dom';


function AppNavbar() {
  return (

<nav className="navbar  nav-out">
 
  <div className="container-fluid navbar-main">
   <div className="navbar-brand">Abigail Wright Codes</div>

        <ul className="nav justify-content-end">
  <li className="nav-item">
    <NavLink to="/" className={(navLink)=>(navLink.isActive ? "activeNavItem" : 'navbarNone')}>Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/about" className={(navLink)=>(navLink.isActive ? "activeNavItem" : 'navbarNone')}>
        About
      </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/portfolio" className={(navLink)=>(navLink.isActive ? "activeNavItem" : 'navbarNone')}>
        Portfolio
      </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/contact" className={(navLink)=>(navLink.isActive ? "activeNavItem" : 'navbarNone')}>
      Contact
 </NavLink> 
 </li>
</ul>
   
 
      </div>
    </nav>
  );
}

export default AppNavbar;
