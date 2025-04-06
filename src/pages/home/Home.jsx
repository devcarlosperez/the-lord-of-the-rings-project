import Banner from "../../components/banner/Banner";
import ButtonUp from "../../components/button-up/ButtonUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroductionWeb from "../../components/introduction-web/IntroductionWeb";
import LocationsCarousel from "../../components/locations-carousel/LocationsCarousel";
import MiddleEarthMap from "../../components/middle-earth-map/MiddleEarthMap";

function Home() {
  return (
    <>
      <Header />
      <Banner title="Home" image="/images/banner-home.webp" />
      <IntroductionWeb />
      <MiddleEarthMap />
      <LocationsCarousel />
      <Footer />
      <ButtonUp />
    </>
  );
}

export default Home;