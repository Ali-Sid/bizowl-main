// import { useLocation } from 'react-router-dom';
// import { partnerDB } from '../../config/firebase';
// import { useEffect, useState } from 'react';
// import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

// const CompareServices = () => {
//   const location = useLocation();
//   const queryString = new URLSearchParams(location.search);
//   const servicesIds = queryString.get('services') ? queryString.get('services').split(",").map(id => id.trim()) : [];
//   const [servicesData, setServicesData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServicesData = async () => {
//       if (servicesIds.length === 0) {
//         setLoading(false);
//         return;
//       }
//       try {
//         console.log(servicesIds, "Parsed service IDs from URL");
//         const prDataRef = collection(partnerDB, "prData");
//         const servicesData1 = await Promise.all(
//           servicesIds.map(async (id) => {
//             const docRef = doc(prDataRef, id);
//             const docSnap = await getDoc(docRef);
//             console.log(`Fetching document with ID: ${id}`);
//             console.log(`Document exists: ${docSnap.exists()}`);
//             if (docSnap.exists()) {
//               console.log(`Document data:`, docSnap.data());
//               return { id: docSnap.id, ...docSnap.data() };
//             } else {
//               console.log(`No document found for ID: ${id}`);
//               return null;
//             }
//           })
//         );
//         setServicesData(servicesData1.filter(doc => doc !== null));
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching services data:", error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchServicesData();
//   }, []);

//   useEffect(() => {
//     console.log(servicesData, "Updated services data");
//   }, [servicesData]);

//   return (
//     <div>
//       <h1>Compare Services</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         servicesData.map((service) => (
//           <div key={service.id}>
//             <h2>{service.name}</h2>
//             <p>{service.description}</p>
//             {/* display other service data */}
//           </div>
//         ))
//       )}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

// export default CompareServices;
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { partnerDB } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import PhonePic from "./assets/Vector (1).png";
import BizowalLogo from "./assets/logo-of-BIZOWL--Business-Services.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import svg from "./../Services/assets/compareSVG.svg";

