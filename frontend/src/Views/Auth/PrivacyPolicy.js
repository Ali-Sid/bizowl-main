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
import { TestimonialsSlide, WindowOpenLink } from '../../Components/Extra/extraFunction';
import { NavLink } from 'react-router-dom';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';

const PrivacyPolicy = () => {

  return (
    <>
      <NavBar />
      <div className='homepageContainer'>

        {SubHeader('Privacy Policy', 'privacyPolicy', 'home', 'home')}

        <div className='padding50 fontSize13 justifyText textCapitalize'>

          At <span className='bold'> Bizzowl.com</span>, we are committed to protecting the privacy and personal information of our users. This privacy policy outlines the types of personal information we may collect, how we use and protect that information, and your rights as a user of our services.
          <br /> <br />

          <div className='title4'> Information We Collect </div>
          When you use Bizzowl.com, we may collect the following types of personal information:
          <br />
          <span className='bold'> Contact Information:</span> Your name, email address, phone number, and any other contact details you provide us with.
          <br />
          <span className='bold'>User Data:</span> Information about how you use Bizzowl.com, such as your browsing history and search queries.
          <br />
          <span className='bold'>Payment Information:</span> Credit card numbers, billing addresses, and other payment details if you choose to make a purchase through our platform.
          <br />
          <span className='bold'>Cookies and Other Tracking Technologies: </span>Bizzowl.com uses cookies and other tracking technologies to collect information about your usage of the platform and to personalize your experience.
          <br />
          <br />
          <div className='title4'>
            How We Use Your Information
          </div>
          We use the information we collect to:
          <br />
          Provide and improve our services: We use your information to provide you with the best possible experience on Bizzowl.com and to improve our platform.
          <br />
          <span className='bold'>Communicate with you:</span> We may use your contact information to send you updates about Bizzowl.com, respond to your inquiries or provide customer support.
          <br />
          <span className='bold'>Process payments:</span> If you choose to make a purchase through our platform, we will use your payment information to process the transaction.
          <br />
          Comply with legal requirements: We may be required to share your information with law enforcement or government agencies if we are legally obliged to do so.
          <br />
          <br />
          <div className='title4'>How We Protect Your Information</div>
          We take the security of your personal information very seriously. We use a range of measures to protect your information from unauthorized access, including encryption and access controls. We also limit the number of people who have access to your information and provide training to our staff on data protection best practices.
          <br />
          <br />
          <div className='title4'>Your Rights as a User</div>
          As a user of Bizzowl.com, you have certain rights with regard to your personal information. These include:
          <br />
          <span className='bold'> Access:</span> You have the right to request a copy of the personal information we hold about you.
          <br />
          <span className='bold'> Rectification:</span> You have the right to ask us to correct any inaccurate or incomplete personal information.
          <br />
          <span className='bold'> Erasure:</span> You have the right to request that we delete your personal information, subject to certain exceptions.
          <br />
          You can always choose not to provide certain information to us, but this may limit your ability to use certain features of our website or services. You can also opt-out of receiving promotional emails from us by following the instructions in those emails.
          <br />
          Security We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
          <br />
          Changes to This Privacy Policy We may update this privacy policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective.
          <br />
          Contact Us If you have any questions or concerns about our privacy policy, please contact us at <span onClick={() => { WindowOpenLink('mailto:contact@bizzowl.com', '_self') }} className="touchable colorPrimary"> contact@bizzowl.com</span>.

        </div>

        <div className='askUsAnythingSec'>
          <AskBigCard />
        </div>

        <div className='contactUs'>
          {ContactUsDesign()}
        </div>


      </div>
      <Footer />
    </>
  )
}
export default PrivacyPolicy;