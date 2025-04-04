import Banner from "../../components/banner/Banner";
import ButtonUp from "../../components/button-up/ButtonUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MapLocationsMovies from "../../components/map-locations-movies/MapLocationsMovies"

function Locations() {
  return (
    <>
      <Header/>
      <Banner title="Locations" image="/images/banner-hobbiton.webp" />
      <MapLocationsMovies/>
      <Footer />
      <ButtonUp/>
    </>
  );
}

export default Locations;