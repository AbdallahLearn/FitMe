import React from "react";
import "../App.css";
function Header({ blackHeader }) {
  return (
    <div
      className={`navbar ${
        blackHeader ? "bg-[#1D1B1B]" : "bg-[#EE8B48]"
      }  text-white`}
    >
      <div className="navbar-start">
        <details className="dropdown">
          <summary tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-semibold"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
            <li>
              <a>Sign In</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-3 text-lg font-bold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <a className="text-4xl px-48 title-font">FitMe</a>
          <li>
            <a>Sign Up</a>
          </li>
          <li>
            <a>Sign In</a>
          </li>
        </ul>
      </div>
      <div className="navbar-center lg:hidden">
        <span className="text-4xl title-font">FitMe</span>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default Header;
