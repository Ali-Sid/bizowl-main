import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";
import "../../Styles/AuthStyles/banner.scss";
import {
  ContactUsDesign,
  SubHeader,
} from "../../Components/Design/fixedDesigns";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "../../Components/Extra/Slider";
import axios from "axios";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { GridLoader } from "react-spinners";
import { Helmet } from "react-helmet";

const NameGen = () => {
  const [generatedNames, setGeneratedNames] = useState([]);
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");
  const [length, setLength] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const backgroundColors = [
    "rgb(235,242,250)",
    "rgb(225,243,239)",
    "rgb(229,230,249)",
    "rgb(255,238,248)",
  ];

  const [boxColors, setBoxColors] = useState([]);

  useEffect(() => {
    const randomColors = generatedNames.map(() => {
      return backgroundColors[
        Math.floor(Math.random() * backgroundColors.length)
      ];
    });
    setBoxColors(randomColors);
  }, [generatedNames]);

  const handleGenerateNames = async () => {
    setIsLoading(true);
    try {
      // Check if category, keywords, and length are provided
      const response = await axios.post(
        // "http://localhost:5000/generate-names",
        "https://bizowl-backend.vercel.app/generate-names",
        {
          category: category,
          keywords: keywords,
          length: length,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure you're sending JSON
          },
        }
      );
      console.log(response);

      // Assuming the names are separated by new lines
      const rawNames = response.data.names;

      // Filter out any lines that don't match the expected format of a name
      // This is a basic example; you might need to adjust the condition based on the actual format of the names
      const cleanedNames = rawNames.filter((name) =>
        name.match(/^[A-Za-z0-9\s]+$/)
      );

      // Clean up names by removing all digits and dots
      const newCleanedNames = cleanedNames.map((name) =>
        name.replace(/\d+|\./g, "")
      );

      // Now `cleanedNames` contains only the names, without any extra sentences
      setGeneratedNames(newCleanedNames);
    } catch (error) {
      console.error("Error generating names:", error);
    } finally {
      setIsLoading(false); // Reset loading state to false after fetching data
    }
  };

  return (
    <>
      <Helmet>
        <title>Generate Perfect Business Names | Company Name Generator</title>
        <meta
          name="description"
          content="Find the perfect name for your business with our innovative company name generator. Get creative business name ideas effortlessly. Start building your brand today with Bizowl's powerful tool."
        />
        <meta
          name="keywords"
          content="business name ideas, Company Name Generator"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Company Name Generator",
              "description": "Find and generate the best and perfect name for your business with our innovative company name generator. Get creative business name ideas effortlessly. Start building your brand today with Bizowl's powerful tool.",
              "url": "https://www.bizzowl.com/company-name-generator",
              "author": {
                "@type": "Organization",
                "name": "Bizowl - Business Services - From idea to Growth"
              },
              "datePublished": "2024-03-23",
              "keywords": ["Company Name Generator"],
              "image": "https://res.cloudinary.com/dr1pmtefx/image/upload/v1711399553/Company-Name-Generator-Image_u0jqnb.jpg",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>
      <NavBar />
      <div style={{ backgroundColor: "#fff" }}>
        {SubHeader("Business Name Generator", "nameGenerator", "home", "home")}
        <div className="banner" style={{ padding: "10%" }}>
          <div className="banner-text">
            <h1
              className="banner-text-future"
              style={{
                fontFamily: "'Margarine', sans-serif",
                color: "#1C6ED0",
                transform: "translate(12%, 10%)",
                width: "100%",
              }}
            >
              future
            </h1>
            <h1 style={{ fontFamily: "'Cabin', sans-serif" }}>
              Your <span className="strikethrough">idea</span> needs the perfect
              name
            </h1>
          </div>
          <div className="banner-v">
            <span>V</span>
          </div>
          <div>
            <h3 style={{ color: "#4B4646" }}>
              Kickstart your brand story with our AI-powered Business Name
              Generator
            </h3>
          </div>
          <div className="select-container" style={{ marginTop: "80px" }}>
            <select
              className="search-bar"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Enter Business Category
              </option>
              <option>Banking & Finance</option>
              <option>Logistics & Transportation</option>
              <option>Healthcare & Medical</option>
              <option>Education & Learning</option>
              <option>Fashion & Lifestyle</option>
              <option>Food & Beverages</option>
              <option>Gaming</option>
              <option>Tourism</option>
              <option>Real Estate</option>
              <option>E-Commerce</option>
              <option>Other</option>
            </select>
          </div>
          <div
            className="input-container"
            class="input-group mb-3"
            style={{
              marginTop: "30px",
              height: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", width: "fit-content" }}>
              <input
                type="text"
                class="form-control"
                className="input-field"
                style={{
                  borderRadius: "50px",
                  border: "1px solid black",
                  paddingLeft: "10px",
                  paddingRight: "20%",
                }}
                placeholder="Enter Keywords"
                aria-label="Enter Keywords"
                aria-describedby="button-addon2"
                onChange={(e) => setKeywords(e.target.value)}
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                className="input-button"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  border: "none",
                  backgroundColor: "#1c6ed0",
                  color: "#fff",
                  borderRadius: "50px",
                }}
                onClick={handleGenerateNames}
              >
                Generate
              </button>
            </div>
          </div>
          <div>
            <div>
              <h6
                style={{
                  fontWeight: "bold",
                  fontFamily: "'Inter', sans-serif",
                  margin: "20px",
                }}
              >
                Any Length{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </h6>
            </div>
            <div className="slider-container">
              <Slider value={length} onChange={(value) => setLength(value)} />
            </div>
          </div>
          <div>
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GridLoader color="#1C6ED0" loading={isLoading} size={15} />
              </div> // Conditionally render loading animation
            ) : (
              <Grid templateColumns="repeat(3, 1fr)" gap={8}>
                {generatedNames.map((name, index) => (
                  <GridItem key={index}>
                    <Box
                      display="flex"
                      direction="column"
                      backgroundColor={boxColors[index]}
                      p={4}
                      borderRadius="15px"
                      color="black"
                      // display="flex" // Ensure the Box is a flex container
                      justifyContent="center" // Center the content horizontally
                      alignItems="center" // Center the content vertically
                      h="60px" // Ensure the Box takes up the full height of the GridItem
                      // textAlign="center"
                      // pt="15px"
                      className="box-shadow"
                    >
                      <Text textAlign="center" fontWeight="semibold">
                        {name}
                      </Text>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            )}
          </div>
        </div>
        <div className="contactUs">{ContactUsDesign()}</div>
      </div>
      <Footer />
    </>
  );
};

export default NameGen;
