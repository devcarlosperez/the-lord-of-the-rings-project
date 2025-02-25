import "./CharacterCards.css";
import characters from "../../services/characters";

function CharacterCards() {
  return (
    <div className="character-cards-container">
      {characters.map((c, index) => (
        <div key={index} className="character-card">
          <img className="character-image" src={c.image} alt={c.name} />
          <h2 className="character-name">{c.name}</h2>
          <p className="character-description">{c.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterCards;