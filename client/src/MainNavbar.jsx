import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MainNavbar() {
  return (
    <div className="MainNavbar">

          <NavLink to="/"><h1 className="App-title">MERN Street Art</h1></NavLink> <br/>
          <div className="Nav">
          <NavLink to="/list">List</NavLink>
          <NavLink to="/map">Map</NavLink>
          <NavLink to="/new-street-art">New Street Art</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/login">Login</NavLink>
          </div>
          

{/*           {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
           */}
    </div>
  )
}