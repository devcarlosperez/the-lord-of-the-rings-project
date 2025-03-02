import Banner from "../../components/banner/Banner";
import ButtonUp from "../../components/button-up/ButtonUp";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HobbitonMap from "../../components/map-hobbiton/HobbitonMap";

function Hobbiton() {
  return (
    <>
      <Header />
      <Banner title="Hobbiton" image="/images/banner-hobbiton.webp" />
      <HobbitonMap />
      <Footer />
      <ButtonUp/>
    </>
  );
}

export default Hobbiton;
