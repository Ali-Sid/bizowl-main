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
    {
      id: 2,
      icon: "https://res.cloudinary.com/dr1pmtefx/image/upload/v1721878655/bizowl-blog-2_di2op8.png",
      jobTitle: "Public Relations",
      tag: "pr",
      urlTitle: "21-benefits-of-press-release-distribution",
      title:
        "21 Benefits of Press Release Distribution: Elevate Your Brand's Visibility and Credibility",
      description:
        "Discover 21 powerful benefits of press release distribution that can elevate your brand's visibility and credibility. Learn how press releases can boost SEO, build trust, and drive traffic.",
      date: "24-Jul-2024",
    },
    {
      id: 3,
      icon: "https://res.cloudinary.com/dr1pmtefx/image/upload/v1723669728/bizowl-blog-3_vwmmib.png",
      jobTitle: "Public Relations",
      tag: "pr",
      urlTitle: "best-press-release-distribution-services",
      title:
        "Finding the Best Press Release Distribution Services: A Comprehensive Guide",
      description:
        "Discover the best press release distribution services to boost your media coverage and online presence. Learn key factors to consider and how Bizowl simplifies the process.",
      date: "15-Aug-2024",
    },
    // Add more blog posts here
  ];

  return (
    <>
      <NavBar />
      <div className="homepageContainer">
        {SubHeader("Blogs", "resources/blogs", "home", "")}

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
                    <Link to={`/resources/blogs/${post.tag}/${post.urlTitle}`}>
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
