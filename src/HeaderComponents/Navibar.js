import React from "react";
import "./Navibar.css";

function Navibar() {
  return (
    <div className="font_header">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark container-fluid">
        <ul className="navbar-nav">
          <div className="align-self-center">
            <li className="nav-item active">
              <img
                className="logo"
                src="https://i.ya-webdesign.com/images/libro-vector-book-5.png"
                alt="logo"
              />
            </li>
          </div>

          <li className="nav-item active">
            <a className="nav-link text-warning" href="/">
              Lankatutor
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="#about">
              About
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="#subjects">
              Subjects
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="#team">
              Team
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "7%" }}>
            <a className="nav-link text-light" href="/admin">
              Admin
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-light" href="/signin">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navibar;
