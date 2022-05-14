import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="md:flex justify-between m-2">
      <h2 className="text-2xl text-green-600 p-2">Codeninjas</h2>
      <ul className="md:flex">
        <li className="p-2">Home</li>
        <li className="p-2">About</li>
      </ul>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </nav>
  );
}

export default Navbar;
