import { useState, useEffect } from "react";
import "./ButtonUp.css";

function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`button-up ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <img
        className="button-image"
        src="/images/button-up.png"
        alt="Scroll to top"
      />
    </button>
  );
}

export default ButtonUp;