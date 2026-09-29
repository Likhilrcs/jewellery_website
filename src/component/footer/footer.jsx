import "./footer.css";
function Footer() {
  return (
    <footer className="diamond-footer">
            <div className="footer-newsletter">
              <div className="newsletter-content">
                <span>STAY IN THE LOOP</span>
                <h2>Discover New Diamond and Gold Collections</h2>
                <p>Subscribe to receive new collection launches, jewellery inspiration,exclusive offers and more.</p>
              </div>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email address"/>
                <button>Subscribe <span>→</span></button>
              </div>
            </div>
            <div className="footer-main">
              <div className="footer-brand">
                <h2 className="footer-logo">LAXZARI</h2>
                <span className="footer-tagline"> DIAMOND JEWELLERY</span>
                <p>Timeless diamond jewellery crafted with elegance,passion and exceptional attention to detail.</p>
                <div className="footer-socials">
                  <a href="#">Instagram</a>
                  <a href="#">Facebook</a>
                  <a href="#">Pinterest</a>
                </div>
              </div>
              <div className="footer-column">
                <h3>Collections</h3>
                <a href="#">Diamond Rings</a>
                <a href="#">Diamond Earrings</a>
                <a href="#">Diamond Necklaces</a>
                <a href="#">Gold Rings</a>
                <a href="#">Gold  Chains</a>
                <a href="#">Gold Necklaces</a>
                <a href="#">Custom Jewellery</a>
              </div>
              <div className="footer-column">
                <h3>Customer Care</h3>
                <a href="#">Contact Us</a>
                <a href="#">Book A Consultation</a>
                <a href="#">Shipping & Delivery</a>
                <a href="#">Returns & Exchanges</a>
                <a href="#">Jewellery Care</a>
                <a href="#">Diamond Guide</a>
                <a href="#">FAQs</a>
              </div>
              <div className="footer-column">
                <h3>About Us</h3>
                <a href="#">Our Story</a>
                <a href="#">Our Craftsmanship</a>
                <a href="#">Why Choose Us</a>
                <a href="#">Certification</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
              <div className="footer-column footer-contact">
                <h3>Get In Touch</h3>
                <p> Hyderabad, Telangana</p>
                <p>laxzarigolddiamonds@gmail.com</p>
                <p>+91 9876543210</p>
                <p>Mon - Sun: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </footer>
  );
}

export default Footer;
