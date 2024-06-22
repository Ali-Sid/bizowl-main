import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "../../Styles/AuthStyles/homepageStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import "../../Styles/Fixed/fixedDesign.scss";
// import { BsArrowBarLeft, BsArrowBarRight, BsChatRight, BsChevronBarRight, BsChevronRight, BsFillStarFill, BsSearch } from 'react-icons/bs';
// import { ImQuotesLeft } from 'react-icons/im';
// import { RxCaretLeft, RxCaretRight, RxPinRight } from 'react-icons/rx';
import {
  // AskBigCard,
  // BlogsBigCard,
  BlogsBigCard2,
  // BlogsSmallCard,
  ContactUsDesign,
  // HowCard,
  // HowCardCircle,
  // HowCardRound,
  // IndustriesBigCard,
  // IndustriesSmallCard,
  // OurServicesCard,
  SubHeader,
  // TestimonialDesign,
  // WhyBestCard,
  // WhyUsCard,
} from "../../Components/Design/fixedDesigns";
// import { useState } from 'react';
// import Faq from "react-faq-component";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { TestimonialsSlide } from '../../Components/Extra/extraFunction';
// import { NavLink } from 'react-router-dom';
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      icon: "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697129744/Bizowl/blog1_mjudxr.jpg",
      jobTitle: "Business Service",
      tag: "business-service",
      urlTitle: "the-importance-of-an-end-to-end-business-service-aggregating-platform",
      title:
        "The Importance of an End-to-End Business Service Aggregating Platform",
      description:
        "In today's fast-paced business world, small business owners and startup entrepreneurs face numerous challenges...",
      date: "12-Oct-2023",
    },
    // Add more blog posts here
  ];

  return (
    <>
      <NavBar />
      <div className="homepageContainer">
        {SubHeader("Blogs", "blogs", "home", "home")}

        <div className="blogsSec">
          <div className="BigTitleContainer">
            <div className="BigTitleText">
              <span className="BigTitleHighlightedText">Our </span>Latest Blogs
            </div>
            <div className="BigTitleContainerDecoration"></div>
          </div>
          <div className="blogsMenu fullHeight">
            <div className="industriesMenuBody fullWidth">
              <Row md={12}>
                {blogPosts.map((post) => (
                  <Col key={post.id} md={6} className="marginTop20">
                    <Link to={`/blogs/${post.tag}/${post.urlTitle}`}>
                      {" "}
                      {/* Use Link component for each blog post */}
                      <BlogsBigCard2
                        icon={post.icon}
                        jobTitle={post.jobTitle}
                        title={post.title}
                        description={post.description}
                        date={post.date}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>

        <div className="contactUs">{ContactUsDesign()}</div>
      </div>
      <Footer />
    </>
  );
};
export default Blogs;
