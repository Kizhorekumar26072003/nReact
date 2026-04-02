import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export default function Header() {
  const [log, setLog] = useState("Login");

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          {/* use link & to for navigating to another route without a render. instaed of a and href which will rerender the whole page  */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
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
