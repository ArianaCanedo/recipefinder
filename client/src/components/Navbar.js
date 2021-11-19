import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    auth.signout(() => navigate("/login"));
  };

  return (
    <div className="bg-light p-3">
      {!auth.isLoggedIn && (
        <Link to="/register" className="mr-2">
          Register
        </Link>
      )}

      {!auth.isLoggedIn && (
        <Link to="/login" className="mr-2">
          Login
        </Link>
      )}

      {auth.isLoggedIn && (
        <Link to="/profile" className="mr-2">
          Profile
        </Link>
      )}

      {auth.isLoggedIn && (
        <button onClick={logout} className="btn btn-dark">
          Logout
        </button>
      )}
    </div>
  );
}

