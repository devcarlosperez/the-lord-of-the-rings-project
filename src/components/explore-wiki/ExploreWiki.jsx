import "./ExploreWiki.css";

function ExploreWiki() {
  return (
    <div className="explore-wiki-container">
      <h2>Explore the Wiki</h2>
      <div className="button-container">
        <a href="/home">HOME</a>
        <a href="/characters">CHARACTERS</a>
        <a href="/hobbiton">HOBBITON</a>
      </div>
    </div>
  );
}

export default ExploreWiki;
