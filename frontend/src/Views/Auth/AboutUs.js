import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import "../../Styles/AuthStyles/homepageStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import "../../Styles/Fixed/fixedDesign.scss";
import { BsArrowBarLeft, BsArrowBarRight, BsChatRight, BsChevronBarRight, BsChevronRight, BsFillStarFill, BsSearch } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';
import { RxCaretLeft, RxCaretRight, RxPinRight } from 'react-icons/rx';
import { AskBigCard, BlogsBigCard, BlogsSmallCard, ContactUsDesign, HowCard, HowCardCircle, HowCardRound, IndustriesBigCard, IndustriesSmallCard, OurServicesCard, SubHeader, TestimonialDesign, WhyBestCard, WhyUsCard } from '../../Components/Design/fixedDesigns';
import { useState } from 'react';
import Faq from "react-faq-component";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsSlide } from '../../Components/Extra/extraFunction';
import { NavLink } from 'react-router-dom';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {

  return (
    <>
      <NavBar/>
        <div className='homepageContainer'>

          {SubHeader('About us', 'aboutUs', 'home','home')}

          <div className='marginTop50'>
            <Row md={12} className='aboutUsHead'>
              <Col md={6} className='col1Style'>
                <div className='title2'> Overview <span className='heighlighted'> BIZOWL</span></div>
                <div className='description justifyText colorBlack'>
                  Bizowl is an aggregator and B2B service marketplace. a platform where users can visit to search for any digital business solution they need for their businesses. On our website, users may compare prices, features, and other aspects to determine which service provider best suits their needs. A to Z services are provided by Bizowl under one roof. In addition, we also provide free business consultation.
                  <br/><br/>
                  We also provide our users the option to tell us what they want as a result and their budget, and we will do all the hard work on your behalf if they don't have the time or don't want the inconvenience of having to keep an eye out for this.
                  <br/><br/>
                  User on our platform can avail all business services such as, web development, Digital marketing, advertising, all designing services, media and content productions and other required services. 
                </div>          
              </Col>
              <Col md={6} className='col2Style'>
                <img src="Images/aboutUs/aboutUs.png" style={{ height: '100%', width: '80%' }} alt="" />
              </Col>
            </Row>
          </div>


          <div className='howSec'>
            <Row className='justifySection' xxl={12} xl={12} lg={12} sm={12} xs={12}>
              {/* <div className='BigSubTitleContainer'>
                <div className='BigSubTitleText'>Advantages</div>
              </div> */}
              <div className='BigTitleContainer'>
                <div className='BigTitleText'>How Does It Work</div>
                <div className='BigTitleContainerDecoration'></div>
              </div>

              <div className='marginTop50'/>

              <HowCardCircle icon="Images/aboutUs/aboutUs1.png" title="Meet Bittoo, Who is Hardworking & Ambitious guy. ." count="01" extra={false} line={"40%"} direction={"down"} isDownLine={false} action={() => { }} />
              <HowCardCircle icon="Images/aboutUs/aboutUs2.png" title="Bittoo has an idea but doesn’t have resource to start or grow." count="02" extra={true} line={"30%"} direction={"up"} isDownLine={true} action={() => { }} />
              <HowCardCircle icon="Images/aboutUs/aboutUs3.png" title="Bittoo have bigger plans but unable to find right service partner." count="03" extra={false} line={"30%"} direction={"down"} isDownLine={true} action={() => { }} />
              <HowCardCircle icon="Images/aboutUs/aboutUs4.png" title="He doesn’t have much time and tired of going places to places." count="04" extra={true} line={"30%"} direction={"up"} isDownLine={true} action={() => { }} />
              <HowCardCircle icon="Images/aboutUs/aboutUs5.png" title="Bizowl is the perfect partner for that, Bittoo got everything in one place." isLast={true} count="05" extra={false} line={"30%"} direction={"none"} isDownLine={true} action={() => { }} />
              
              <div className='marginTop50'/>

              {/* <HowCard icon="Images/homepage/how1.png" title="Explain Your " title2="Project requirement" extra={false} line={"40%"} direction={"down"} isDownLine={false} action={() => { }} />
              <HowCard icon="Images/homepage/how2.png" title="Our executive will get in touch and " title2="will understand your requirement." extra={true} line={"30%"} direction={"up"} isDownLine={true} action={() => { }} />
              <HowCard icon="Images/homepage/how3.png" title="Find & finalize the " title2="perfect vendor /Partner." extra={false} line={"60%"} direction={"down"} isDownLine={false} action={() => { }} />
              <HowCard icon="Images/homepage/how4.png" title="Sign Agreement " title2="Project requirement" extra={true} line={"30%"} direction={"up"} isDownLine={true} action={() => { }} />
              <HowCard icon="Images/homepage/how5.png" title="Upfront payment & " title2="Work Start" extra={false} line={"60%"} direction={"down"} isDownLine={false} action={() => { }} />
              <HowCard icon="Images/homepage/how6.png" title="Project Delivery " title2="on time" extra={true} line={""} direction={"no"} isDownLine={false} action={() => { }} /> */}

              <HowCard icon="Images/homepage/how1.png" title="Fill Up The Form " title2="Submit your project requirement" extra={false} line={"40%"} direction={"down"} isDownLine={false} action={() => { }} />
              <HowCard icon="Images/homepage/how2.png" title="Compare Services, Quotations " title2="Final prices will be updated within 1-2 hr" extra={true} line={"30%"} direction={"up"} isDownLine={true} action={() => { }} />
              <HowCard icon="Images/homepage/how3.png" title="Finalize Partner " title2="Communicate and finalize the partner" extra={false} line={"60%"} direction={"down"} isDownLine={false} action={() => { }} />
              <HowCard icon="Images/homepage/how4.png" title="Sign Agreement To " title2="Proceed Further" extra={true} line={"30%"} direction={"up"} isDownLine={true} action={() => { }} />
              <HowCard icon="Images/homepage/how5.png" title="Upfront payment & " title2="Work Start" extra={false} line={"60%"} direction={"down"} isDownLine={false} action={() => { }} />
              <HowCard icon="Images/homepage/how6.png" title="Project Delivery " title2="on time" extra={true} line={""} direction={"no"} isDownLine={false} action={() => { }} />

            </Row>
          </div>

          <div className='askUsAnythingSec'>
            <AskBigCard />
          </div>
          
          <div className='contactUs'>
            {ContactUsDesign()}
          </div>


        </div>
      <Footer/>
    </>
  )
}
export default AboutUs;