import "../styles/Hero.css";
import Buttons from "./Buttons";
import Decorations from "./Decorations";
import pathTwo from "../assets/images/path_2.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      {/*<img src={heroImage} alt="Hero Background" className="hero-image" />*/}
      <div className="hero-content">
        <div className="row">
          <div className="col-md-6">
            <Buttons bt_type="lets_en" />
          </div>

          <Decorations
            imageSrc={pathTwo}
            width="150px"
            height="190px"
            opacity={0.7}
            left="5px"
            top="10px"
            animation="rotate_deg 15s linear infinite"
            z_index={1}
          />

          <div className="col-md-6">
            <h1 className="hero-h1">Welcome to WebRep</h1>
            <h3 className="hero-p">
              Your best repository option in website dependecies management!
            </h3>
            <p className="hero-p">
              Follow the steps to register your website and start enjoying our
              free toolkit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
