
const Contact = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE. We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head office</h3>
          <div>
            <ul>
              <li>
                <i className="fa-regular fa-map"></i>
                <p>96 Karol bagh Near Tech space gadget</p>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <p>carastylings@gamil.com</p>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <p>+91-83748748377, 091-2323423223</p>
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                <p>Monday to Friday 9AM to 5PM</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56020.23511249661!2d77.15212193014284!3d28.651792117186247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c5f402ed3%3A0x942174294c9dd946!2sKarol%20Bagh%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1701182891164!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className="normal">submit</button>
        </form>
        <div className="people">
          <div>
            <img src="peope-img/1 (1).png" alt="" />
            <p>
              <span>John Doe</span> Senior Marketing Manager
              <br />
              Phone: +000 123 000 77 88
              <br />
              Email: contact@johndoe.com
            </p>
          </div>
          <div>
            <img src="peope-img/2.png" alt="" />
            <p>
              <span>William Smith</span> Senior Marketing Manager
              <br />
              Phone: +000 123 000 77 88
              <br />
              Email: contact@johndoe.com
            </p>
          </div>
          <div>
            <img src="peope-img/3.png" alt="" />
            <p>
              <span>Emma stone</span> Senior Marketing Manager
              <br />
              Phone: +000 123 000 77 88
              <br />
              Email: contact@johndoe.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
