import { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <i className="bx bx-menu"/>
      </button>

      <header className={`header-container ${isOpen ? "show" : ""}`}>
        <a className={`logo ${isOpen ? "hide" : ""}`} href="/home">
          <img className="logo-image" src="/images/logo.png" alt="logo" />
          <h2 className="logo-name">The Lord of the Rings</h2>
        </a>
        
        <nav className={`${isOpen ? "show-menu" : ""}`}>
          <a href="/home">Home</a>
          <a href="/characters">Characters</a>
          <a href="/hobbiton">Hobbiton</a>
          <a href="/forum">Forum</a>
        </nav>
      </header>
    </>
  );
}

export default Header;