import React, { Component } from "react";

const mystyle = {
  display: "flex",
  justifyContact: "center",
  alignItems: "center",
  fontSize: "2rem"
};

const total = {
  marginRight: "1rem",
  marginBottom: "0"
};

const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/" className="navbar-brand">
        Navbar
      </a>
      <div className="form-inline">
        <span className="badge badge-pill badge-secondary" style={mystyle}>
          <h2 style={total}>{totalCounter}</h2>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 16 16"
            className="bi bi-basket2-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
