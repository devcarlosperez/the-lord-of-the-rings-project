import "./CharacterCards.css";
import CHARACTERS from "../../services/characters";

function CharacterCards() {
  return (
    <div className="character-cards-container">
      {CHARACTERS.map((c, index) => (
        <div key={index} className="character-card">
          <div className="character-image-container">
            <img className="character-image" src={c.image} alt={c.name} />
          </div>
          <h3 className="character-name">{c.name}</h3>
          <p className="character-description">{c.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterCards;
