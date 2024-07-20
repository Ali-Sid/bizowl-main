import React, { useState } from "react";
// import NetlifyForm from "react-netlify-form";
import { Col, Row } from "react-bootstrap";
import "../../Styles/CompStyle/FooterStyle.scss";
import { FiSend } from "react-icons/fi";
import { MdWavingHand } from "react-icons/md";
import { MdMail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { WindowOpenLink } from "../Extra/extraFunction";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleSubmit = () => {
    // e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", ...formData }),
    }).catch((error) => console.error(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { email } = formData;

  return (
    <div className="footerContainer">
      <Row md={12} className="py-5">
        <Col md={6} className="footerSec1Col1">
          <div className="text2">Become Bizowl Insider</div>
          <div className="text1">
            Grow Your Business, Get Free Business Consultation.
          </div>
          <form name="newsletter" method="post" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="newsletter" />
            <div className="input-group mt-4 inputBoxStyle">
              <input
                type="email"
                className="inputStyle"
                placeholder="Your Email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <span>
                <button className="footerSendButtonStyle" type="submit">
                  <FiSend
                    className="sendButtonStyle"
                    size={20}
                    color="#d3d3d373"
                  />
                </button>
              </span>
            </div>
          </form>
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <img
            src="Images/footer/footerImg.png"
            alt="footer"
            style={{ width: "60%" }}
          />
        </Col>
      </Row>
      <Row md={12}>
        <Col md={3}>
          <div className="d-flex justify-content-start pointer">
            <img
              src="/Images/logos/logo-of-BIZOWL--Business-Services--White.png"
              alt="BIZOWL"
              style={{ width: "200px" }}
            />
          </div>
          <div className="footerSec2Text1">
            Bizowl is an online platform designed exclusively for business
            owners and startups. Bizowl offers essential services, tools,
            resources, and expert guidance to start and grow a business, all
            under one roof.
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={2}>
          <div className="footerSec2Text1 pointer">
            <NavLink className="navLinks textCapitalize" to="/aboutUs">
              About Us
            </NavLink>
          </div>
          <div className="footerSec2Text1 pointer">
            <NavLink className="navLinks textCapitalize" to="/">
              Services
            </NavLink>
          </div>
          <div className="footerSec2Text1 pointer">
            <NavLink className="navLinks textCapitalize" to="/blogs">
              Blogs
            </NavLink>
          </div>
        </Col>
        <Col md={3}>
          <div className="footerSec2Text1 pointer">
            <NavLink
              className="navLinks textCapitalize"
              to="/termsAndCondition"
            >
              Terms and Conditions
            </NavLink>
          </div>
          <div className="footerSec2Text1 pointer">
            <NavLink className="navLinks textCapitalize" to="/privacyPolicy">
              Privacy Policy
            </NavLink>
          </div>
          <div className="footerSec2Text1 pointer">
            <NavLink className="navLinks textCapitalize" to="/refund-and-cancellation-policy">
              Refund and Cancellation Policy
            </NavLink>
          </div>
          <div className="footerSec2Text1 pointer">
            <NavLink className="navLinks textCapitalize" to="https://bizowl-partner.web.app/login">
              Partner
            </NavLink>
          </div>
        </Col>
        <Col md={3}>
          <div className="footerSec2Text1 pointer">Let's Chat!</div>
          <div className="footerSec2Text2 pointer">
            Say <MdWavingHand color="gold" /> at
            <span
              onClick={() => {
                WindowOpenLink("mailto:contact@bizzowl.com", "_self");
              }}
              className="contactDetailsItemBody touchable"
            >
              {" "}
              contact@bizzowl.com
            </span>
          </div>
          <div className="footerSec2SocialIcons">
            <div
              onClick={() => {
                WindowOpenLink("https://www.facebook.com/bizowl", "_target");
              }}
              className="socialIconView pointer"
            >
              <FaFacebookF color="#fafafa" />
            </div>
            <div
              onClick={() => {
                WindowOpenLink(
                  "https://www.instagram.com/bizowlofficial/",
                  "_target"
                );
              }}
              className="socialIconView pointer"
            >
              <FaInstagram color="#fafafa" />
            </div>
            <div
              onClick={() => {
                WindowOpenLink(
                  "https://www.linkedin.com/company/bizowl/",
                  "_target"
                );
              }}
              className="socialIconView pointer"
            >
              <FaLinkedin color="#fafafa" />
            </div>
            <div
              onClick={() => {
                WindowOpenLink("https://www.youtube.com/@bizowl", "_target");
              }}
              className="socialIconView pointer"
            >
              <FaYoutube color="#fafafa" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Col>
        <Col md={12}>
          <div className="colorWhite marginTop30 padding10">
            &copy; Copyright White Sense Pvt. Ltd. 2023
          </div>
        </Col>
      </Row>
      {/* <div className='existTag' /> */}
    </div>
  );
};

export default Footer;
