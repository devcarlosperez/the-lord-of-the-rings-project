import "./Banner.css";

function Banner(props) {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h1>{props.title}</h1>
    </div>
  );
}

export default Banner;