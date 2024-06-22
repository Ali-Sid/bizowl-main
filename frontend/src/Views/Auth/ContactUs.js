import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import "../../Styles/AuthStyles/homepageStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import "../../Styles/Fixed/fixedDesign.scss";
import { BsArrowBarLeft, BsArrowBarRight, BsChatRight, BsChevronBarRight, BsChevronRight, BsFillStarFill, BsSearch } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';
import { RxCaretLeft, RxCaretRight, RxPinRight } from 'react-icons/rx';
import { AskBigCard, BlogsBigCard, BlogsBigCard2, BlogsSmallCard, ContactUsDesign, HowCard, HowCardCircle, HowCardRound, IndustriesBigCard, IndustriesSmallCard, OurServicesCard, SubHeader, TestimonialDesign, WhyBestCard, WhyUsCard } from '../../Components/Design/fixedDesigns';
import { useState } from 'react';
import Faq from "react-faq-component";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsSlide } from '../../Components/Extra/extraFunction';
import { NavLink } from 'react-router-dom';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';

const ContactUs = () => {
  
  return (
    <>
      <NavBar/>
        <div className='homepageContainer'>

          {SubHeader('Contact Us', 'contactUs', 'home','home')}
                   
          <div className='contactUs'>
            <div className='contactUsHead boxShadow'>
              {ContactUsDesign()}
            </div>
          </div>

          <div className='askUsAnythingSec'>
            <AskBigCard />
          </div>

        </div>
      <Footer/>
    </>
  )
}
export default ContactUs;