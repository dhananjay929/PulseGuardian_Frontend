import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger fixed-top ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-white" >PulseGuardian💙 </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              <Link className="nav-link active text-white" to="/about">About</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
