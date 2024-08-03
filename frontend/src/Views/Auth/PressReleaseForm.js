import React, { useState } from "react";
import logo from "./assets/logo.svg";
import image from "./assets/image.svg";
import talkExpert from "./assets/talkToExpert.svg";
import percentage from "./assets/percentage.svg";
import { Helmet } from "react-helmet";
import "../../Styles/pr.css"
import { useNavigate } from "react-router-dom";

const FirstForm = () => {
  const [currStep, setCurrStep] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/pr/service')
  }

  const handleNext = () => {
    setCurrStep(2);
  };
  return (
    <>
      <Helmet>
        <title>
          Press Release Distribution | Custom PR Plans for Your Needs
        </title>
        <meta
          name="description"
          content="Get your news noticed with our custom press release distribution service. Submit your details and view tailored PR plans designed to maximize your media coverage."
        />
        <meta
          name="keywords"
          content="press release distribution, custom PR plans, media coverage, PR distribution service"
        />
        <meta name="author" content="Bizowl" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://bizzowl.com/services/press-release-distribution"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Press Release Distribution",
            provider: {
              "@type": "Organization",
              name: "Bizowl",
              url: "https://www.bizzowl.com",
              logo: "https://www.bizzowl.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-935465143",
                contactType: "Customer Service",
                areaServed: "Global",
                availableLanguage: "English",
              },
            },
            description:
              "Get your news noticed with our custom press release distribution service. Submit your details and view tailored PR plans designed to maximize your media coverage.",
            areaServed: {
              "@type": "Place",
              name: "Global",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.bizzowl.com/services/press-release-distribution",
              priceCurrency: "INR",
              price: "Variable",
              eligibleRegion: {
                "@type": "Place",
                name: "Global",
              },
              availability: "https://schema.org/InStock",
              validFrom: "2024-07-24",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.6",
              reviewCount: "17",
            },
          })}
        </script>
      </Helmet>
      <div className="main">
        <div className="left-side">
          <br />
          <br />
          <div className="logo">
            <img src={logo} alt="logo" />
            <p>
              <img src={talkExpert} alt="" />
              <p>Talk to an Expert ( +919354651433)</p>
            </p>
          </div>
          <br />
          <p>Public Relations</p>
          <p className="text-[25px]">
            Get Your Press Release Perfected with{" "}
            <span className="text-[#1C6ED0] ">Best Deals and Expertise</span>
          </p>
          <ul className="flex list-disc gap-4 sm:gap-6 text-[#1C6ED0] text-[12px] justify-center">
            <li>Product Lauch</li>
            <li>Events</li>
            <li>Fundraise Announcement</li>
          </ul>
          <br />
          <img src={image} alt="" />
        </div>
        <div className="md:w-[50%] md:absolute left-[50%]">
          <br />
          <br />
          <p className="text-[#1B2559] hidden  text-[12px] font-bold md:flex items-center justify-end pr-2">
            <img src={talkExpert} alt="" />
            <p>Talk to an Expert ( +919354651433)</p>
          </p>

          <div className="flex items-end justify-center text-[10px] mt-3">
            <br />
            <div className="flex flex-col items-center justify-center">
              <p>Press Release</p>
              <svg
                width="15"
                height="15"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="12.5" r="12.5" fill="#1C6ED0" />
              </svg>
              <dot />
            </div>
            <div className="mt-3">
              <svg
                width="200"
                height="1"
                viewBox="0 0 200 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="0.5"
                  x2="200"
                  y2="0.5"
                  stroke="#455A64"
                  stroke-opacity="0.75"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Contact Details</p>
              <svg
                width="15"
                height="15"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="12.5"
                  fill={currStep === 1 ? "#455A64" : "#1C6ED0"}
                />
              </svg>
            </div>
          </div>

          <br />
          <div className="flex flex-col justify-center items-center w-[95%] md:w-[85%] lg:w-[65%] m-auto rounded-b-3xl form">
            <p className="flex items-center bg-gradient-to-r from-[#1C6ED0] to-[#0E386A] text-white w-full justify-center rounded-t-3xl p-1 gap-2">
              <img src={percentage} alt="" />
              Compare and Get the Besets PR Deals
            </p>
            <p className="font-bold text-[18px] lg:text-[24px] my-2">
              {currStep == 1 ? (
                <>
                  Share Your Story{" "}
                  <span className="text-[#1C6ED0]">with the World</span>
                </>
              ) : (
                <>
                  <p>Enter Your Contact Details</p>
                </>
              )}
            </p>
            <form action="" className="mainForm" onSubmit={handleSubmit}>
              {currStep === 1 ? (
                <>
                  <label htmlFor="pressReleaseReady">
                    Do you have the press release ready?
                    <br />
                    <select
                      id="pressReleaseReady"
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>
                  <label htmlFor="pressReleasePurpose">
                    Purpose of Press Release
                    <br />
                    <select
                      id="pressReleasePurpose"
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                    >
                      <option value="productLaunch">Product Launch</option>
                      <option value="eventAnnouncement">
                        Event Announcement
                      </option>
                      <option value="companyNews">Company News</option>
                      <option value="partnershipAnnouncement">
                        Partnership Announcement
                      </option>
                      <option value="awardRecognition">
                        Award Recognition
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label htmlFor="budget">
                    Budget
                    <br />
                    <input
                      type="text"
                      id="budget"
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                    />
                  </label>
                  <label htmlFor="targetAudience">
                    Target Audience
                    <br />
                    <select
                      id="targetAudience"
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                    >
                      <option value="generalPublic">General Public</option>
                      <option value="healthcareProfessionals">
                        Healthcare Professionals
                      </option>
                    </select>
                  </label>
                  <label htmlFor="geographicalTarget">
                    Geographical Target
                    <br />
                    <select
                      id="geographicalTarget"
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                    >
                      <option value="national">National</option>
                      <option value="international">International</option>
                      <option value="local">Local</option>
                    </select>
                  </label>
                  <label htmlFor="language">
                    Language
                    <br />
                    <select
                      id="language"
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                    >
                      <option value="hindi">Hindi</option>
                      <option value="english">English</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label htmlFor="industry">
                    Industry
                    <br />
                    <select
                      id="industry"
                      className="bg-[#18141f05] w-[300px]  h-[30px]  text-[grey]"
                    >
                      <option value="healthcare">Healthcare</option>
                      <option value="it">IT</option>
                      <option value="defense">Defense</option>
                    </select>
                  </label>
                  <label htmlFor="deliveryTime">
                    Delivery Time
                    <br />
                    <select
                      id="deliveryTime"
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                    >
                      <option value="sameDay">Same day</option>
                      <option value="1Day">1 day</option>
                      <option value="2Day">2 days</option>
                      <option value="3Day">3 days</option>
                      <option value="4Day">4 days</option>
                      <option value="4PlusDays">4+ days</option>
                    </select>
                  </label>
                  <button
                    className="flex bg-[#1C6ED0] w-fit text-white px-7 py-1 rounded-sm"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <label>
                    First Name
                    <br />
                    <input
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                      placeholder="Enter your first name here"
                    />
                  </label>
                  <label>
                    Last Name
                    <br />
                    <input
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                      placeholder="Enter your last name here"
                    />
                  </label>
                  <label>
                    Email
                    <br />
                    <input
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                      placeholder="Enter your email here"
                    />
                  </label>
                  <label>
                    Phone Number
                    <br />
                    <input
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                      placeholder="Enter your phone number here"
                    />
                  </label>
                  <label>
                    Company Name
                    <br />
                    <input
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                      placeholder="Enter your company name here"
                    />
                  </label>
                  <button className="flex bg-[#1C6ED0] w-fit text-white px-7 py-1 rounded-sm">
                    View plans
                  </button>
                  <br />
                </>
              )}
            </form>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default FirstForm;