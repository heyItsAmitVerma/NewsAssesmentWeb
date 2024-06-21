import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.module.css";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const category = searchTerm.toLowerCase();
    navigate(`/category/${category}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">
            News <span className="badge bg-danger">Abtak</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              {['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'].map((category) => (
                <li className="nav-item" key={category}>
                  <Link className="nav-link" to={`/category/${category.toLowerCase()}`}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
