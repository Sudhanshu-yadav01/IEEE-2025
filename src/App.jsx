import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import CoreMembers from "./CoreMembers";
import Events from "./Events";
import Articles from "./Articles";
import Projects from "./Projects";
import TechNews from "./TechNews";
import Home from "./Home";
import Navbar from "./Navbar";


import "./App.css";

import Aurora from "./components/Aurora";
import LightRays from "./components/LightRays";

const AppContent = () => {
  const location = useLocation();
  return (
    <div className="app-bg relative min-h-screen w-full overflow-hidden">
      {location.pathname === "/" && (
        <div className="absolute inset-0 -z-10 ">
          <LightRays/>
        </div>
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/core-members" element={<CoreMembers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tech-news" element={<TechNews />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
