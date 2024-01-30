const Blog = () => {
  return (
    <>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="blogimg/b1.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton Jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              seflies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="blogimg/b2.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>how to Style a Quiff</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              seflies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/04</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="blogimg/b3.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Must-Have Sktaer Girl Items</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              seflies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>12/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="blogimg/b4.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>Runway-inpired Trends</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              seflies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>16/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="blogimg/b6.jpg" alt="" />
          </div>
          <div className="blog-details">
            <h4>AW20 Menswear Trends</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              seflies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>10/03</h1>
        </div>
      </section>
      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>
    </>
  );
};

export default Blog;
