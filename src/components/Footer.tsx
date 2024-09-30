import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 WebRepo. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/policy">Privacy Policy</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
