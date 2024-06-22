import React from "react";
import "../../Styles/AuthStyles/homepageStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import "../../Styles/Fixed/fixedDesign.scss";
import { AskBigCard } from "../../Components/Design/fixedDesigns";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="homepageContainer">
        <div style={{ padding: "50px" }}>
          <h1>Oops! You've Discovered a Black Hole (404)</h1>
          <p style={{paddingTop: "20px"}}>
            The page you're looking for doesn't seem to exist.
          </p>
          <p>
            The link you followed may be broken, or the page might have been
            removed.
          </p>
          <p>Go Back To <span> <Link to='/'>Homepage</Link></span></p>
          <p>Contact our support team at support@bizzowl.com for assistance.</p>
        </div>
        {/* <div className='askUsAnythingSec'>
            <AskBigCard />
          </div> */}
      </div>
      <Footer />
    </>
  );
};
export default NotFound;
