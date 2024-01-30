import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="mainNavContainer">
          <div className="nav1">
            <h1 className="logo">E-Rase</h1>
          </div>
          <div className="nav2">
            <ul className="links">
              <li classname="Design">
                <a href="">Add your product</a>
              </li>
              <li classname="Design">
                <a href="">Understanding the process</a>
              </li>
              <li classname="Design">
                <a href="">About Us</a>
              </li>
              <li classname="auth">
                <a href="" className="auth">
                  Login
                </a>
              </li>
              <li>
                <a href="" className="auth">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer">
          <li>
            <a href="https://example.com">instagram</a>
          </li>
          <li>
            <a href="https://example.com">linked in</a>
          </li>
          <li>
            <a href="https://example.com">facebook</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Home;

// { {}  {} }
