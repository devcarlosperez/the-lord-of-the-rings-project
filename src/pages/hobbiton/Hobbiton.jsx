import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Map from "../../components/map/Map";

function Hobbiton() {
  return (
    <>
      <Header/>
      <Banner title="Hobbiton" image="/images/banner-hobbiton.webp"/>
      <Map/>
      <Footer/>
    </>
  );
}

export default Hobbiton;
