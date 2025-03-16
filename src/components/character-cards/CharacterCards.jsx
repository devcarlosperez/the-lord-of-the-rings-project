import { useEffect } from "react";
import "./CharacterCards.css";
import CHARACTERS from "../../services/characters";

function CharacterCards() {
  useEffect(() => {
    const CHARACTER_ID = window.location.hash.slice(1);
    if (CHARACTER_ID) {
      const CHARACTER_ELEMENT = document.getElementById(CHARACTER_ID);
      if (CHARACTER_ELEMENT) {
        CHARACTER_ELEMENT.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="character-cards-container">
      {CHARACTERS.map((c, index) => (
        <div key={index} className="character-card" id={c.id}>
          <div className="character-image-container">
            <img
              className="character-image"
              src={`/images/${c.image}`}
              alt={c.name}
            />
          </div>
          <h3 className="character-name">{c.name}</h3>
          <p className="character-description">{c.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterCards;