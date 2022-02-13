import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container">
            <Link className="navbar-brand text-white fw-bolder" to="/">🛒Commerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/saved" >Saved</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     );
};

export default TopBar;