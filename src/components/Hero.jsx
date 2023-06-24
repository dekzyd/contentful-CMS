import picture from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit
            eum illo nostrum autem, voluptatum nam repudiandae minima possimus
            consequatur explicabo molestiae assumenda aliquid eos nihil numquam
            magni iure. Accusamus.
          </p>
        </div>
        <div className="img-container">
          <img src={picture} alt="Hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
