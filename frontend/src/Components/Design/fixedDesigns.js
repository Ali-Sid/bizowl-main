import React, { useState } from "react";
import "../../Styles/CompStyle/fixedDesignStyle.scss";
import "../../Styles/CompStyle/SubNavBarStyle.scss";
import "../../Styles/AuthStyles/contactStyle.scss";
import "../../Styles/commonStyles.scss";
import "../../Styles/CompStyle/LandingPage.scss";
import { ellipsisText, WindowOpenLink } from "../Extra/extraFunction";
import {
  BsChevronRight,
  BsFillStarFill,
  // BsHeadphones,
  BsSearch,
} from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { Col, Modal, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import {
  // FaHeadphones,
  // FaHeadphonesAlt,
  FaMinus,
  FaTimes,
} from "react-icons/fa";
import { setIsClosed, setIsSubmit, setIsVisible } from "../../Redux/actions";
// import Slider from "react-slick";
import // MdHeadphonesBattery,
// MdOutlineHeadphones,
// MdSupport,
"react-icons/md";
import {
  // sendContactMail,
  sendMail,
} from "../Extra/email";
import {
  // sweetAlertFunction,
  sweetAlertMessageFunction,
} from "../Extra/sweetAlert";

export const OurServicesCard = ({
  icon,
  title,
  color,
  color2,
  color3,
  action,
}) => {
  return (
    <div
      className="ourServiceCardDiv"
      style={{ backgroundColor: color, color: color3 }}
      onClick={() => {
        WindowOpenLink("/projectCreation", "_self");
      }}
    >
      <div className="ourServiceCardLogoDiv">
        <img className="ourServiceCardImg" alt="" src={icon} />
      </div>
      <div className="ourServiceLine" style={{ backgroundColor: color2 }}></div>
      <div className="ourServiceTitleText">{title}</div>
    </div>
  );
};
export const LandingPagePopup = (dispatch, isVisible) => {
  const [projectRequirements, setProjectRequirements] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const submitSecondSectionReport = async () => {
    var isMailSent = await sendMail(
      "",
      "",
      "",
      projectRequirements,
      userFirstName,
      userLastName,
      userEmail,
      userPhone,
      "Business Form"
    );
    if (isMailSent) {
      await sweetAlertMessageFunction(
        "Submitted",
        "Thank You For Submitting The Details, Our Executive Will Get In Touch With You Shortly.",
        "success"
      );
      setProjectRequirements("");
      setUserFirstName("");
      setUserLastName("");
      setUserEmail("");
      setUserPhone("");
      dispatch(setIsVisible(false));
      dispatch(setIsSubmit(true));
    }
  };

  return (
    <Modal
      className="transformLow9 LandingPagePopup"
      size="lg"
      show={isVisible}
    >
      <Modal.Body>
        <div className="landingMainHead">
          <div className="landingPageImageDiv">
            <img
              src="Images/fixedDesigns/landingPage4.gif"
              className="landingPageImage"
              alt=""
            />
          </div>
          <div className="landingPageFormDiv">
            <div className="landingTitle">
              Tell Us About Your Business.
              <FaTimes
                className="landingButtonClose boxShadow"
                onClick={() => {
                  dispatch(setIsVisible(false));
                  dispatch(setIsClosed(true));
                }}
              />
            </div>
            <div className="flex">
              <div className="left fullWidth padding10 fontSize15">
                Name
                <input
                  value={userFirstName}
                  onChange={(e) => {
                    setUserFirstName(e.target.value);
                  }}
                  type="text"
                  placeholder="Name"
                  className="inputStyleCommon borderRadius100 colorBlack"
                />
              </div>
            </div>
            <div className="flex">
              <div className="left fullWidth padding10 fontSize15">
                Email
                <input
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Email"
                  className="inputStyleCommon borderRadius100"
                />
              </div>
            </div>
            <div className="flex">
              <div className="left fullWidth padding10 fontSize15">
                Phone
                <input
                  value={userPhone}
                  onChange={(e) => {
                    setUserPhone(e.target.value);
                  }}
                  type="number"
                  placeholder="Phone Number"
                  className="inputStyleCommon borderRadius100"
                />
              </div>
            </div>
            <div className="flex">
              <div className="left fullWidth padding10 fontSize15">
                About Your Business
                <input
                  value={projectRequirements}
                  onChange={(e) => {
                    setProjectRequirements(e.target.value);
                  }}
                  type="text"
                  placeholder="About Your Business"
                  className="inputStyleCommon borderRadius100"
                />
              </div>
            </div>
            <div className="marginTop20 center padding10 flex">
              <button
                className="staticButtonStyle boxShadow fullWidth borderRadius100 marginLeft10"
                onClick={() => {
                  submitSecondSectionReport();
                }}
              >
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const OurMoreServicesDesign = (
  loginWindow,
  serviceHeadList,
  serviceBodyList,
  serviceWindowFunction,
  selectedServiceName,
  setSelectedServiceName,
  serviceSearchValue,
  setServiceSearchValue
) => {
  var serviceSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    // autoplay:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Modal
      className="transformLow9"
      size="lg"
      show={loginWindow}
      onHide={() => serviceWindowFunction(false)}
    >
      <Modal.Header className="loginHeaderStyle">
        <div className="flexDivCenterPhone">
          <div className="BigTitleText fontSize25">
            {" "}
            More{" "}
            <span className="BigTitleHighlightedText fontSize25">
              Our Services
            </span>
          </div>
          <div>
            <BsSearch className="searchIcon" />
            <input
              type={"text"}
              value={serviceSearchValue}
              onChange={(e) => {
                setServiceSearchValue(e.target.value);
              }}
              style={{ paddingInline: 30 }}
              placeholder="Search For Service"
              className="inputStyleCommon borderRadius100 width300px"
            />
            <FaTimes
              onClick={() => {
                setServiceSearchValue("");
              }}
              className="clearServiceIcon"
            />
            <FaTimes
              className="closeIcon"
              onClick={() => serviceWindowFunction(false)}
            />
          </div>
        </div>
      </Modal.Header>

      <Modal.Body>
        <div className="serviceStyle">
          <div className="serviceTypeHead flex">
            {serviceHeadList.map((res, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedServiceName(res.value);
                  }}
                  key={index}
                  className={
                    selectedServiceName === res.value
                      ? "selectedServiceType cardSection"
                      : "serviceType cardSection"
                  }
                >
                  {res.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="serviceBodySection">
          <div className="serviceTypeTitle marginTop20">
            <div className="BigTitleText fontSize20">
              {" "}
              <span className="BigTitleHighlightedText fontSize25">
                {" "}
                <FaMinus />{" "}
              </span>{" "}
              {!serviceSearchValue ? selectedServiceName : "Search Data"}{" "}
            </div>
          </div>
          <div className="serviceTypeBody">
            <Row>
              {serviceBodyList.map((res, index) => {
                if (res.type === selectedServiceName && !serviceSearchValue) {
                  return (
                    <Col key={index} md={3} xs={6}>
                      <div
                        className="servicesList"
                        onClick={() => {
                          WindowOpenLink("/projectCreation", "_self");
                        }}
                      >
                        <img src={res.image} alt="" className="serviceImage" />
                        <div className="serviceImageText">{res.name}</div>
                      </div>
                    </Col>
                  );
                } else if (serviceSearchValue) {
                  return (
                    <Col key={index} md={3} xs={6}>
                      <div
                        className="servicesList"
                        onClick={() => {
                          WindowOpenLink("/projectCreation", "_self");
                        }}
                      >
                        <img src={res.image} alt="" className="serviceImage" />
                        <div className="serviceImageText">{res.name}</div>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const WhyUsCard = ({
  icon,
  title,
  color,
  color2,
  color3,
  color4,
  action,
}) => {
  return (
    <div
      className="whyUsCardDiv"
      style={{ backgroundColor: color, color: color3, borderColor: color4 }}
    >
      <div className="whyUsCardLogoDiv" style={{ borderColor: color2 }}>
        <img className="whyUsCardImg" alt="" src={icon} />
      </div>
      <div className="whyUsCircle" style={{ backgroundColor: color2 }}></div>
      <div className="whyUsTitleText">{title}</div>
    </div>
  );
};

export const HowCardCircle = ({
  icon,
  title,
  count,
  extra,
  line,
  direction,
  isDownLine,
  action,
  isLast,
}) => {
  return (
    <div
      className={
        extra
          ? isLast
            ? "lastItemStyle howCardDivCircle marginTopDynamic"
            : "howCardDivCircle marginTopDynamic"
          : isLast
          ? "lastItemStyle howCardDivCircle"
          : "howCardDivCircle"
      }
    >
      <div className="countDesign">{count}</div>
      {direction === "up" ? (
        <svg className="HowCardCircleDynamicStickUp">
          <line
            stroke-dasharray="5,5"
            x1="50"
            y1="50"
            x2="350"
            y2="350"
            stroke="grey"
          />
        </svg>
      ) : (
        <></>
      )}
      {direction === "down" ? (
        <svg className="HowCardCircleDynamicStickDown">
          <line
            stroke-dasharray="5,5"
            x1="50"
            y1="50"
            x2="350"
            y2="350"
            stroke="grey"
          />
        </svg>
      ) : (
        <></>
      )}
      <div className="circleImageSection">
        <img className="howCardCircleImg" alt="" src={icon} />
        <div className="howHighlightedCircleTitleText">{title}</div>
      </div>
    </div>
  );
};

export const HowCard = ({
  icon,
  title,
  title2,
  extra,
  line,
  direction,
  isDownLine,
  action,
}) => {
  return (
    <div className="howCardDiv" style={{ marginTop: extra ? "12%" : "" }}>
      <div className="howCardLogoDiv">
        <img className="howCardImg" alt="" src={icon} />
      </div>
      <div
        className={
          direction === "up"
            ? "rightLineDecorationUp"
            : direction === "down"
            ? "rightLineDecorationDown"
            : "noneDisplay"
        }
        style={{ top: line }}
      >
        -----
      </div>
      {isDownLine ? (
        <div className="showPhoneView leftDownLineDecorationUp">-----</div>
      ) : (
        <></>
      )}
      <div className="howTitleText">
        {title}
        <div className="howHighlightedTitleText">{title2}</div>
      </div>
    </div>
  );
};

export const WhyBestCard = ({ icon, title, color, color3, action }) => {
  return (
    <div
      className="ourServiceCardDiv marginTop20"
      style={{ backgroundColor: color, color: color3 }}
    >
      <div className="whyBestCardLogoDiv">
        <img className="ourServiceCardImg" alt="" src={icon} />
      </div>
      <div className="whyBestCardTitleText">{title}</div>
    </div>
  );
};

export const IndustriesBigCard = ({ icon, title, description, action }) => {
  return (
    <div className="industriesBigCard elevation overflowHidden">
      <div className="industriesBigCardLogo">
        <img className="industriesBigCardImg" alt="" src={icon} />
      </div>
      <div className="industriesBigCardTitle textCapitalize">{title}</div>
      <div className="industriesBigCardDescription">
        {/* {ellipsisText(description,7)} */}
        {description}
      </div>
    </div>
  );
};

export const IndustriesSmallCard = ({ icon, icon2, title, active, action }) => {
  return (
    <div
      onClick={action}
      className={
        active
          ? "elevation2 industriesSmallCard overflowHidden"
          : "industriesSmallCard elevation overflowHidden"
      }
      style={{ backgroundColor: active ? "#1c6ed0" : "#ffffff" }}
    >
      <div className="industriesSmallCardLogo">
        <img
          className="industriesSmallCardImg"
          alt=""
          src={active ? icon2 : icon}
        />
      </div>
      <div
        className="industriesSmallCardTitle"
        style={{ color: active ? "#fafafa" : "#212121" }}
      >
        {title}
      </div>
    </div>
  );
};

export const TestimonialDesign = (starCount, review, name, title, image) => {
  var starCountArray = [];
  for (var i = 0; i < starCount; i++) {
    starCountArray.push(i);
  }
  return (
    <div className="testimonialCard">
      <div className="testimonialCardLeft">
        <div className="testimonialLeftInner1">
          <div className="testimonialRatings">
            {starCountArray.map((res, index) => {
              return (
                <div key={index} style={{ padding: 2 }}>
                  <BsFillStarFill color="gold" size={30} />
                </div>
              );
            })}
          </div>
          <div>
            <ImQuotesLeft color="#1c6ed0" size={35} />
          </div>
        </div>
        <div className="testimonialLeftInner2 textCapitalize">{review}</div>
        <div className="testimonialLeftInner3 marginTop30">
          <div className="testimonialProfileIcon">
            <img className="testimonialImageShort" src={image} alt="" />
          </div>
          <div className="testimonialProfileBody">
            <div className="testimonialProfileName">{name}</div>
            <div className="testimonialProfileDesignation">{title}</div>
          </div>
        </div>
      </div>

      <div className="testimonialCardRight">
        <div className="testimonialRightPhotoDiv">
          <img src={image} className="testimonialPhoto" alt="" />
        </div>
      </div>
    </div>
  );
};

export const AskBigCard = () => {
  return (
    <div className="askBigCardContainer elevation overflowHidden">
      <div className="askBigCardLeft">
        <img
          src="Images/fixedDesigns/contacts1.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="askBigCardRight">
        <div className="askBigCardTitle">Ask us anything</div>
        <div className="askBigCardDescription">
          Don&apos;t be hesitate to ask your questions with us we&apos;re happy to provide
          you the solution
        </div>
        <div className="">
          <Row>
            <Col md={4}>
              <div className="contactDetailsItem marginTop10">
                <div className="contactDetailsItemHead">
                  <div className="contactDetailsHeadLogo">
                    <img
                      className="contactDetailsLogo"
                      src="Images/fixedDesigns/supportImage.png"
                      alt=""
                      style={{}}
                    />
                  </div>
                  <div className="contactDetailsHeadTitle">
                    Support
                    <div
                      onClick={() => {
                        WindowOpenLink("mailto:support@bizzowl.com", "_self");
                      }}
                      className="contactDetailsItemBody touchable"
                    >
                      support@bizzowl.com
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="contactDetailsItem marginTop10">
                <div className="contactDetailsItemHead">
                  <div className="contactDetailsHeadLogo">
                    <img
                      className="contactDetailsLogo"
                      src="Images/fixedDesigns/phoneImage.png"
                      alt=""
                      style={{}}
                    />
                  </div>
                  <div className="contactDetailsHeadTitle">
                    Contact
                    <div
                      onClick={() => {
                        WindowOpenLink("tel:+919354651433", "_self");
                      }}
                      className="contactDetailsItemBody touchable"
                    >
                      +91 9354651433
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="contactDetailsItem marginTop10">
                <div className="contactDetailsItemHead">
                  <div className="contactDetailsHeadLogo">
                    <img
                      className="contactDetailsLogo"
                      src="Images/fixedDesigns/userImage.png"
                      alt=""
                      style={{}}
                    />
                  </div>
                  <div className="contactDetailsHeadTitle">
                    Sales
                    <div
                      onClick={() => {
                        WindowOpenLink("mailto:sales@bizzowl.com", "_self");
                      }}
                      className="contactDetailsItemBody touchable"
                    >
                      sales@bizzowl.com
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={10}>
              <div className="contactDetailsItem marginTop20">
                <div className="contactDetailsItemHead">
                  <div className="contactDetailsHeadLogo">
                    <img
                      className="contactDetailsLogo"
                      src="Images/fixedDesigns/userImage.png"
                      alt=""
                      style={{}}
                    />
                  </div>
                  <div className="contactDetailsHeadTitle">
                    Address
                    <div
                      // onClick={() => {
                      //   WindowOpenLink("mailto:sales@bizzowl.com", "_self");
                      // }}
                      className="contactDetailsItemBody touchable"
                    >
                      WZ-49/C, Radha Krishna Mandir, Dwarka Sector -1, New Delhi, Delhi, 110045
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export const BlogsBigCard = ({
  icon,
  title,
  description,
  action,
  date,
  jobTitle,
}) => {
  return (
    <div
      className="blogsBigCard elevation overflowHidden"
      onClick={() => {
        WindowOpenLink("/specificBlogs", "_blank");
      }}
    >
      <div className="blogsBigCardLogo">
        <img className="blogsBigCardImg" alt="" src={icon} />
      </div>
      <div className="blogsBigCardDescription">
        <div className="flex">
          <div className="blogsDate">{jobTitle}</div> &nbsp;&nbsp;
          {date}
        </div>
        <div className="blogsBigCardTitle marginTop10">
          {" "}
          {ellipsisText(title, 2)}{" "}
        </div>
        <div className="marginTop10">{ellipsisText(description, 5)}</div>
      </div>
    </div>
  );
};

export const BlogsBigCard2 = ({
  icon,
  title,
  description,
  action,
  date,
  jobTitle,
}) => {
  return (
    <div
      className="blogsBigCard2 elevation overflowHidden"
      // onClick={() => {
      //   WindowOpenLink("/specificBlogs", "_blank");
      // }}
    >
      <div className="blogsBigCardLogo">
        <img className="blogsBigCardImg" alt="" src={icon} />
      </div>
      <div className="blogsBigCardDescription">
        <div className="flex">
          <div className="blogsDate">{jobTitle}</div> &nbsp;&nbsp;
          {date}
        </div>
        <div className="blogsBigCardTitle marginTop10">
          {" "}
          {ellipsisText(title, 2)}{" "}
        </div>
        <div className="marginTop10">{ellipsisText(description, 5)}</div>
      </div>
    </div>
  );
};

export const BlogsSmallCard = ({
  icon,
  title,
  description,
  action,
  date,
  jobTitle,
}) => {
  return (
    <div
      onClick={() => {
        WindowOpenLink("/specificBlogs", "_blank");
      }}
      className="elevation2 blogsSmallCard overflowHidden boxShadowHover"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="blogsSmallCardLogo">
        <img className="blogsSmallCardImg" alt="" src={icon} />
      </div>
      <div className="blogsSmallCardTitle" style={{ color: "#212121" }}>
        <div className="flex hidePhoneView">
          <div className="blogsDate">{jobTitle}</div> &nbsp; {date}
        </div>

        <div className="">{ellipsisText(title, 2)}</div>
        <div className="lightColor marginTop5">
          {ellipsisText(description, 2)}
        </div>
      </div>
    </div>
  );
};

export const SubHeader = (
  primaryName,
  primaryPath,
  secondaryName,
  secondaryPath
) => {
  primaryPath = "/" + primaryPath;
  secondaryPath = "/" + secondaryPath;
  return (
    <div className="subHeader">
      <div className="subHeaderMainDiv">
        <div>
          <NavLink className="navLinks" to={primaryPath}>
            {primaryName}
          </NavLink>
        </div>
        <div className="subHeaderRow">
          <span>
            <NavLink className="navLinks" to={secondaryPath}>
              {secondaryName}
            </NavLink>
          </span>
          <span>
            {" "}
            <BsChevronRight />{" "}
          </span>
          <span>
            <NavLink className="navLinks" to={primaryPath}>
              {primaryName}
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export const ContactUsDesign = () => {
  const [projectRequirements, setProjectRequirements] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const submitSecondSectionReport = async () => {
    var isMailSent = await sendMail(
      "",
      "",
      "",
      projectRequirements,
      userFirstName,
      userLastName,
      userEmail,
      userPhone,
      "Contact Us"
    );
    if (isMailSent) {
      await sweetAlertMessageFunction(
        "Submitted",
        "Thank You For Submitting The Details, Our Executive Will Get In Touch With You Shortly.",
        "success"
      );
      setProjectRequirements("");
      setUserFirstName("");
      setUserLastName("");
      setUserEmail("");
      setUserPhone("");
    }
  };

  return (
    <div className="contactMainHead boxShadow flex">
      <div className="width100">
        <div className="BigTitleText left">Contact Us</div>
        <div className="description justifyText">
          Explain Your Project Details
        </div>
        <div className="flex marginTop20">
          <div className="left fullWidth padding10 fontSize15">
            First Name
            <input
              value={userFirstName}
              onChange={(e) => {
                setUserFirstName(e.target.value);
              }}
              type="text"
              placeholder="First Name"
              className="inputStyleCommon borderRadius100 colorBlack"
            />
          </div>
          <div className="left fullWidth padding10 fontSize15">
            Last Name
            <input
              value={userLastName}
              onChange={(e) => {
                setUserLastName(e.target.value);
              }}
              type="text"
              placeholder="Last Name"
              className="inputStyleCommon borderRadius100"
            />
          </div>
        </div>
        <div className="flex">
          <div className="left fullWidth padding10 fontSize15">
            Email
            <input
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              type="text"
              placeholder="Email"
              className="inputStyleCommon borderRadius100"
            />
          </div>
          <div className="left fullWidth padding10 fontSize15">
            Phone Number
            <input
              value={userPhone}
              onChange={(e) => {
                setUserPhone(e.target.value);
              }}
              type="number"
              placeholder="Phone Number"
              className="inputStyleCommon borderRadius100"
            />
          </div>
        </div>
        <div className="flex">
          <div className="left fullWidth padding10 fontSize15">
            Project Requirements
            <textarea
              value={projectRequirements}
              onChange={(e) => {
                setProjectRequirements(e.target.value);
              }}
              type="text"
              placeholder="Project Requirements"
              className="inputStyleCommon borderRadius100 textArea"
            />
          </div>
        </div>

        <div>
          <button
            className="btn btn-primary width200px upperCase"
            onClick={() => {
              submitSecondSectionReport();
            }}
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
      <div>
        <img src="./Images/homepage/contacts.png" className="contactImage" alt="contact" />
      </div>
    </div>
  );
};
