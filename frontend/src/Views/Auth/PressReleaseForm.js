import React, { useState } from "react";
import logo from "./assets/logo.svg";
import image from "./assets/image.svg";
import talkExpert from "./assets/talkToExpert.svg";
import percentage from "./assets/percentage.svg";
import { Helmet } from "react-helmet";
import "../../Styles/pr.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import useFormData from "../Services/util/useFormData";
import { addDoc, collection } from "firebase/firestore";
import { primaryDB } from "../../config/firebase";

const industries = [
  "Technology",
  "E-commerce",
  "Fintech",
  "IOT",
  "Artificial Intelligence",
  "Food and Beverage",
  "Health & Wellness",
  "Media & Entertainment",
  "Travel & Hospitality",
  "Education",
  "Real Estate",
  "Energy",
  "Agriculture",
  "B2B SaaS",
  "BioTech",
  "Space Tech",
  "Cyber Security",
  "Legal Tech",
  "Fashion & Apparel",
  "Beauty & Personal Care",
  "Automotive",
  "Retail",
  "Cleantech",
  "Deeptech",
  "Robotics",
  "Power",
  "VR/AR",
  "Other",
];

const FirstForm = () => {
  const { updateFormData } = useFormData();
  const [formState, setFormState] = useState({
    pressReleaseReady: "Yes",
    pressReleasePurpose: "Product Launch",
    targetAudience: "General Public",
    geoTarget: "National",
    language: "Hindi",
    industry: "Healthcare",
    deliveryTime: "Same day",
    firstName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    priceRange: 0
  });
  const [currStep, setCurrStep] = useState(1);

  const navigate = useNavigate();

  const updateFormState = (field, value) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormState(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(primaryDB, "prUsers"), formState);
      console.log("Document written with ID: ", docRef.id);
      console.log(formState, "formState data...");
      updateFormData(formState);
      navigate("/pr/service");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  const handleNext = () => {
    setCurrStep(2);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTab = useMediaQuery("(min-width: 769px) and (max-width:1476px) ");
  const labelStyle = {
    width: !isMobile ? "400px" : "", // Set width to 400px if not mobile
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
        <div
          className="left-side"
          style={{
            display: isMobile ? "flex" : "",

            flexDirection: isMobile ? "column" : "",
            justifyContent: isMobile ? "start" : "",
            alignItems: isMobile ? "flex-start" : "", // Align items to the start (left) of the container
            padding: isMobile ? "0 30px" : "", // Optional: Add padding to avoid elements touching the container edges
            gap: isMobile ? "15px" : "",
          }}
        >
          <br />
          <br />
          <div
            className="logo"
            style={{
              display: isMobile ? "flex" : "",
              justifyContent: isMobile ? "start" : "flex-start", // Align items based on screen size
              gap: isMobile ? "40px" : "",
              width: isMobile ? "100%" : "", // Ensure the logo div takes up the full width for proper alignment
              marginTop: isMobile ? "-20px" : "",
            }}
          >
            <img
              src={logo}
              alt="logo"
              onClick={() => navigate("/")}
              style={{
                width: !isMobile && "35%",
              }}
            />
            <p style={{ textAlign: "left" }}>
              <img src={talkExpert} alt="" />
              <a
                href="tel:+919354651433"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Talk to an Expert ( +919354651433)
              </a>
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: isMobile ? "8px" : "10px",
              margin: isMobile ? "10px auto 10px auto" : "20px auto",
            }}
          >
            <p style={{ textAlign: "left" }}>Public Relations</p>

            <p
              className="text-[25px]"
              style={{
                textAlign: "left",
                lineHeight: isMobile ? "1.2" : "1.2",
                fontSize: isMobile ? "20px" : "",
              }}
            >
              Get Your Press Release Perfected with{" "}
              <span className="text-[#1C6ED0] ">Best Deals and Expertise</span>
            </p>

            <ul
              className="flex list-disc gap-4 sm:gap-6 text-[#1C6ED0] text-[12px] justify-start"
              style={{ textAlign: "left", paddingInlineStart: "20px" }}
            >
              <li>Product Launch</li>
              <li>Events</li>
              <li>Fundraise Announcement</li>
            </ul>
          </div>

          <br />

          <img
            src={image}
            alt=""
            width={isMobile ? "70%" : "95%"}
            style={{
              display: "block",
              margin: isMobile ? "0 auto" : "10px  auto auto",
            }}
          />
        </div>
        <div className="md:w-[50%] md:absolute left-[50%]">
          <br />
          <br />
          <p
            className={`text-[#1B2559] hidden  text-[12px] font-bold md:flex items-center justify-end pr-2 ${
              isMobile ? "" : isTab ? "auto" : "w-[90%]"
            }`}
          >
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
          <div
            className={`flex flex-col justify-center items-center w-[95%] md:w-[85%] lg:w-[65%] m-auto rounded-b-3xl form  ${
              isMobile ? "max-w-[375px]" : ""
            }`}
          >
            <p className="flex items-center bg-gradient-to-r from-[#1C6ED0] to-[#0E386A] text-white w-full justify-center rounded-t-3xl p-1 gap-2">
              <img src={percentage} alt="" />
              Compare and Get the Besets PR Deals
            </p>
            <div className="flex flex-col justify-start">
              <p
                className="font-bold text-[18px] lg:text-[24px] "
                style={{
                  marginTop: isMobile ? "19px" : isTab ? "23px" : "10px",
                  marginBottom: isMobile ? "9px" : "11px",
                  marginLeft: isMobile ? "-48px" : isTab ? "1%" : "-90px",
                  fontWeight: !isMobile && "600",
                }}
              >
                {currStep == 1 ? (
                  <>
                    Share Your Story{" "}
                    <span className="text-[#1C6ED0]">with the World</span>
                  </>
                ) : (
                  <div
                    style={{
                      marginTop: isMobile ? "19px" : "23px",
                      marginBottom: isMobile ? "9px" : "11px",
                      marginLeft: isMobile ? "-48px" : isTab ? "" : "-48px",
                    }}
                  >
                    <p
                      className={`${
                        isMobile
                          ? ""
                          : isTab
                          ? "w-[320px] text-left"
                          : "w-[320px] text-left"
                      }`}
                    >
                      Enter Your Contact Details
                    </p>
                  </div>
                )}
              </p>
              <form
                action=""
                className="mainForm"
                onSubmit={handleSubmit}
                style={{
                  marginLeft: isMobile ? "-20px" : isTab ? "1%" : "-80px",
                  gap: isMobile ? "12px" : "25px",
                  width: isMobile ? "" : isTab ? "320px" : "375px",
                }}
              >
                {currStep === 1 ? (
                  <>
                    <label style={labelStyle} htmlFor="pressReleaseReady">
                      Do you have the press release ready?
                      <br />
                      <select
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        id="pressReleaseReady"
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        name="pressReleaseReady"
                        onChange={handleInputChange}
                        value={formState.pressReleaseReady}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                    <label
                      style={labelStyle}
                      classname="formLabels"
                      htmlFor="pressReleasePurpose"
                    >
                      Purpose of Press Release
                      <br />
                      <select
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        id="pressReleasePurpose"
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px] "
                        name="pressReleasePurpose"
                        value={formState.pressReleasePurpose}
                        onChange={handleInputChange}
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
                    <label
                      style={labelStyle}
                      classname="formLabels"
                      htmlFor="budget"
                    >
                      Budget
                      <br />
                      <div
                        style={{
                          display: "block",
                          width: "300px",
                          marginTop: 10,
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <input
                            style={{
                              width: isMobile ? "" : isTab ? "300px" : "400px",
                            }}
                            id="budget-slider"
                            type="range"
                            name="priceRange"
                            min="0"
                            max="100000"
                            step="1000"
                            value={Number(formState.priceRange)}
                            onChange={handleInputChange}
                            className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer "
                          />
                          <div
                            className={`flex justify-between text-sm text-gray-600 mt-2 gap-x-10 ${
                              isMobile ? "" : isTab ? "" : "w-[400px]"
                            }`}
                          >
                            <span>₹0</span>
                            <span>₹100,000</span>
                          </div>

                          <div
                            style={{
                              position: "absolute",
                              left: isMobile
                                ? `120px`
                                : isTab
                                ? "120px"
                                : "190px",
                              top: "22px",

                              backgroundColor: "transparent",
                              border: "1px solid gray",
                              padding: "2px 8px",
                              borderRadius: "10px",
                              whiteSpace: "nowrap",
                              transform: "translateX(-50%)", // Center the box horizontally
                            }}
                          >
                            ₹{formState.priceRange}
                          </div>
                        </div>
                      </div>
                    </label>
                    <label
                      style={labelStyle}
                      classname="formLabels"
                      htmlFor="targetAudience"
                    >
                      Target Audience{" "}
                    </label>
                    <input
                      type="text"
                      style={{
                        width: isMobile ? "" : isTab ? "300px" : "400px",
                      }}
                      id="targetAudience"
                      className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                      name="targetAudience"
                      value={formState.targetAudience}
                      onChange={handleInputChange}
                    />
                    {/* <option value="generalPublic">General Public</option>
                      {/* <option value="healthcareProfessionals">
                        Healthcare Professionals
                      </option> */}
                    <label
                      style={labelStyle}
                      classname="formLabels"
                      htmlFor="geographicalTarget"
                    >
                      Geographical Target
                      <br />
                      <select
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        id="geographicalTarget"
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        name="geoTarget"
                        value={formState.geoTarget}
                        onChange={handleInputChange}
                      >
                        <option value="national">National</option>
                        <option value="international">International</option>
                        <option value="local">Local</option>
                      </select>
                    </label>
                    <label
                      style={labelStyle}
                      classname="formLabels"
                      htmlFor="language"
                    >
                      Language
                      <br />
                      <select
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        id="language"
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        name="language"
                        value={formState.language}
                        onChange={handleInputChange}
                      >
                        <option value="hindi">Hindi</option>
                        <option value="english">English</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                    <label
                      style={labelStyle}
                      classname="formLabels"
                      htmlFor="industry"
                    >
                      Industry
                      <br />
                      <select
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        id="industry"
                        className="bg-[#18141f05] w-[300px]  h-[30px]  text-[grey]"
                        name="industry"
                        value={formState.industry}
                        onChange={handleInputChange}
                      >
                        {industries.map((industry, index) => (
                          <option value={industry} key={index}>
                            {industry}
                          </option>
                        ))}

                        {/* <option value="healthcare">Healthcare</option>
                      <option value="it">IT</option>
                      <option value="defense">Defense</option> */}
                      </select>
                    </label>
                    <label
                      style={labelStyle}
                      classname="formLabels"
                      htmlFor="deliveryTime"
                    >
                      Delivery Time
                      <br />
                      <select
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        id="deliveryTime"
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        name="deliveryTime"
                        value={formState.deliveryTime}
                        onChange={handleInputChange}
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
                    <label style={labelStyle}>
                      First Name
                      <br />
                      <input
                        type="text"
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        placeholder="Enter your first name here"
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label style={labelStyle}>
                      Business Name
                      <br />
                      <input
                        type="text"
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        placeholder="Company Name"
                        name="company"
                        value={formState.company}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label style={labelStyle}>
                      Email
                      <br />
                      <input
                        type="text"
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        placeholder="Enter your email here"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label style={labelStyle}>
                      Phone Number
                      <br />
                      <input
                        type="text"
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        placeholder="Enter your phone number here"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label style={labelStyle}>
                      Website
                      <br />
                      <input
                        type="text"
                        style={{
                          width: isMobile ? "" : isTab ? "300px" : "400px",
                        }}
                        className="bg-[#18141f05] w-[300px] text-[grey] h-[30px]"
                        placeholder="www.bizzowl.com"
                        name="website"
                        value={formState.website}
                        onChange={handleInputChange}
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
          </div>

          <br />
          <br />
          {currStep !== 1 && (
            <div className="mb-10 w-[60%] mx-auto">
              <p>
                By clicking on "View Plans", you agree to our
                <span className="text-[#1C6ED0]"> Privacy Policy</span>  and 
                <span className="text-[#1C6ED0]">Terms of Use</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FirstForm;
