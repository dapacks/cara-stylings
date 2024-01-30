import Feature from "../components/Feature";

const About = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>helps to find what actully we do</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src="about-img/a6.jpg" alt="" />
        <div>
          <h2>Who We Are</h2>
          <p>
            Welcome to cara, where fashion mee ts individuality! At our core, we
            believe that clothing is a form of self -expression, and we're here
            to empow er you to showcase your unique style. With a curated col
            lection of the latest trends and timeless classics, we offer
            high-quality, comfo rtable, and stylish pieces for every wardrobe.
            Our mission is to make every shopping experience enjoyable,
            seamless, and tailored to your preferences. Join us on this
            fashion-forward journey, and let your style shine with cara.
          </p>
          <abbr title="">
            Create stunning images with as much or as little control as you like
            thanks to a choice of Basic and Creative modes.
            <br />
            <br />
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
              Create stunning images with as much or as little control as you
              like thanks to a choice of Basic and Creative modes
            </marquee>
          </abbr>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className="video">
        <video autoPlay playsInline muted loop>
  <source src="about-img/1.mp4" type="video/mp4" /></video>
        </div>
      </section>

      <Feature />
    </>
  );
};

export default About;
