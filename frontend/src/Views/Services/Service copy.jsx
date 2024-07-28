import React, { useState } from "react";
//assets
import BizowalLogo from "./assets/logo-of-BIZOWL--Business-Services.png";
import PhonePic from "./assets/Vector (1).png";
import MessageImg from "./assets/Vector (2).png";
import PhoneImg from "./assets/Vector (3).png";
import VideoImg from "./assets/Vector (4).png";
import Star from "./assets/solar_star-bold.png";
import DownArrowPic from "./assets/Vector (5).png";
import BlueDownArrow from "./assets/Vector (6).png";
import Line from "./assets/Line 29 (1).png";
import Growth from "./assets/BizowlPic/growth 1.png";
import Price from "./assets/BizowlPic/best-price 1.png";
import Support from "./assets/BizowlPic/service 1.png";
import Quality from "./assets/BizowlPic/quality-control 1.png";
import Compare from "./assets/BizowlPic/compare 1.png";
import Experience from "./assets/BizowlPic/customer-review 2.png";
import Image1 from "./assets/BizowlPic/6895878 1.png";
import PopupModal from "./util/Popup";
import FilterComponent from "./util/FilterComponent";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./serviceStyle.scss";
import { Center, Link } from "@chakra-ui/react";

const Service = () => {
  const [ratings, setRatings] = useState(5);
  const [services, setServices] = useState(6);

  const isMobile = useMediaQuery("(max-width:768px)");

  const partners = [
    {
      id: 1,
      letters: [
        {
          letter1: "C",
          color1: "#455A64",
        },
        {
          letter2: "R",
          color2: "#70A6E6",
        },
        {
          letter3: "B",
          color3: "#455A64",
        },
      ],
      bgColor: "rgba(246, 246, 253, 0.8)",
      borderColor: "#70A6E6",
    },
    {
      id: 2,
      letters: [
        {
          letter1: "D",
          color1: "#455A64",
        },
        {
          letter2: "G",
          color2: "#A0A3D8",
        },
        {
          letter3: "S",
          color3: "#455A64",
        },
      ],
      bgColor: "rgba(229, 230, 249, 0.8)",
      borderColor: "#A0A3D8",
    },
    {
      id: 3,
      letters: [
        {
          letter1: "S",
          color1: "#455A64",
        },
        {
          letter2: "D",
          color2: "#0E3768",
        },
        {
          letter3: "O",
          color3: "#455A64",
        },
      ],
      bgColor: "rgba(229, 225, 249, 0.8)",
      borderColor: "#0E3768",
    },
    {
      id: 4,
      letters: [
        {
          letter1: "W",
          color1: "#455A64",
        },
        {
          letter2: "X",
          color2: "#CF9DBB",
        },
        {
          letter3: "T",
          color3: "#455A64",
        },
      ],
      bgColor: "#FFEEF7",
      borderColor: "#FFBBE1",
    },
    {
      id: 5,
      letters: [
        {
          letter1: "A",
          color1: "#455A64",
        },
        {
          letter2: "P",
          color2: "#A1D4C9",
        },
        {
          letter3: "K",
          color3: "#455A64",
        },
      ],
      bgColor: "#E1F2EF",
      borderColor: "#A1D4C9",
    },
    {
      id: 6,
      letters: [
        {
          letter1: "S",
          color1: "#455A64",
        },
        {
          letter2: "U",
          color2: "#EAD39C",
        },
        {
          letter3: "M",
          color3: "#455A64",
        },
      ],
      bgColor: "rgba(255, 249, 234, 0.8)",
      borderColor: "#EAD39C",
    },
  ];
  const whyChooseBizowl = [
    {
      image: Growth,
      reason: "Business Growth Roadmap",
      alt: "Growth",
    },
    {
      image: Price,
      reason: "Best Price",
      alt: "BestPrice",
    },
    {
      image: Support,
      reason: "24*7 Support Assistance",
      alt: "Support",
    },
    {
      image: Quality,
      reason: "Best Quality, No disputes",
      alt: "Quality",
    },
    {
      image: Compare,
      reason: "Compare & Choose",
      alt: "Compare",
    },
    {
      image: Experience,
      reason: "Smoother Experience",
      alt: "Experience",
    },
  ];

  return (
    <div className="card">
      <div className="card-body" style={{ backgroundColor: "#c3ddf938" }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Link href="/">
              <img
                src={BizowalLogo}
                alt="BizowlLogo"
                width={isMobile ? "120px" : "200px"}
              />
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <img
              src={PhonePic}
              alt="PhonePic"
              width={isMobile ? "30px" : "40px"}
            />
            <p>Need help?</p>
          </div>
        </div>
      </div>
      {!isMobile ? (
        <div className="d-flex">
          <div className="m-5" style={{ width: "20rem" }}>
            {/* <div
              className="card"
              style={{ borderRadius: "1rem", lineHeight: "1rem" }}
            >
              <div
                className="d-flex justify-content-between align-items-center card-body"
                style={{
                  boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)",
                  borderRadius: "1rem",
                }}
              >
                <div>Sort by</div>
                <div
                  style={{
                    border: "1px solid",
                    borderColor: "white",
                    borderRadius: "1.5rem",
                    boxShadow: "0rem 0.25rem 0.25rem 0rem #407BFF",
                  }}
                >
                  <img
                    src={DownArrowPic}
                    alt="DownArrowPic"
                    width="28rem"
                    style={{ padding: "0.3rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="card" style={{ marginTop: "1rem" }}>
              <div
                className="card-body"
                style={{
                  boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Filter</h5>
                  <img
                    src={BlueDownArrow}
                    alt="BlueDownArrow"
                    width="17rem"
                    height="10rem"
                  />
                </div>
                <img src={Line} alt="LinePic" width="18rem" />
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Budget</h6>
                  <img
                    src={BlueDownArrow}
                    alt="BlueDownArrow"
                    width="17rem"
                    height="10rem"
                  />
                </div>
                <img src={Line} alt="LinePic" width="18rem" />
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Experience</h6>
                  <img
                    src={BlueDownArrow}
                    alt="BlueDownArrow"
                    width="17rem"
                    height="10rem"
                  />
                </div>
                <img src={Line} alt="LinePic" width="18rem" />
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Portfolio</h6>
                  <img
                    src={BlueDownArrow}
                    alt="BlueDownArrow"
                    width="17rem"
                    height="10rem"
                  />
                </div>
                <img src={Line} alt="LinePic" width="18rem" />
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Timeline</h6>
                  <img
                    src={BlueDownArrow}
                    alt="BlueDownArrow"
                    width="17rem"
                    height="10rem"
                  />
                </div>
                <img src={Line} alt="LinePic" width="18rem" />
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Start Date</h6>
                  <img
                    src={BlueDownArrow}
                    alt="BlueDownArrow"
                    width="17rem"
                    height="10rem"
                  />
                </div>
                <img src={Line} alt="LinePic" width="18rem" />
              </div>
            </div> */}
            <div
              className="card"
              style={{
                // marginTop: "10rem",
                backgroundColor: "#F6F6FD",
                borderRadius: "3rem",
                boxShadow:
                  "0.3125rem 0.25rem 0.4375rem 0rem rgba(121, 168, 224, 0.65)",
              }}
            >
              <div className="card-body">
                <h3>Why Choose Bizowl?</h3>
                {whyChooseBizowl?.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "start",
                      alignItems: "center",
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <img alt="" src={item?.image} />
                    <h6 style={{ marginLeft: "1rem" }}>{item?.reason}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="card"
              style={{
                marginTop: "5rem",
                borderRadius: "3rem",
                boxShadow:
                  "0.3125rem 0.25rem 0.4375rem 0rem rgba(121, 168, 224, 0.65)",
              }}
            >
              <div
                className="card-body"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>Best Practices</h3>
                <p>
                  Do not share you number your number with your business
                  partner.
                </p>
                <img src={Image1} alt="Image1" width="100px" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="card"
            style={{
              // marginTop: "10rem",
              margin: "2rem",
              backgroundColor: "#F6F6FD",
              borderRadius: "3rem",
              boxShadow:
                "0.3125rem 0.25rem 0.4375rem 0rem rgba(121, 168, 224, 0.65)",
            }}
          >
            <div className="card-body">
              <h3>Why Choose Bizowl?</h3>
              {whyChooseBizowl?.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <img alt="" src={item?.image} />
                  <h6 style={{ marginLeft: "1rem" }}>{item?.reason}</h6>
                </div>
              ))}
            </div>
          </div>
          <div
            className="card"
            style={{
              marginTop: "5rem",
              margin: "2rem",
              borderRadius: "3rem",
              boxShadow:
                "0.3125rem 0.25rem 0.4375rem 0rem rgba(121, 168, 224, 0.65)",
            }}
          >
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>Best Practices</h3>
              <p>
                Do not share you number your number with your business partner.
              </p>
              <img src={Image1} alt="Image1" width="100px" />
            </div>
          </div>
        </>
      )}
      <PopupModal />
    </div>
  );
};

export default Service;
