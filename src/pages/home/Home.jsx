
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import IntroductionWeb from "../../components/introduction-web/IntroductionWeb";

function Home() {
  return (
    <>
      <Header />
      <Banner title="Home" image="/images/banner-home.webp" />
      <IntroductionWeb/>
      <Footer />
    </>
  );
}

export default Home;
