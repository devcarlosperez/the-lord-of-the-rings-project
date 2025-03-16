import Carousel from "react-bootstrap/Carousel";
import "./LocationsCarousel.css";

function LocationsCarousel() {
  return (
    <Carousel className="carousel" fade>
      <Carousel.Item>
        <img src="/images/hobbiton-carousel.webp" alt="Hobbiton" />
        <Carousel.Caption className="carousel-caption">
          <h2>Hobbiton</h2>
          <p>
            The peaceful village of the Hobbits, filled with life and nature.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/rivendel-carousel.webp" alt="Rivendel" />
        <Carousel.Caption className="carousel-caption">
          <h2>Rivendell</h2>
          <p>The tranquil refuge of the Elves, nestled in the mountains.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/minas-tirith-carousel.webp" alt="Minas Tirith" />
        <Carousel.Caption className="carousel-caption">
          <h2>Minas Tirith</h2>
          <p>The majestic White City, home to the Gondorian kings.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/loth-lorien-carousel.webp" alt="Lothlórien" />
        <Carousel.Caption className="carousel-caption">
          <h2>Lothlórien</h2>
          <p>The Golden Wood, a magical realm of the Elves.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/mordor-carousel.webp" alt="Mordor" />
        <Carousel.Caption className="carousel-caption">
          <h2>Mordor</h2>
          <p>The dark and desolate land ruled by Sauron.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LocationsCarousel;
