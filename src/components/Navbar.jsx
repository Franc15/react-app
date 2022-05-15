import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Navbar() {
  const token = localStorage.getItem("key");
  let isAuthenticated = false;

  if (token) {
    isAuthenticated = true;
  }

  useEffect(() => {
    if (token) {
      console.log(token);
    }
  }, [token]);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">BeMemory</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/services" className="mr-5 hover:text-gray-900">
            Services
          </Link>
          <Link to="/pricing" className="mr-5 hover:text-gray-900">
            Pricing
          </Link>
        </nav>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  );
}

export default Navbar;
