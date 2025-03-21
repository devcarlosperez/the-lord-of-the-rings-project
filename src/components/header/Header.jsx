import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <a className="logo" href="/home">
        <img className="logo-image" src="/images/logo.png" alt="logo" />
        <h2 className="logo-name">The Lord of the Rings</h2>
      </a>
      <nav>
        <a href="/home">Home</a>
        <a href="/characters">Characters</a>
        <a href="/hobbiton">Hobbiton</a>
        <a href="/forum">Forum</a>
      </nav>
    </header>
  );
}

export default Header;