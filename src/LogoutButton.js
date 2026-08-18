import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // redirect to login after logout
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

    return (
    <span
      className="nav-link"
      style={{ cursor: "pointer" }}
      onClick={handleLogout}
    >
      🚪 Logout
    </span>
  );
}

export default LogoutButton;
