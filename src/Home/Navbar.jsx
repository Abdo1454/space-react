import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="assets/shared/logo.svg" alt="logo" />
        </div>

        <hr className="nav-hr" />

        <ul className="nav-links">
          <li>
            <Link to="/">00 Home</Link>
          </li>

          <li>
            <Link to="/destination">01 Destination</Link>
          </li>

          <li>
            <Link to="/crew">02 Crew</Link>
          </li>

          <li>
            <Link to="/technology">03 Technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;