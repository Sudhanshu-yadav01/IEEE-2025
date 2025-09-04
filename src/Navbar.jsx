import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-glass">
      <div className="navbar-logo">
        <span className="navbar-title">IEEE</span>
      </div>
      <div className="navbar-hamburger md:hidden flex items-center">
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <div
        className={`navbar-links font-light flex-col md:flex-row md:flex ${
          menuOpen ? "flex" : "hidden"
        } md:!flex  md:static top-16 left-10 
        w-full md:w-auto bg-black/80 md:bg-transparent rounded-b-2xl 
        md:rounded-none  md:z-auto p-4 md:p-0`}
      >
        <Link to="/">Home</Link>
        <Link to="/core-members">Core Members</Link>
        <Link to="/events">Events</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tech-news">Tech News</Link>
      </div>
    </nav>
  );
};

export default Navbar;
