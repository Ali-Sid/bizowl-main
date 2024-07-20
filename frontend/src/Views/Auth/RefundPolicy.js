import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import "../../Styles/AuthStyles/homepageStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import "../../Styles/Fixed/fixedDesign.scss";
import {
  BsArrowBarLeft,
  BsArrowBarRight,
  BsChatRight,
  BsChevronBarRight,
  BsChevronRight,
  BsFillStarFill,
  BsSearch,
} from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import { RxCaretLeft, RxCaretRight, RxPinRight } from "react-icons/rx";
import {
  AskBigCard,
  BlogsBigCard,
  BlogsSmallCard,
  ContactUsDesign,
  HowCard,
  HowCardCircle,
  HowCardRound,
  IndustriesBigCard,
  IndustriesSmallCard,
  OurServicesCard,
  SubHeader,
  TestimonialDesign,
  WhyBestCard,
  WhyUsCard,
} from "../../Components/Design/fixedDesigns";
import { useState } from "react";
import Faq from "react-faq-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TestimonialsSlide,
  WindowOpenLink,
} from "../../Components/Extra/extraFunction";
import { NavLink } from "react-router-dom";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Bizowl Refund Policy - Comprehensive Guide</title>
        <meta
          name="description"
          content="Learn about Bizowl's refund policy, eligibility criteria, refund process, and contact information. We ensure transparency and fairness for our digital services. Contact us for any refund inquiries."
        />
      </Helmet>
      <NavBar />
      <div className="homepageContainer">
        {SubHeader(
          "Refund and Cancellation Policy",
          "refundandCancellationPolicy",
          "home",
          "home"
        )}

        <div className="padding50 fontSize13 justifyText">
          At <span className="bold"> Bizzowl</span>, we prioritize customer
          satisfaction and strive to deliver high-quality <span style={{textDecoration: "underline", color: "blue"}}><a href="/">digital services</a></span>,
          including Digital Marketing, Web Development, Design, Advertising,
          Marketing, and Business Fundamental Services. <br /> Our refund policy
          outlines the conditions under which refunds are granted to ensure
          clarity and fairness for our customers.
          <br /> <br />
          <div className="title4">
            {" "}
            Eligibility for Refunds and Cancellation{" "}
          </div>
          Refunds are generally not available for our services due to their
          digital nature. However, customers may be eligible for a refund under
          the following conditions:
          <br />
          <br />
          <span className="bold"> Work Not Started: </span> If we have not yet
          started working on your request or order, you may request a refund.
          <br />
          <span className="bold">Missed Start Date: </span> If the work is not
          completed as per the promised starting date.
          <br />
          <br />
          <span className="title4">Timeframe for Refund Requests</span>{" "}
          <ul>
            <li>
              Refund requests must be made before we start working on your
              request or order.{" "}
            </li>
            <li>
              Requests made after work has commenced will not be eligible for a
              refund.
            </li>
          </ul>
          <br />
          <span className="title4">Refund Process</span>
          <br />
          To request a refund, please follow these steps:
          <br />
          <br />
          <span className="bold">Contact Us: </span>
          Email us at{" "}
          <span className="touchable colorPrimary">
            info@bizzowl.com
          </span> or{" "}
          <span className="touchable colorPrimary">contact@bizzowl.com</span> or
          call us at +91935465143.
          <br />
          <br />
          <span className="bold">Provide Details: </span> Include the email and
          phone number used when booking the services.
          <br />
          <span className="bold">Processing: </span> Refunds will be processed
          to the original payment source, with payment gateway charges deducted.
          <br />
          <br />
          <br />
          <div className="title4">Exceptions and Special Cases</div>
          <span className="bold">Digital Services: </span>
          As our services are digital, we generally do not offer exceptions.
          <br />
          <br />
          <div className="bold">Unsatisfactory Work: </div>
          We take unsatisfactory work very seriously. However, due to upfront
          payments to our partners, partial refunds are not available.
          <br />
          <br />
          <span className="title4"> Contact Information</span>
          <br /> For any inquiries or refund requests, please contact us:
          <br />
          <span className="bold">Email: </span> info@bizzowl.com or
          contact@bizzowl.com
          <br />
          <span className="bold"> Phone:</span> +91935465143
          <br />
          <br />
          <span className="title4"> Customer Support Hours: </span> <br />
          <br />
          <span className="bold"> Monday to Friday: </span> 10 AM to 8 PM
          <br />
          <span className="bold"> Weekends: </span> 10 AM to 6 PM
          <br />
          <br />
          <span className="title4"> Policy Updates </span> <br /> We reserve the
          right to update this refund policy at any time. Customers will be
          notified of any changes via email. <br />
          Thank you for choosing Bizowl. We are committed to providing you with
          the best possible service and addressing any concerns you may have.
          <br />
          <span
            onClick={() => {
              WindowOpenLink("mailto:contact@bizzowl.com", "_self");
            }}
            className="touchable colorPrimary"
          >
            {" "}
            contact@bizzowl.com
          </span>
          .
        </div>

        <div className="askUsAnythingSec">
          <AskBigCard />
        </div>

        <div className="contactUs">{ContactUsDesign()}</div>
      </div>
      <Footer />
    </>
  );
};
export default RefundPolicy;
