import Banner from "../../components/banner/Banner";
import ButtonUp from "../../components/button-up/ButtonUp";
import Footer from "../../components/footer/Footer";
import ForumList from "../../components/forum-list/ForumList";
import Header from "../../components/header/Header";

function Forum() {
  return (
    <>
      <Header/>
      <Banner title="Forum" image="/images/banner-forum.webp" />
      <ForumList/>
      <Footer />
      <ButtonUp/>
    </>
  );
}

export default Forum;