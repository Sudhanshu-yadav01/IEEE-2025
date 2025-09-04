import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar-glass ">
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
        {/* Desktop links remain unchanged */}
        <div
          className={`navbar-links font-light flex-col md:flex-row md:flex hidden md:static md:w-auto md:bg-transparent md:rounded-none md:z-auto md:p-0`}
        >
          <Link to="/">Home</Link>
          <Link to="/core-members">Core Members</Link>
          <Link to="/events">Events</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/tech-news">Tech News</Link>
        </div>
      </nav>
      {/* Full screen overlay for mobile menu rendered at root level */}
      {menuOpen && (
        <div className="navbar-overlay fixed inset-0 bg-black/95 z-[99999] flex flex-col items-center justify-center">
          <button
            className="absolute top-8 right-8 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="flex flex-col gap-8 text-center">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              Home
            </Link>
            <Link
              to="/core-members"
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              Core Members
            </Link>
            <Link
              to="/events"
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              Events
            </Link>
            <Link
              to="/articles"
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              Articles
            </Link>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              Projects
            </Link>
            <Link
              to="/tech-news"
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              Tech News
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
