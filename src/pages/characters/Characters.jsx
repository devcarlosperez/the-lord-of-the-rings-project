import Banner from "../../components/banner/Banner";
import ButtonUp from "../../components/button-up/ButtonUp";
import CharacterCards from "../../components/character-cards/CharacterCards";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Characters() {
  return (
    <>
      <Header />
      <Banner title="Characters" image="/images/banner-characters.webp" />
      <CharacterCards />
      <Footer />
      <ButtonUp/>
    </>
  );
}

export default Characters;