const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src="logo.png" alt="logo-img" />
        <h4>Contact</h4>
        <p>
          <strong>Address</strong>:562Wellington Road Street 32 San Francisco
        </p>
        <p>
          <strong>Phone</strong>:*01 3333 4434/(+91)012344545
        </p>
        <p>
          <strong>Hours:</strong>10:00 ,18:00, Mon-Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <p></p>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From Aoo Store or Google Play</p>
        <div className="row">
          <img src="pay/app.jpg" alt="" />
          <img src="pay/play.jpg" alt="" />
        </div>
        <p>Secured payment Gateways</p>
        <img src="pay/pay.png" alt="" />
      </div>
      <div className="copyright">
        <p>&copy 2023 ,Tech2 etc - HTML , CSS, Ecommerce Template</p>
      </div>{" "}
    </footer>
  );
};

export default Footer;
