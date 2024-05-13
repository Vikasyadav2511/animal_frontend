import React from "react";
import image from "./Images/footer Images/logo-pet-shelter-footer.svg";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
  return (
    <div className="Footer mt-20">
      <Container>
        <Row>
          <div className="py-5 footer_img">
            <img src={image} alt="" className="mx-auto" />
          </div>
          <Col md={4}>
            <div className="text-left link1">
              <h2 className="text-white">Adoption Info</h2>

              <div className="mt-8">
                <p>
                  <Link to={'/about'} className="unstyled-link">About Us</Link>
                </p>
                <p>
                  <Link className="unstyled-link">Adopt a pet</Link>
                </p>
                <p>
                  <Link className="unstyled-link">Contact Us</Link>
                </p>
                <p>
                  <Link className="unstyled-link">Image Credits</Link>
                </p>
                <p>
                  <Link className="unstyled-link">Shop </Link>
                </p>
                
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="text-left">
              <h2 className="text-white">Donation</h2>
              <ul className="Adfoot2 mt-8">
                <p>
                  <Link className="unstyled-link">Donate Now</Link>
                </p>
                <p>
                  <Link className="unstyled-link">Our Blog</Link>
                </p>
                <p>
                  <Link className="unstyled-link">Whish List</Link>
                </p>
                <p>
                  <Link className="unstyled-link">Other ways to  Help</Link>
                </p>
                <p>
                  <Link className="unstyled-link">Sponsorship</Link>
                </p>
              
                
              </ul>
            </div>
          </Col>

          <Col md={4}>
            <div className="footinput">
              <p className="text-white fs-4 ">
                Subscribe to get our latest news
              </p>
              <input
                className="rounded"
                type="text"
                placeholder="Enter Your Email *"
              />
              <button className="p-2 m-1 rounded">Subscribe</button>
            </div>

            <div className="footicons">
              <p className="footicons1"><FaFacebookF /></p>
              <p className="footicons1"><FaInstagram /></p>
              <p className="footicons1"><FaYoutube /></p>
              <p className="footicons1"><IoLogoTwitter /></p>
            </div>
          </Col>
        </Row>
        <div style={{height:'1px',width:'100%',backgroundColor:'rgb(229,222,217)', margin:'40px 0'}}></div>

        <div className="footicons2"><p><span>cmsmasters</span> ©2024 - All Rights Reserved - This is a sample website.</p></div>
      </Container>
    </div>
  );
};

export default Footer;
