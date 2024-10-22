import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "../App.css";

function Header({ blackHeader, profile }) {
  return (
    <div
      className={`navbar ${
        blackHeader ? "bg-[#1D1B1B]" : "bg-[#EE8B48]"
      }  text-white`}
    >
      <div className="navbar-start">
        <details className="dropdown">
          <summary
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white text-black font-semibold"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            {blackHeader ? (
              <li>
                <ScrollLink to="aboutSection" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
            ) : (
              ""
            )}
            {profile ? (
              <>
                <li className="hover:cursor-pointer">
                  <Link to="/profileform">Abdullah's Profile</Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link to="/signin" className="text-red-700">
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:cursor-pointer">
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link to="/signin">Sign In</Link>
                </li>
              </>
            )}
          </ul>
        </details>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 items-center gap-10 text-lg font-bold">
          <div className="flex justify-center items-center gap-10 min-w-48 max-w-48">
            <li className="hover:cursor-pointer">
              <Link to="/home">Home</Link>
            </li>
            {blackHeader ? (
              <li className="hover:cursor-pointer">
                <ScrollLink to="aboutSection" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
            ) : (
              ""
            )}
          </div>
          <li className="px-44">
            <Link to="/home" className="text-4xl title-font">
              FitMe
            </Link>
          </li>
          <div className="flex justify-center items-center gap-10 min-w-48 max-w-48">
            {profile ? (
              <>
                <div className="hidden lg:flex">
                  <details className="dropdown">
                    <summary tabIndex={0} role="button" className=" lg:flex">
                      <p>Hi, Abdullah</p>
                    </summary>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-36 p-2 shadow-white shadow-sm"
                    >
                      <li>
                        <Link
                          to="/profileform"
                          className="flex justify-center items-center text-black"
                        >
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <Link to="/signin" className="text-red-700">
                            Log Out
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </details>
                </div>
              </>
            ) : (
              <>
                <li className="hover:cursor-pointer">
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Link to="/signin">Sign In</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
      <div className="navbar-center lg:hidden">
        <Link to="/home" className="text-4xl title-font">
          FitMe
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default Header;
