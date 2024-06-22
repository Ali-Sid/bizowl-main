import React, { useState } from 'react'
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
import PopupModal from './util/Popup';

const Service = () => {
    const [ratings, setRatings] = useState(5);
    const [services, setServices] = useState(6);

    const partners = [
        {
            id: 1,
            letters: [
                {
                    letter1: 'C',
                    color1: "#455A64"
                },
                {
                    letter2: 'R',
                    color2: "#70A6E6"
                },
                {
                    letter3: 'B',
                    color3: "#455A64"
                }
            ],
            bgColor: "rgba(246, 246, 253, 0.8)",
            borderColor: "#70A6E6"
        },
        {
            id: 2,
            letters: [
                {
                    letter1: 'D',
                    color1: "#455A64"
                },
                {
                    letter2: 'G',
                    color2: "#A0A3D8"
                },
                {
                    letter3: 'S',
                    color3: "#455A64"
                }
            ],
            bgColor: "rgba(229, 230, 249, 0.8)",
            borderColor: "#A0A3D8"
        },
        {
            id: 3,
            letters: [
                {
                    letter1: 'S',
                    color1: "#455A64"
                },
                {
                    letter2: 'D',
                    color2: "#0E3768"
                },
                {
                    letter3: 'O',
                    color3: "#455A64"
                }
            ],
            bgColor: "rgba(229, 225, 249, 0.8)",
            borderColor: "#0E3768"
        },
        {
            id: 4,
            letters: [
                {
                    letter1: 'W',
                    color1: "#455A64"
                },
                {
                    letter2: 'X',
                    color2: "#CF9DBB"
                },
                {
                    letter3: 'T',
                    color3: "#455A64"
                }
            ],
            bgColor: "#FFEEF7",
            borderColor: "#FFBBE1"
        },
        {
            id: 5,
            letters: [
                {
                    letter1: 'A',
                    color1: "#455A64"
                },
                {
                    letter2: 'P',
                    color2: "#A1D4C9"
                },
                {
                    letter3: 'K',
                    color3: "#455A64"
                }
            ],
            bgColor: "#E1F2EF",
            borderColor: "#A1D4C9"
        },
        {
            id: 6,
            letters: [
                {
                    letter1: 'S',
                    color1: "#455A64"
                },
                {
                    letter2: 'U',
                    color2: "#EAD39C"
                },
                {
                    letter3: 'M',
                    color3: "#455A64"
                }
            ],
            bgColor: "rgba(255, 249, 234, 0.8)",
            borderColor: "#EAD39C"
        },
    ]
    const whyChooseBizowl = [
        {
            image: Growth,
            reason: "Business Growth Roadmap",
            alt: "Growth"
        },
        {
            image: Price,
            reason: "Best Price",
            alt: "BestPrice"
        },
        {
            image: Support,
            reason: "24*7 Support Assistance",
            alt: "Support"
        },
        {
            image: Quality,
            reason: "Best Quality, No disputes",
            alt: "Quality"
        },
        {
            image: Compare,
            reason: "Compare & Choose",
            alt: "Compare"
        },
        {
            image: Experience,
            reason: "Smoother Experience",
            alt: "Experience"
        },
    ]

    return (
        <div className='card'>
            <div className='card-body' style={{ backgroundColor: "#c3ddf938" }}>
                <div className='d-flex justify-content-between'>
                    <div><img src={BizowalLogo} alt="BizowalLogo" /></div>
                    <div className='d-flex align-items-center'>
                        <img src={PhonePic} alt="PhonePic" />
                        <p>Need help?</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='m-5' style={{ width: "20rem" }}>
                        <div className='card' style={{ borderRadius: "1rem", lineHeight: "1rem" }}>
                            <div className='d-flex justify-content-between align-items-center card-body'
                                style={{
                                    boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)",
                                    borderRadius: "1rem"
                                }}
                            >
                                <div>Sort by</div>
                                <div style={{ border: "1px solid", borderColor: "white", borderRadius: "1.5rem", boxShadow: "0rem 0.25rem 0.25rem 0rem #407BFF" }}>
                                    <img src={DownArrowPic} alt="DownArrowPic" width="28rem" style={{ padding: "0.3rem" }} />
                                </div>
                            </div>
                        </div>
                        <div className='card' style={{ marginTop: "1rem" }}>
                            <div className='card-body' style={{ boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)" }}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>Filter</h5>
                                    <img src={BlueDownArrow} alt="BlueDownArrow" width="17rem" height="10rem" />
                                </div>
                                <img src={Line} alt="LinePic" width="18rem" />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6>Budget</h6>
                                    <img src={BlueDownArrow} alt="BlueDownArrow" width="17rem" height="10rem" />
                                </div>
                                <img src={Line} alt="LinePic" width="18rem" />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h8>Experience</h8>
                                    <img src={BlueDownArrow} alt="BlueDownArrow" width="17rem" height="10rem" />
                                </div>
                                <img src={Line} alt="LinePic" width="18rem" />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h8>Portfolio</h8>
                                    <img src={BlueDownArrow} alt="BlueDownArrow" width="17rem" height="10rem" />
                                </div>
                                <img src={Line} alt="LinePic" width="18rem" />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h8>Timeline</h8>
                                    <img src={BlueDownArrow} alt="BlueDownArrow" width="17rem" height="10rem" />
                                </div>
                                <img src={Line} alt="LinePic" width="18rem" />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h8>Start Date</h8>
                                    <img src={BlueDownArrow} alt="BlueDownArrow" width="17rem" height="10rem" />
                                </div>
                                <img src={Line} alt="LinePic" width="18rem" />

                            </div>
                        </div>
                        <div className='card'
                            style={{
                                marginTop: "10rem",
                                backgroundColor: "#F6F6FD",
                                borderRadius: "3rem",
                                boxShadow: "0.3125rem 0.25rem 0.4375rem 0rem rgba(121, 168, 224, 0.65)"
                            }}>
                            <div className='card-body'>
                                <h3>Why Choose Bizowl?</h3>
                                {whyChooseBizowl?.map((item, index) => (
                                    <div key={index}
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "start",
                                            alignItems: "center",
                                            marginTop: "0.5rem",
                                            marginBottom: "0.5rem"
                                        }}>
                                        <img alt='' src={item?.image} />
                                        <h8 style={{ marginLeft: "1rem" }}>{item?.reason}</h8>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='card'
                            style={{
                                marginTop: "5rem",
                                borderRadius: "3rem",
                                boxShadow: "0.3125rem 0.25rem 0.4375rem 0rem rgba(121, 168, 224, 0.65)"
                            }}>
                            <div className='card-body'>
                                <h3>Best Practices</h3>
                                <p>Do not share you number your number with your business partner.</p>
                                <img src={Image1} alt="Image1" width="100rem" />
                            </div>
                        </div>
                    </div>
                    <div>
                        {partners.map((item, index) => (
                            <div className='m-5 d-flex'>
                                <div key={index}
                                    className='card'
                                    style={{
                                        height: "8rem",
                                        width: "11rem",
                                        backgroundColor: item?.bgColor,
                                        border: "0.2rem solid",
                                        borderColor: "white"
                                    }}
                                >
                                    <div className='card-body'>
                                        <div
                                            className='d-flex justify-content-between'
                                            style={{
                                                border: "2px solid",
                                                borderColor: item?.borderColor,
                                                borderRadius: "0.5rem",
                                                padding: "0.5rem",
                                                width: "100%",
                                                fontSize: "large",
                                                backgroundColor: "#F7FCFB"
                                            }}
                                        >
                                            {item?.letters.map((letter, index) => (
                                                <div key={index}>
                                                    <span style={{ fontWeight: "bold", fontSize: "2rem", color: letter?.color1 }}>{letter?.letter1}</span>
                                                    <span style={{ fontWeight: "bold", fontSize: "2rem", color: letter?.color2 }}>{letter?.letter2}</span>
                                                    <span style={{ fontWeight: "bold", fontSize: "2rem", color: letter?.color3 }}>{letter?.letter3}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p style={{ color: "#407BFF", fontSize: "small" }}>Portfolio</p>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "2rem", boxShadow: "0.25rem 0.25rem 0.9375rem 0px #407BFF6B" }}>
                                    <div className='card' style={{ width: "35rem" }}>
                                        <div className='card-body d-flex justify-content-between'>
                                            <div className='d-flex flex-column align-items-start'>
                                                <h5 style={{ fontWeight: "bold" }}>Features</h5>
                                                <p>2 Revisions</p>
                                                <p>24*7 Support</p>
                                                <p>3 Samples to choose</p>
                                            </div>
                                            <div className='d-flex flex-column justify-content-start' style={{ fontSize: "0.9rem" }}>
                                                <div>
                                                    <h8>Timeline</h8>
                                                    <p style={{ fontWeight: "bold" }}>2 Weeks</p>
                                                </div>
                                                <div>
                                                    <h8>Start Date</h8>
                                                    <p style={{ fontWeight: "bold" }}>Immediately</p>
                                                </div>
                                                <div>
                                                    <h8>Payment Structure</h8>
                                                    <p style={{ fontWeight: "bold" }}>2 Installments</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h8 style={{ fontSize: "small" }}>Total Price Included GST</h8>
                                                    <p style={{ fontWeight: "bold" }}>₹ 11,500</p>
                                                </div>
                                                <button className="btn btn-primary btn-sm">Get Started</button>
                                                <div style={{ marginTop: "1rem" }}>
                                                    <text style={{ fontSize: "small" }}>Communicate</text>
                                                    <div className="d-flex justify-content-evenly" style={{ fontSize: "small" }}>
                                                        <button className="btn btn-primary btn-sm">
                                                            <img src={MessageImg} alt="MessageImg" width="20rem" height="20rem" />
                                                        </button>
                                                        <button className="btn btn-primary btn-sm">
                                                            <img src={PhoneImg} alt="PhoneImg" width="20rem" height="20rem" />
                                                        </button>
                                                        <button className="btn btn-primary btn-sm">
                                                            <img src={VideoImg} alt="VideoImg" width="20rem" height="20rem" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card'>
                                        <div className='d-flex justify-content-between card-body' style={{ backgroundColor: "#F1FFFC " }}>
                                            <div className='d-flex flex-column align-items-start'>
                                                <h8>Total Experience</h8>
                                                <text style={{ fontWeight: "bold" }}>5 Years</text>
                                            </div>
                                            <div className='d-flex flex-column align-items-start'>
                                                <h8>Ratings</h8>
                                                <div>
                                                    {Array.from({ length: ratings }, (_, index) => (
                                                        <img key={index} src={Star} alt="Star" width="20rem" />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <h8>Post Service</h8>
                                                <text style={{ fontWeight: "bold" }}>Yes</text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PopupModal />
        </div>
    )
}

export default Service
