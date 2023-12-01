import React from "react";
import { Link } from "react-router-dom";
import AcFinanace from "../../Assets/AC Finance.png"

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
    <aside>
    <img className="ml-1 mr-2 w-28" src={AcFinanace} alt="" /> <p className="text-xl font-bold"><span className="text-secondary">AC</span><span className="text-primary"> FINANCIAL</span><br/>Empower yourself in shaping your financial destiny.</p>
    </aside> 
    <nav>
      <header className="footer-title text-secondary">Contact Us</header> 
      <p className="">+1 416 264 5678</p>
      <header className="footer-title">Email Inquiries:</header> 
      <p className="">info@acfinancial.ca</p>
      <header className="footer-title">Office Hours:</header> 
      <p className="">Monday to Friday, 9:00 am to 5:00 pm</p>
      <header className="footer-title">Visit Our Office:</header> 
      <p className="">Unit 205, 3489 Kingston Road</p>
      <p className="">Toronto, ON M1M 1R4</p>
    </nav> 
    <nav>
      <header className="footer-title text-secondary">Services</header> 
      <Link to="privatemortgage" className="link link-hover">Private Mortgage</Link>
      <Link to="personalloan" className="link link-hover">Personal Loan</Link>
      <Link to="autoloan" className="link link-hover">Auto Loan</Link>
      <Link to="homeloan" className="link link-hover">Home Loan</Link>
    </nav> 
    <nav>
      <header className="footer-title text-secondary">Company</header> 
      <Link to="aboutus" className="link link-hover">About us</Link>
      <Link to="Contactus" className="link link-hover">Contact</Link>
      
    </nav> 
    <nav>
      <header className="footer-title text-secondary">Legal</header> 
      <a href="a" className="link link-hover">Terms of use</a>
      <a href="a" className="link link-hover">Privacy policy</a>
      <a href="a" className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  );
};

export default Footer;
