import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm">
      <a className="navbar-brand text-dark py-0" href="/">
        Kekulineran
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <span className="navbar-text">
          <i className="fab fa-instagram mr-2"></i>
          <i className="fab fa-whatsapp mr-2"></i>
          <i className="fab fa-facebook-f mr-2"></i>
        </span> */}
      </div>
    </nav>
  );
}
