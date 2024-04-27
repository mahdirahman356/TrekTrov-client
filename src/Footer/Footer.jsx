import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "../App.css"
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10 bg-base-200 text-base-content mt-24 ubuntu w-[95%] md:w-[80%] mx-auto">
  <aside>
    <p className="bubblegum text-4xl font-semibold">TrekTrov </p>
    <p>Discover the World with Us</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Guided Tours</a>
    <a className="link link-hover">Adventure Packages</a>
    <a className="link link-hover">Cultural Experiences</a>
    <a className="link link-hover">Eco-Tourism</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Media Center</a>
  </nav> 
  <nav>
    <h6 className="footer-title">CONNECT WITH US</h6> 
    <div className="flex gap-8 mb-3"><FaFacebook className="text-[25px]"/> <GrInstagram className="text-[25px]"/> <FaLinkedinIn className="text-[25px]"/> <FaTwitter className="text-[25px]"/></div>
    <a className="link link-hover">Follow us on social media for updates and travel inspiration.</a>
    <a className="link link-hover">© 2024 TrekTrov. All rights reserved.</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;