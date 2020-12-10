import React from "react";
import { Dropdown } from "react-bootstrap";
import "../styles/style.css";

const NavBar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/" className="navbar-brand">
        Christmas
      </a>
      <Dropdown>
        <Dropdown.Toggle
          style={{
            backgroundColor: "#f8f9fa",
            color: "grey",
            borderColor: "grey"
          }}
          id="dropdown-basic"
        >
          <span className="mystyle">
            <h5 className="total">
              <FormatTotalCount totalCounter={totalCounter} />
            </h5>
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
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Το Προφιλ Μου</Dropdown.Item>
          <Dropdown.Item href="/">Καλάθι Αγορών</Dropdown.Item>
          <Dropdown.Item href="/">Αποσύνδεση</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

const FormatTotalCount = ({ totalCounter }) => {
  const value = totalCounter;
  return value === 0 ? "Το καλάθι σας είναι άδειο" : value + " στο καλάθι";
};

export default NavBar;
