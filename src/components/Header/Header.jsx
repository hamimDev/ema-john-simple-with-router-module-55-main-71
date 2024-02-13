import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Porviders/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header flex items-center justify-between px-4 py-3 bg-gray-800">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
      </div>
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {/* Menu Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:flex md:items-center md:space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Shop
        </Link>
        <Link
          to="/orders"
          className="text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Orders
        </Link>
        <Link
          to="/inventory"
          className="text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Inventory
        </Link>
        <Link
          to="/login"
          className="text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
        <Link
          to="/signUp"
          className="text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Sign Up
        </Link>

        {user && (
          <span className="flex items-center">
            Welcome {user.email}
            <button className="ml-8" onClick={handleSignOut}>
              Sign out
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
