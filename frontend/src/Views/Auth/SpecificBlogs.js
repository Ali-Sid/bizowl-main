import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../Styles/AuthStyles/homepageStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import "../../Styles/Fixed/fixedDesign.scss";
// import {
//   BsArrowBarLeft,
//   BsArrowBarRight,
//   BsChatRight,
//   BsChevronBarRight,
//   BsChevronRight,
//   BsFillStarFill,
//   BsSearch,
// } from "react-icons/bs";
// import { ImQuotesLeft } from "react-icons/im";
// import { RxCaretLeft, RxCaretRight, RxPinRight } from "react-icons/rx";
import {
  // AskBigCard,
  // BlogsBigCard,
  // BlogsBigCard2,
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
// import { useState } from "react";
// import Faq from "react-faq-component";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ellipsisText,
  // TestimonialsSlide,
} from "../../Components/Extra/extraFunction";
// import { NavLink } from "react-router-dom";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";

const SpecificBlogs = () => {
  return (
    <>
      <NavBar />
      <div className="homepageContainer">
        {SubHeader("Blogs", "blogs", "home", "home")}

        <div className="blogsSec">
          <div className="blogsMenu fullHeight">
            <div className="industriesMenuBody fullWidth">
              <Row md={12}>
                <Col md={12} className="marginTop20">
                  <div className="blogsBigCard2 elevation overflowHidden">
                    <div className="blogsBigCardLogo padding10">
                      <img
                        className="blogsBigCardImg fullHeight"
                        style={{ maxHeight: "500px" }}
                        alt="The Importance of an End-to-End Business Service Aggregating Platform"
                        src={
                          "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697129744/Bizowl/blog1_mjudxr.jpg"
                        }
                      />
                    </div>
                    <div className="blogsBigCardDescription padding10">
                      <div className="flex">
                        <div className="blogsDate">{"Business Service"}</div>{" "}
                        &nbsp;&nbsp; {"12-Oct-2023"}
                      </div>
                      <div className="blogsBigCardTitle marginTop10">
                        {" "}
                        {ellipsisText(
                          "The Importance of an End-to-End Business Service Aggregating Platform",
                          2
                        )}{" "}
                      </div>
                      <div className="marginTop10">
                        In today's fast-paced business world, small business
                        owners and startup entrepreneurs face numerous
                        challenges. The demands can be overwhelming, from
                        validating an idea to start a business to launching and
                        scaling to the next level. This is where the value of an
                        end-to-end business service platform becomes clear. In
                        this post, we'll take a look at why having access to a
                        single platform for all of your fundamental digital
                        business services can be a game changer for your
                        company. What exactly is an end-to-end business service
                        platform? This would teach you everything.
                      </div>
                      <br />
                      <div className="blogsBigCardTitle marginTop10">
                        {" "}
                        {ellipsisText(
                          "Streamlining Operations with All-in-One Solutions",
                          2
                        )}{" "}
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          className="blogsBigCardImg fullHeight"
                          style={{ maxHeight: "500px" }}
                          alt="The Importance of an End-to-End Business Service Aggregating Platform"
                          src={
                            "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697130733/Bizowl/unnamed_kohjtj.jpg"
                          }
                        />
                      </div>
                      <div className="marginTop10">
                        When we run a business, we have to deal with a lot of
                        tasks, and sometimes it becomes quite overwhelming to
                        deal with all this. If someone is trying to launch a
                        business or is simply trying to run it, They will have
                        to deal with a number of usual tasks. They need to find
                        reliable service partners for digital marketing, design,
                        web development, advertising, and fundamental services
                        like market research and business model development.
                        Imagine you have to find partners to do such a job. It
                        is a lot of work to find a reliable service partner.
                        This is where the need of one end to end place comes in.
                        A platform can save a lot of time and effort. You can
                        focus on your business rather than just finding service
                        partners.
                      </div>
                      <div className="blogsBigCardTitle marginTop10">
                        {" "}
                        {ellipsisText(
                          "Platform as a Tool for Better Productivity",
                          2
                        )}{" "}
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          className="blogsBigCardImg fullHeight"
                          style={{ maxHeight: "500px" }}
                          alt="The Importance of an End-to-End Business Service Aggregating Platform"
                          src={
                            "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697131773/Bizowl/unnamed_rrjpdf.jpg"
                          }
                        />
                      </div>
                      <div className="marginTop10">
                        Going out and finding people to do your job is not an
                        easy task. It takes time and effort. You are also not
                        sure who to trust or, if you are trusting someone,
                        whether you will get quality work or not. This is where
                        the business service aggregating platform acts as a tool
                        for you. You have access of all necessary services to
                        grow with one click. You can compare prices and features
                        and customize things according to you. In aggregating
                        platformss, platforms usually keeps an eye on quality of
                        work for you, leaving you out of worrying whether you
                        are getting quality work or not. This saves a lot of
                        your time and effort.
                      </div>
                      <div className="blogsBigCardTitle marginTop10">
                        {" "}
                        {ellipsisText(
                          "Smart Comparison of Service Providers:",
                          2
                        )}{" "}
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          className="blogsBigCardImg fullHeight"
                          style={{ maxHeight: "500px" }}
                          alt="The Importance of an End-to-End Business Service Aggregating Platform"
                          src={
                            "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697132042/Bizowl/unnamed_v8ycmj.jpg"
                          }
                        />
                      </div>
                      <div className="marginTop10">
                        One of the standout features of a business service
                        platform is the ability to make informed decisions
                        through smart comparisons. You can easily compare
                        service providers, their offerings, and pricing. This
                        empowers you to choose the best options for your
                        specific needs, ensuring that you get the most value for
                        your investment. Comparing services as per the price,
                        features of the service offering, and portfolio of
                        service providers gives you the freedom to choose the
                        best for your needs.
                      </div>
                      <div className="blogsBigCardTitle marginTop10">
                        {" "}
                        {ellipsisText("Fueling Business Growth:", 2)}{" "}
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          className="blogsBigCardImg fullHeight"
                          style={{ maxHeight: "500px" }}
                          alt="The Importance of an End-to-End Business Service Aggregating Platform"
                          src={
                            "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697133448/Bizowl/unnamed_rvvecm.jpg"
                          }
                        />
                      </div>
                      <div className="marginTop10">
                        An end-to-end platform is not just about maintaining the
                        status quo; it's also a catalyst for growth. By
                        leveraging the right digital services, your business can
                        expand its reach, attract new customers, and ultimately
                        thrive in a competitive market.
                      </div>
                      <div
                        className="blogsBigCardTitle marginTop10"
                      >
                        {" "}
                        {ellipsisText(
                          "A great example of aggregating platform :",
                          2
                        )}{" "}
                      </div>
                      <br />
                      <div className="marginTop10">
                        You must have heard about policybazaar.com. It is a web
                        aggregating platform for insurance. The user can visit
                        and compare the best options they have from all the
                        companies available in the market. The user here can
                        save a lot of time; just imagine when policybazaar.com
                        was not available in the market; people used to visit
                        agents and reach out to the company websites. It was so
                        hard to communicate properly and know the terms and
                        conditions of the policy. For people who were planning
                        to buy before the web aggregating platform came, it was
                        so hard for them to compare each company's price,
                        features, and policy and decide who to choose. This was
                        a major problem that was identified by policybazaar.com,
                        and they solved it.
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          className="blogsBigCardImg fullHeight"
                          style={{ maxHeight: "500px" }}
                          alt="The Importance of an End-to-End Business Service Aggregating Platform"
                          src={
                            "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697136201/Bizowl/unnamed_hqyc2y.jpg"
                          }
                        />
                      </div>
                      <div className="marginTop10">
                        Similarly, business service aggregating platforms will
                        work for you. You get access to all services in one
                        place, and you get to choose which one is best for you
                        within your budget.
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          className="blogsBigCardImg fullHeight"
                          style={{ maxHeight: "500px" }}
                          alt="The Importance of an End-to-End Business Service Aggregating Platform"
                          src={
                            "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697137044/Bizowl/unnamed_onjke9.jpg"
                          }
                        />
                      </div>
                      <div className="marginTop10">
                        In an era where efficiency, productivity, and smart
                        decision-making are crucial for small business success,
                        an end-to-end business service platform is a valuable
                        asset. It provides you with the tools, support, and
                        resources needed to navigate the complex landscape of
                        the business world. By centralizing essential services,
                        offering efficiency tools, enabling smart comparisons,
                        and ensuring data protection, these platforms are a
                        lifeline for small businesses and startups. Embrace this
                        solution, and watch your business flourish.
                      </div>
                      <br />
                    </div>
                    <br />
                  </div>
                </Col>
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
export default SpecificBlogs;
