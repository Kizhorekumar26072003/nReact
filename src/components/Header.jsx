import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

export default function Header() {
  const [log, setLog] = useState("Login");

  useEffect(() => {
    return () => {};
  }, [log]);

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            setLog(log === "Login" ? "Logout" : "Login");
          }}
        >
          {log}
        </button>
      </div>
    </div>
  );
}
