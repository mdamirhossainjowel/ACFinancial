import React from "react";
import { Link } from "react-router-dom";
import AcFinanace from "../../Assets/AC Finance.png";

const Header = () => {
  return (
    <div className="navbar justify-between bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52"
          >
            <li>
            <details className="dropdown">
              <summary className="m-1">Loan</summary>
              <ul className="p-2 menu dropdown z-[1] rounded-box">
              <Link className="btn-ghost " to="/privatemortgage">
                  Private Mortgage
                </Link>
                <Link className="btn-ghost " to="/personalloan">
                  Personal Loan
                </Link>
                <Link className="btn-ghost " to="/autoloan">
                  Auto Loan
                </Link>
                <Link className="btn-ghost " to="/homeloan">
                  Home Loan
                </Link>
              </ul>
            </details>
          </li>
            <li>
              <Link className="btn-ghost " to="/investmanagement">
                Investment Management
              </Link>
            </li>
            <li>
              <Link className="btn-ghost " to="/howitwork">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="btn-ghost " to="/applynow">
                Apply Now
              </Link>
            </li>
            <li>
              <Link className="btn-ghost " to="/aboutus">
                About Us
              </Link>
            </li>
            <li>
              <Link className="btn-ghost " to="/Contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <img className="ml-1 mr-2 w-28" src={AcFinanace} alt="" />
        <Link
          to="/"
          className="btn btn-ghost text-primary normal-case text-2xl font-bold"
        >
          <span className="text-secondary">AC </span>FINANCIAL
        </Link>
      </div>
      <div className="navbar-center hidden normal-case lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="pr-2">
            <div className="dropdown dropdown-bottom dropdown-hover">
              <Link tabIndex={1} className="text-xl">
                Loans
              </Link>
              <ul
                tabIndex={1}
                className="dropdown-content w-52 p-4 menu shadow bg-base-100 rounded-box"
              >
                <Link className="text-xl" to="/privatemortgage">
                  Private Mortgage
                </Link>
                <Link className="text-xl" to="/personalloan">
                  Personal Loan
                </Link>
                <Link className="text-xl" to="/autoloan">
                  Auto Loan
                </Link>
                <Link className="text-xl" to="/homeloan">
                  Home Loan
                </Link>
              </ul>
            </div>
          </li>
         
          <li>
            <Link className="text-xl" to="/investmanagement">
              Investment Management
            </Link>
          </li>
          <li className="pr-2">
            <Link className="text-xl" to="/howitwork">
              How It Works
            </Link>
          </li>
          <li>
            <Link className="text-xl" to="/applynow">
              Apply Now
            </Link>
          </li>
          <li className="pr-2">
            <Link className="text-xl" to="/aboutus">
              About Us
            </Link>
          </li>
          <li className="pr-2">
            <Link className="text-xl" to="/Contactus">
              Contact Us
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
