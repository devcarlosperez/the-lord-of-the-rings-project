import { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthClick = () => {
    if (user) {
      const auth = getAuth();
      signOut(auth).then(() => {
        setUser(null);
        navigate("/home");
      });
    } else {
      navigate("/sign-in");
    }
  };

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

      <nav className={`header-nav ${isOpen ? "active" : ""}`}>
        <a href="/home">Home</a>
        <a href="/characters">Characters</a>
        <a href="/locations">Locations</a>
        <a href="/forum">Forum</a>
        <button
          className="button-authentication-sign-in"
          onClick={handleAuthClick}
        >
          {user ? "Sign Out" : "Sign In"}
        </button>
      </nav>
    </header>
  );
}

export default Header;