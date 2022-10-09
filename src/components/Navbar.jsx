import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../images/logo.png";
export const Navbar = () => {
  const { logout, currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to='/'>
          <img src={logo} alt="/" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?category=food">
            <h6>FOOD</h6>
          </Link>
          <Link className="link" to="/?category=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?category=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?category=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
          <span className="post">
            <Link className="link" to="/post">
              Post
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
