import {
  useMediaQuery,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BizowalLogo from "./assets/logo-of-BIZOWL--Business-Services.png";
import PhonePic from "./assets/Vector (1).png";
import ServiceBox from "./util/ServiceBox";
import svg from "./../Services/assets/compareSVG.svg";

const CompareServices = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const services = searchParams.getAll("services")[0];
  const serviceIds = services ? services.split(",") : [];
  console.log(serviceIds);
  const [features, setFeatures] = useState({});
  const [servicesData, setServicesData] = useState([]);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    // Fetch the features of each service
    serviceIds.forEach((serviceId) => {
      fetch(`/api/services/${serviceId}/features`)
        .then((response) => response.json())
        .then((data) => {
          setFeatures((prevFeatures) => ({
            ...prevFeatures,
            [serviceId]: data,
          }));
        });
    });
  }, [serviceIds]);

  useEffect(() => {
    // Fetch the services data
    fetch("/api/services")
      .then((response) => response.json())
      .then((data) => {
        setServicesData(data);
      });
  }, []);

  const getServiceObjects = () => {
    console.log("getServiceObjects called");
    console.log("serviceIds:", serviceIds);
    console.log("servicesData:", servicesData);

    const services = serviceIds.map((id) => {
      const service = servicesData.find((s) => s.id === id);
      console.log(`Looking for service with id ${id}:`, service);
      return service;
    });
    return services;
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Total no. of distribution network", "150+", "50+", "35+"),
    createData("Medium of Distribution", "Digital", "Digital", "Digital"),
    createData("Delivery Time", "1 Day", "2 Days", "7 Days"),
    createData("Logo Branding", "Yes", "No", "Yes"),
    createData("SEO", "Yes", "No", "Yes"),
    createData("Google News Tagging", "Yes", "No", "Yes"),
    createData("Industry Specific", "Yes", "No", "Yes"),
    createData("Geo Tagging - Local Region Targetting", "Yes", "No", "Yes"),
    createData("Total no of distribution network", "Yes", "No", "Yes"),
    createData("Images Included", 1, 4, 3),
    createData("Words Limit", 400, 650, 350),
    createData("Proof Read of Press Release", "Yes", "No", "Yes"),
    createData("Index on Search Engines", "Yes", "No", "Yes"),
    createData("Placement on News   Sites", "Yes", "No", "Yes"),
    createData("Same Day Distibution", "Yes", "No", "Yes"),
  ];

  return (
    <div className="card">
      <div className="card-body" style={{ backgroundColor: "#c3ddf938" }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <a href="/">
            <img
              src={BizowalLogo}
              alt="BizowlLogo"
              width={isMobile ? "120px" : "200px"}
            />
            </a>
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
      <div style={{ height: "90vh", margin: "50px" }}>
        <div style={{ height: "30%", margin: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <div>
              <img alt="compare" src={svg} width="300px" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "300px",
                marginLeft: "20px",
                borderRadius: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "15px",
              }}
            >
              <div
                style={{
                  border: "1px solid #70a6e6",
                  borderRadius: "5px",
                  width: "120px",
                  padding: "1px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>
                  C<span style={{ color: "#70a6e6" }}>R</span>B
                </h3>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>Total Price Included GST</p>
                    <h5>₹11,500</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>Delivery Time</p>
                    <h5>1 day</h5>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Button fullWidth variant="contained">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "300px",
                marginLeft: "20px",
                borderRadius: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "15px",
              }}
            >
              <div
                style={{
                  border: "1px solid #70a6e6",
                  borderRadius: "5px",
                  width: "120px",
                  padding: "1px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>
                  C<span style={{ color: "#70a6e6" }}>R</span>B
                </h3>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>Total Price Included GST</p>
                    <h5>₹11,500</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>Delivery Time</p>
                    <h5>1 day</h5>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Button fullWidth variant="contained">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "300px",
                marginLeft: "20px",
                borderRadius: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "15px",
              }}
            >
              <div
                style={{
                  border: "1px solid #70a6e6",
                  borderRadius: "5px",
                  width: "120px",
                  padding: "1px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>
                  C<span style={{ color: "#70a6e6" }}>R</span>B
                </h3>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>Total Price Included GST</p>
                    <h5>₹11,500</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>Delivery Time</p>
                    <h5>1 day</h5>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Button fullWidth variant="contained">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "70%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{ width: '20%' }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="left" sx={{ width: '20%' }}>{row.calories}</TableCell>
                    <TableCell align="left" sx={{ width: '20%' }}>{row.fat}</TableCell>
                    <TableCell align="left" sx={{ width: '20%' }}>{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default CompareServices;