const CompareServices = () => {
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  const servicesIds = queryString.get("services")
    ? queryString
        .get("services")
        .split(",")
        .map((id) => Number(id.trim()))
    : [];

  console.log("servicesIds:", servicesIds);

  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllServicesData = async () => {
      try {
        const prDataRef = collection(partnerDB, "prData");
        const snapshot = await getDocs(prDataRef);
        const allServicesData = snapshot.docs.map((doc) => {
          const data = doc.data();
          const letters = [
            {
              letter: data.name.substring(0, 3).toUpperCase(),
              color: getRandomColor(),
            },
          ];

          return {
            id: Number(doc.id),
            ...data,
            letters,
            bgColor: colors[Math.floor(Math.random() * colors.length)],
            borderColor: getRandomColor(),
          };
        });
        console.log("servicesData:", allServicesData);
        setServicesData(allServicesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services data:", error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchAllServicesData();
  }, []);

  const getRandomColor = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 80 + 20);
    const l = Math.floor(Math.random() * 30 + 50);
    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  const colors = [
    "rgba(246, 246, 253, 0.8)",
    "rgba(229, 230, 249, 0.8)",
    "rgba(229, 225, 249, 0.8)",
    "rgba(255, 238, 247, 0.8)",
    "rgba(225, 242, 239, 0.8)",
    "rgba(255, 249, 234, 0.8)",
  ];

  const MiddleLetterStyled = ({ letter }) => {
    // Calculate the middle index of the string
    const middleIndex = Math.floor(letter.letter.length / 2);

    // Split the string into beginning, middle, and end parts
    const beginningPart = letter.letter.substring(0, middleIndex);
    const middleLetter = letter.letter[middleIndex];
    const endPart = letter.letter.substring(middleIndex + 1);

    return (
      <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
        {beginningPart}
        <span style={{ color: letter.color }}>{middleLetter}</span>
        {endPart}
      </span>
    );
  };

  const filteredServices =
    servicesData.length > 0 && servicesIds.length > 0
      ? servicesData.filter((service) => servicesIds.includes(service.id))
      : servicesData;

  console.log("filteredServices:", filteredServices);

  return (
    <div className="card">
      <div
        className="d-flex justify-content-between"
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "16px",
        }}
      >
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        {/* <Link onClick={() => navigate()}></Link> */}
        <Link href="/service">
          <ArrowBackIosNewIcon />
          Back to quotes
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "#c3ddf938",
          margin: "20px",
          borderRadius: "20px",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <div>
            <img alt="compare" src={svg} width="300px" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "auto",
            }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div
                  style={{
                    borderRadius: "15px",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                    margin: "10px",
                    height: "auto",
                    width: "10%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div
                    key={service.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="d-flex justify-content-center"
                        style={{
                          border: "3px solid",
                          borderColor: service?.borderColor,
                          borderRadius: "1rem",
                          padding: "0.5rem",
                          width: isMobile ? "100%" : "30%",
                          fontSize: "extraLarge",
                          backgroundColor: "#F7FCFB",
                        }}
                      >
                        {service?.letters.map((letter, index) => (
                          <div key={index} style={{ letterSpacing: "10px" }}>
                            <MiddleLetterStyled letter={letter} />
                          </div>
                        ))}
                      </div>
                    </div>
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
                          alignItems: "flex-start",
                        }}
                      >
                        <p style={{ color: "grey", fontSize: "14px" }}>
                          Total Price Included GST
                        </p>
                        <h2 style={{ fontWeight: "bold" }}>
                          ₹{service.packages[0].features.price}
                        </h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <p style={{ color: "grey", fontSize: "14px" }}>
                          Delivery Time
                        </p>
                        <h2 style={{ fontWeight: "bold" }}>
                          ₹{service.packages[0].features.deliveryTime}
                        </h2>
                      </div>
                    </div>
                    <Button
                      sx={{ borderRadius: "10px", marginTop: "1rem" }}
                      fullWidth
                      variant="contained"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p>No services found.</p>
            )}
          </div>
          {error && <p>Error: {error}</p>}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "20%" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Total No. of Distribution Network</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Medium of Distribution</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Delivery Time</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Logo Branding</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SEO</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Google News Tagging</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Industry Specific</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Geo Tagging - Local Region Targetting</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Images Included</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Words Limit</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Proof Read of Press Release</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Index on Search Engine</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Placement on News Site</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Same Day Distribution</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div style={{ width: "80%", marginTop: "0.2rem" }}>
            <Table>
              <TableBody>
                <TableRow>
                  {filteredServices.map((service, index) => (
                    <TableCell key={index}>
                      <h2 style={{ fontWeight: "bold" }}>
                        {service.packages[0].features.totalMediaOutlets}
                      </h2>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {filteredServices.map((service, index) => (
                    <TableCell key={index}>
                      <h2 style={{ fontWeight: "bold" }}>
                        {service.packages[0].features.mediumOfDistribution
                          .map((e) => e)
                          .join(", ")}
                      </h2>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {filteredServices.map((service, index) => (
                    <TableCell key={index}>
                      <h2 style={{ fontWeight: "bold" }}>
                        {service.packages[0].features.deliveryTime}
                      </h2>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {filteredServices.map((service, index) => (
                    <TableCell key={index}>
                      <h2 style={{ fontWeight: "bold" }}>
                        {service.packages[0].features.seo}
                      </h2>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {filteredServices.map((service, index) => (
                    <TableCell key={index}>
                      <h2 style={{ fontWeight: "bold" }}>
                        {service.packages[0].features.googleNewsTagging}
                      </h2>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {filteredServices.map((service, index) => (
                    <TableCell key={index}>
                      <h2 style={{ fontWeight: "bold" }}>
                        {service.packages[0].features.industrySpecific}
                      </h2>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {filteredServices.map((service, index) => (
                    <TableCell key={index}>
                      <h2 style={{ fontWeight: "bold" }}>
                        {service.packages[0].features.geoTag}
                      </h2>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  {filteredServices.map((service, index) => (
                    <TableCell key={index}>
                      <h2 style={{ fontWeight: "bold" }}>
                        {service.packages[0].features.imageIncluded}
                      </h2>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                {filteredServices.map((service, index) => (
                  <TableCell key={index}>
                    <h2 style={{ fontWeight: "bold" }}>
                      {service.packages[0].features.wordsLimit}
                    </h2>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {filteredServices.map((service, index) => (
                  <TableCell key={index}>
                    <h2 style={{ fontWeight: "bold" }}>
                      {service.packages[0].features.proofRead}
                    </h2>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {filteredServices.map((service, index) => (
                  <TableCell key={index}>
                    <h2 style={{ fontWeight: "bold" }}>
                      {service.packages[0].features.indexOnSearchEngines}
                    </h2>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {filteredServices.map((service, index) => (
                  <TableCell key={index}>
                    <h2 style={{ fontWeight: "bold" }}>
                      {service.packages[0].features.newsSitePlacement.map(e => e).join(', ')}
                    </h2>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {filteredServices.map((service, index) => (
                  <TableCell key={index}>
                    <h2 style={{ fontWeight: "bold" }}>
                      {service.packages[0].features.mediumOfDistribution.map(e => e).join(', ')}
                    </h2>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                {filteredServices.map((service, index) => (
                  <TableCell key={index}>
                    <h2 style={{ fontWeight: "bold" }}>
                      {service.packages[0].features.mediumOfDistribution.map(e => e).join(', ')}
                    </h2>
                  </TableCell>
                ))}
              </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareServices;
