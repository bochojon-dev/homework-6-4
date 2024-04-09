import React from "react";
import "../navbar/Navbar.css";
const Navbar = () => {
  const Links = ["Home", "About", "Blog", "Contact", "Help"];
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-contents">
          <div className="logo">
            <a href="#">
              <h1>грузовик</h1>
            </a>
          </div>

          <div className="pages">
            <ul className="links">
              {Links?.map((el, i) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
