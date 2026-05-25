import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* logo */}
      <div className="logo">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
        />
      </div>

      {/* hamburger menu */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* line */}
      <hr className="nav-hr" />

      {/* nav links */}
      <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            00 Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            01 Destination
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            02 Crew
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            03 Technology
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;