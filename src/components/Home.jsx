const { default: Hero } = require("./Hero");
const { default: Pricing } = require("./Pricing");
const { default: Testimonials } = require("./Testimonials");

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
    </>
  );
};

export default Home;
