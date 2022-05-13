import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

const TopMenu = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container-fluid" style={{paddingTop:15,paddingBottom:10}}>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:'space-between'}}>
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Fashion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Supermarket
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Furniture
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Garden & Outdoors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Jewellery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/documentation">
                  Documentation
                </Link>
              </li> */}
             
            </ul>
            <ul className="navbar-nav" style={{paddingRight:100}}>
            
              <div className="position-relative d-inline mr-3">
                <Link to="/cart" className="btn btn-primary">
                  <IconCart3 className="i-va" />
                  <div className="position-absolute top-0 left-100 translate-middle badge bg-danger rounded-circle">
                    2
                  </div>
                </Link>
              </div>

              <li className="nav-item">
                <Link className="nav-link" to="/checkout">
                  Your Invoice
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                Account
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/account/signin">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/signup">
                      Sign Up
                    </Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li> */}
                 
                  {/* <li>
                    <Link className="dropdown-item" to="/contact-us">
                      Contact Us
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog/detail">
                      Blog Detail
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/fsafasf">
                      404 Page Not Found
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/500">
                      500 Internal Server Error
                    </Link>
                  </li> */}
                </ul>
              </li>
            </ul>
            
             
            
           
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
