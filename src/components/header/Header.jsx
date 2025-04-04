import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <a className="header-logo" href="/home">
          <img src="/images/logo.png" alt="logo" />
          <h2>The Lord of the Rings</h2>
        </a>
        
        <button className="header-menu" onClick={() => setIsOpen(!isOpen)}>
          <i className="bx bx-menu" />
        </button>
      </div>

      <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
        <a href="/home">Home</a>
        <a href="/characters">Characters</a>
        <a href="/locations">Locations</a>
        <a href="/forum">Forum</a>
        <Link to="/sign-in">
          <button className="button-authentication-sign-in">Sign In</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;