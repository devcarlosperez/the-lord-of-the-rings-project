import { useState } from "react";
import "./Header.css";

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
        <a href="/hobbiton">Hobbiton</a>
        <a href="/forum">Forum</a>
      </nav>
    </header>
  );
}

export default Header;