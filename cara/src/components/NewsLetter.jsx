const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up to Newsletters</h4>
        <p>
          Get E-mail updates about our lateset shop and{" "}
          <span>special offer</span>{" "}
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="your email address" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
};

export default Newsletter;
