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
  Checkbox,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./serviceStyle.scss";
import { Center } from "@chakra-ui/react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const ServicePR = () => {
  const [ratings, setRatings] = useState(5);
  const [services, setServices] = useState(6);
  const [isChecked, setIsChecked] = useState({});
  const [comparisonTrayVisible, setComparisonTrayVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

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

  const handleCheckboxChange = (event, serviceId) => {
    if (selectedServices.length >= 3 && event.target.checked) {
      event.target.checked = false;
      return;
    }

    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [serviceId]: event.target.checked,
    }));

    if (event.target.checked) {
      setComparisonTrayVisible(true);
      handleAddToComparisonTray(serviceId);
    } else {
      setSelectedServices((prevServices) =>
        prevServices.filter((id) => id !== serviceId)
      );
      if (selectedServices.length === 0) {
        setComparisonTrayVisible(false);
      }
    }
  };

  const handleAddToComparisonTray = (service) => {
    setSelectedServices((prevServices) => [...prevServices, service]);
  };

  // const handleCompare = () => {
  //   const selectedService = selectedServices.filter((service) => service.selected);
  //   navigate(`/service/compare?services=${selectedService.map((service) => service.id).join(',')}`);
  // };

  const handleCompare = () => {
    const queryString = selectedServices.join(",");
    navigate(`/service/compare?services=${queryString}`);
  };

  const handleCancel = () => {
    setComparisonTrayVisible(false);
    setSelectedServices([]);
    setIsChecked({});
  };

  const handleRemoveFromComparisonTray = (serviceId) => {
    setSelectedServices((prevServices) => {
      const newServices = prevServices.filter((id) => id !== serviceId);
      if (newServices.length === 0) {
        setComparisonTrayVisible(false);
        setSelectedServices([]);
        setIsChecked({});
      } else {
        setIsChecked((prevChecked) => ({ ...prevChecked, [serviceId]: false }));
      }
      return newServices;
    });
  };

  return (
    <div className="card">
      <div className="card-body" style={{ backgroundColor: "#c3ddf938" }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src={BizowalLogo}
              alt="BizowlLogo"
              width={isMobile ? "120px" : "200px"}
            />
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
        {!isMobile && (
          <div className="d-flex">
            <div className="m-5" style={{ width: "20rem" }}>
              <div
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
              </div>
              <div
                className="card"
                style={{
                  marginTop: "10rem",
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
                <div className="card-body">
                  <h3>Best Practices</h3>
                  <p>
                    Do not share you number your number with your business
                    partner.
                  </p>
                  <img src={Image1} alt="Image1" width="100px" />
                </div>
              </div>
            </div>
            <div
              style={{
                marginBottom: comparisonTrayVisible ? "100px" : "0px",

                transition: "margin-bottom 0.5s ease-in-out",
              }}
            >
              {partners.map((item, index) => (
                <div className="m-5 d-flex align-items-center">
                  <div
                    key={index}
                    className="card"
                    style={{
                      height: isMobile ? "6rem" : "13rem",
                      width: isMobile ? "9rem" : "12rem",
                      backgroundColor: item?.bgColor,
                      borderTopLeftRadius: "25px",
                      borderBottomLeftRadius: "25px",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      boxShadow: `inset 0px 2px 4px rgba(0, 0, 0, 0.1), inset 2px 0px 4px rgba(0, 0, 0, 0.1), inset 0px -2px 4px rgba(0, 0, 0, 0.1)`,
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
                      <div
                        className="d-flex justify-content-center"
                        style={{
                          border: "2px solid",
                          borderColor: item?.borderColor,
                          borderRadius: "1rem",
                          padding: "0.5rem",
                          width: isMobile ? "100%" : "80%",
                          fontSize: "extraLarge",
                          backgroundColor: "#F7FCFB",
                        }}
                      >
                        {item?.letters.map((letter, index) => (
                          <div key={index} style={{ letterSpacing: "10px" }}>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontSize: "2rem",
                                color: letter?.color1,
                              }}
                            >
                              {letter?.letter1}
                            </span>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontSize: "2rem",
                                color: letter?.color2,
                              }}
                            >
                              {letter?.letter2}
                            </span>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontSize: "2rem",
                                color: letter?.color3,
                              }}
                            >
                              {letter?.letter3}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      boxShadow: "0.25rem 0.25rem 0.9375rem 0px #407BFF6B",
                      borderTopRightRadius: "15px", borderBottomRightRadius: "15px",
                    }}
                  >
                    <div
                      className="card"
                      style={{ width: isMobile ? "14rem" : "35rem", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderTopRightRadius: "15px", borderBottomRightRadius: "15px", border: "none" }}
                    >
                      <div
                        className="card-body d-flex justify-content-between"
                        style={{ marginBottom: "-20px" }}
                      >
                        <div className="d-flex flex-column align-items-start">
                          <div className="d-flex flex-column align-items-start">
                            <h6>Distribution Outlets</h6>
                            <p style={{ fontWeight: "bold" }}>150+</p>
                          </div>
                          <div
                            className="d-flex flex-column align-items-start"
                            style={{
                              width: !isMobile && "70%",
                              textAlign: "left",
                            }}
                          >
                            <h6>Language</h6>
                            <p style={{ fontWeight: "bold" }}>
                              English, Hindi, Others
                            </p>
                          </div>
                        </div>
                        <div
                          className="d-flex flex-column justify-content-start"
                          style={{ fontSize: "0.9rem" }}
                        >
                          <div>
                            <h6>Delivery</h6>
                            <p style={{ fontWeight: "bold" }}>Same Day</p>
                          </div>
                          <div>
                            <h6>Geo-Tagging</h6>
                            <p style={{ fontWeight: "bold" }}>Yes</p>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <div>
                            <h6 style={{ fontSize: "small" }}>
                              Total Price Included GST
                            </h6>
                            <p style={{ fontWeight: "bold" }}>₹ 11,500</p>
                            <button
                              className="btn btn-primary btn-sm"
                              style={{
                                borderRadius: "12px",
                                padding: "6px 12px",
                              }}
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "right",
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40 28L24 40L8 28"
                              stroke="#1C6ED0"
                              stroke-width="4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 10H40"
                              stroke="#1C6ED0"
                              stroke-width="4"
                              stroke-linecap="round"
                            />
                            <path
                              d="M8 18H40"
                              stroke="#1C6ED0"
                              stroke-width="4"
                              stroke-linecap="round"
                            />
                          </svg>
                        </div>
                        <div
                          style={{
                            width: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "right",
                            marginRight: "15px",
                          }}
                        >
                          <Checkbox
                            checked={isChecked[item.id] || false}
                            onChange={(event) =>
                              handleCheckboxChange(event, item.id)
                            }
                            disabled={
                              selectedServices.length >= 3 && !item.isChecked
                            }
                          />
                          <Typography>Add To Compare</Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* {comparisonTrayVisible && (
          <div className="comparison-tray">
            <ul style={{ display: "flex", flexDirection: "row" }}>
              {selectedServices.map((service, index) => (
                <li style={{ listStyle: "none", padding: "5px", border: "1px solid black" }} key={index}>
                  <span>{service}</span>
                  <CloseIcon
                    className="close-icon"
                    onClick={() => handleRemoveFromComparisonTray(service)}
                  />
                </li>
              ))}
            </ul>

            <button onClick={handleCompare}>Compare</button>

            <button onClick={handleCancel}>Cancel</button>
          </div>
        )} */}

        {comparisonTrayVisible && (
          <div className="comparison-tray">
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: isMobile ? "100%" : "70%",
              }}
            >
              {partners
                .filter((partner) => selectedServices.includes(partner.id))
                .map((service) => (
                  <li
                    style={{
                      listStyle: "none",
                      padding: !isMobile && "5px",
                      flexBasis: "auto",
                      flexGrow: 1,
                      margin: "10px",
                      borderRadius: "10px",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                      display: "flex", // Ensure the li itself is a flex container
                      flexDirection: "column", // Stack children vertically
                      alignItems: "center", // Center-align children horizontally
                      textAlign: "center",
                      position: "relative",
                    }}
                    key={service.id}
                  >
                    <CloseIcon
                      className="close-icon"
                      onClick={() => handleRemoveFromComparisonTray(service.id)}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        cursor: "pointer",
                      }}
                    />
                    <div
                      className="d-flex"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: !isMobile && "100px",
                      }}
                    >
                      {/* Card structure */}
                      <div
                        className="card"
                        style={{
                          height: isMobile ? "6rem" : "2rem",
                          width: isMobile ? "3rem" : "12rem",
                          border: "0.2rem solid",
                          borderColor: "white",
                        }}
                      >
                        <div
                          className="card-body"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <div
                            className={
                              isMobile
                                ? "d-flex justify-content-center"
                                : "d-flex justify-content-between"
                            }
                            style={{
                              border: "2px solid",
                              borderColor: service.borderColor,
                              borderRadius: "0.5rem",
                              padding: "0.5rem",
                              width: !isMobile && "100%",
                              height: "50px",
                              fontSize: "large",
                              backgroundColor: "#F7FCFB",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* Safely map over service.letters */}
                            {(service.letters || []).map((letter) => (
                              <div key={letter.id}>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: isMobile ? "1rem" : "2rem",
                                    color: letter.color1,
                                  }}
                                >
                                  {letter.letter1}
                                </span>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: isMobile ? "1rem" : "2rem",
                                    color: letter.color2,
                                  }}
                                >
                                  {letter.letter2}
                                </span>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: isMobile ? "1rem" : "2rem",
                                    color: letter.color3,
                                  }}
                                >
                                  {letter.letter3}
                                </span>
                              </div>
                            ))}
                          </div>
                          <p style={{ color: "#407BFF", fontSize: "small" }}>
                            Portfolio
                          </p>
                        </div>
                      </div>
                      {/* Additional card structure and content */}
                    </div>
                  </li>
                ))}
              {[...Array(3 - selectedServices.length)].map((_, index) => (
                <li
                  key={`placeholder-${index}`}
                  style={{
                    listStyle: "none",
                    padding: "5px",
                    flexBasis: "auto",
                    flexGrow: 1,
                    margin: "10px",
                    borderRadius: "10px",
                    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    border: "1px solid #407bff", // Add a border
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: isMobile ? "6rem" : "7rem",
                  }}
                >
                  <Typography variant="body2" color="#407bff">
                    Add a Plan
                  </Typography>
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: !isMobile && "30%",
                padding: !isMobile && "0 3rem 0 3rem",
              }}
            >
              <Button
                variant="contained"
                onClick={handleCompare}
                style={{ flex: 1, margin: "10px" }}
              >
                Compare
              </Button>
              <Button
                variant="outlined"
                onClick={handleCancel}
                style={{ flex: 1, margin: "10px" }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
        {isMobile && <FilterComponent />}
        {isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {partners.map((item, index) => (
              <Center>
                <Card
                  key={index}
                  sx={{
                    marginBottom: 2,
                    maxWidth: "70%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={isMobile ? 1 : 2}>
                      {/* Top Side: Three Letter Name and Portfolio */}
                      <Grid item xs={12} sm={4}>
                        <Box
                          sx={{ backgroundColor: item?.bgColor, padding: 2 }}
                        >
                          <Center>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                border: "2px solid",
                                borderColor: item?.borderColor,
                                borderRadius: "0.5rem",
                                padding: "0.5rem",
                                width: "50%",
                                backgroundColor: "#F7FCFB",
                              }}
                            >
                              {item?.letters.map((letter, idx) => (
                                <Typography
                                  key={idx}
                                  variant="h5"
                                  component="span"
                                >
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "1.5rem", // Adjusted font size
                                      color: letter?.color1,
                                    }}
                                  >
                                    {letter?.letter1}
                                  </span>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "1.5rem", // Adjusted font size
                                      color: letter?.color2,
                                    }}
                                  >
                                    {letter?.letter2}
                                  </span>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "1.5rem", // Adjusted font size
                                      color: letter?.color3,
                                    }}
                                  >
                                    {letter?.letter3}
                                  </span>
                                </Typography>
                              ))}
                            </Box>
                          </Center>
                        </Box>
                      </Grid>

                      {/* Middle: Features */}
                      <Grid item xs={12} sm={4}>
                        <Typography variant="p">Distribution Outlets</Typography>
                        <Typography variant="h6" fontWeight="bold">150+</Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="p">Language</Typography>
                        <Typography variant="h6" fontWeight="bold">English, Hindi, Others</Typography>
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <Typography variant="p">Delivery</Typography>
                        <Typography variant="h6" fontWeight="bold">Same Day</Typography>
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <Typography variant="p">Geo-Tagging</Typography>
                        <Typography variant="h6" fontWeight="bold">Yes</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  {/* Pricing Section and Get Started Button */}
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Total Price Included GST
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ mb: "10px", fontWeight: "bold" }}
                    >
                      ₹11,500
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Get Started
                    </Button>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "1rem",
                      }}
                    >
                      <Checkbox
                        checked={isChecked[item.id] || false}
                        onChange={(event) =>
                          handleCheckboxChange(event, item.id)
                        }
                        disabled={
                          selectedServices.length >= 3 && !item.isChecked
                        }
                      />
                      <Typography>Add To Compare</Typography>
                    </div>
                  </CardContent>
                </Card>
              </Center>
            ))}
          </div>
        )}
      </div>
      <PopupModal />
    </div>
  );
};

export default ServicePR;
