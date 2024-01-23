import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [aside, setAside] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">Courses</div>
      <ul className={`${aside ? "lists" : "list-display"}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/online">Online Courses</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        <GiHamburgerMenu onClick={() => setAside(!aside)} />
      </div>
    </nav>
  );
};

export default Navbar;
