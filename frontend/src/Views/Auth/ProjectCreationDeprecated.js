// import React from "react";
// import "../../Styles/AuthStyles/productStyle.scss";
// import "../../Styles/Fixed/staticStyle.scss";
// import "../../Styles/Fixed/fixedDesign.scss";
// import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom";
// import Select from "react-select";
// import { sweetAlertFunction } from "../../Components/Extra/sweetAlert";
// import { sendEmail, sendMail } from "../../Components/Extra/email";

// const ProjectCreation = () => {
//   const navigate = useNavigate();

//   const industryOption = [
//     { value: "Banking & Finance", label: "Banking & Finance" },
//     {
//       value: "Logistics & Transportation",
//       label: "Logistics & Transportation",
//     },
//     { value: "Healthcare & Medical", label: "Healthcare & Medical" },
//     { value: "Education & Learning", label: "Education & Learning" },
//     { value: "Fashion & Lifestyle", label: "Fashion & Lifestyle" },
//     { value: "Food and Beverages", label: "Food and Beverages" },
//     { value: "Gaming", label: "Gaming" },
//     { value: "Tourism", label: "Tourism" },
//     { value: "Real Estate", label: "Real Estate" },
//     { value: "E-commerce", label: "E-commerce" },
//     { value: "Other", label: "Other" },
//   ];
//   const services = [
//     { value: "Fundamental Services", label: "Fundamental Services" },
//     { value: "Web Development", label: "Web Development" },
//     { value: "Digital Marketing", label: "Digital Marketing" },
//     { value: "Design", label: "Design" },
//     { value: "Marketing", label: "Marketing" },
//     { value: "Advertising", label: "Advertising" },
//   ];
//   const timelineOption = [
//     { value: "Two weeks", label: "Two weeks" },
//     { value: "One Month", label: "One Month" },
//     { value: "Two Month", label: "Two Month" },
//     { value: "Three Month +", label: "Three Month +" },
//   ];
//   const budgetOption = [
//     { value: "0-5 K", label: "0-5 K" },
//     { value: "5-25 K", label: "5-25 K" },
//     { value: "25-50 K", label: "25-50 K" },
//     { value: "50-100 K", label: "50-100 K" },
//     { value: "1- 5 L", label: "1- 5 L" },
//     { value: "5 L+", label: "5 L+" },
//   ];
//   const sources = [
//     { value: "Google", label: "Google" },
//     { value: "Referral", label: "Referral" },
//     { value: "Facebook", label: "Facebook" },
//     { value: "Instagram", label: "Instagram" },
//     { value: "LinkedIn", label: "LinkedIn" },
//     { value: "Google", label: "Google" },
//     { value: "Other", label: "Other" },
//   ]

//   const [isProductSection1, setIsProductSection1] = useState(true);

//   const [serviceType, setServiceType] = useState("");
//   const [goals, setGoals] = useState("");
//   const [challenges, setChallenges] = useState("");
//   const [projectType, setProjectType] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [comments, setComments] = useState("");
//   const [projectTimeline, setProjectTimeline] = useState("");
//   const [projectBudget, setProjectBudget] = useState("");
//   const [projectRequirements, setProjectRequirements] = useState("");
//   const [userFirstName, setUserFirstName] = useState("");
//   const [userLastName, setUserLastName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userPhone, setUserPhone] = useState("");
//   const [file, setFile] = useState();
//   const [source, setSource] = useState()
//   const [showInput, setShowInput] = useState(false);
//   const [fileUpload, setFileUpload] = useState("")

//   const handleFile = (e) => {
//     setFile(e.target.files[0]);
//     handleFileSubmit(e);
//     setFileUpload(e.target.value);
//   };

//   const handleFileSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", file);
//     fetch("https://path/to/api", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((success) => {
//         // Handle the successful response
//         alert('Your file has been uploaded succesfully!', success)
//       })
//       .catch((error) => console.log(error));
//   };

//   const submitFirstSectionReport = (isTrue) => {
//     isTrue ? setIsProductSection1(false) : setIsProductSection1(true);
//   };
//   const submitSecondSectionReport = async () => {
//     var isMailSent = await sendMail(
//       projectType,
//       projectTimeline,
//       projectBudget,
//       projectRequirements,
//       userFirstName,
//       userLastName,
//       userEmail,
//       userPhone,
//       "Project Details"
//     );
//     if (isMailSent)
//       await sweetAlertFunction(
//         "Submitted",
//         "Thank You For Submitting The Project Details, Our Executive Will Get In Touch With You Shortly.",
//         "success",
//         navigate,
//         "/home"
//       );
//   };

//   return (
//     <>
//       {isProductSection1 ? (
//         <div className="productSection1">
//           <div className="productHeadSection">
//             <div className="productImageSection">
//               <img src="Images/logoWhite.png" style={{ width: "50%" }} alt="" />
//               <br />
//               <img
//                 src="Images/homepage/productImage1.png"
//                 style={{ width: "80%" }}
//                 alt=""
//               />
//             </div>
//             <div className="productTextSection">
//               <div className="productMainHead">
//                 <div className="title2 padding10">
//                   {" "}
//                   Tell Us About{" "}
//                   <span className="heighlighted"> Your Project</span>
//                 </div>
//                 <div className="flex marginTop20">
//                   {/* <div className='left fullWidth padding10 fontSize15'>
//                     Industry Of Business
//                     <input type='text' placeholder='Industry Of Business' className='inputStyleCommon colorBlack textBackgroundGrey' />
//                     </div> */}

//                   <div className="left fullWidth padding10 fontSize15">
//                     Industry Of Business
//                     <Select
//                       className="selectProductStyle"
//                       options={industryOption}
//                       isClearable
//                       value={industryOption.filter(
//                         (e) => e.value === projectType
//                       )}
//                       onChange={(e) => {
//                         setProjectType(e.value);
//                       }}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop20">
//                   {/* <div className='left fullWidth padding10 fontSize15'>
//                     Industry Of Business
//                     <input type='text' placeholder='Industry Of Business' className='inputStyleCommon colorBlack textBackgroundGrey' />
//                     </div> */}

//                   <div className="left fullWidth padding10 fontSize15">
//                     Select the Services
//                     <Select
//                       className="selectProductStyle"
//                       options={services}
//                       isClearable
//                       value={services.filter((e) => e.value === serviceType)}
//                       onChange={(e) => {
//                         setServiceType(e.value);
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Goals or Objectives for the Selected Service
//                     <textarea
//                       value={goals}
//                       onChange={(e) => {
//                         setGoals(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Goals or Objectives"
//                       className="inputStyleCommon textBackgroundGrey colorBlack textArea"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Current Challenges
//                     <textarea
//                       value={challenges}
//                       onChange={(e) => {
//                         setChallenges(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Write down the challenges you are currently facing"
//                       className="inputStyleCommon textBackgroundGrey colorBlack textArea"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Project Requirements
//                     <textarea
//                       value={projectRequirements}
//                       onChange={(e) => {
//                         setProjectRequirements(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Project Requirements"
//                       className="inputStyleCommon textBackgroundGrey colorBlack textArea"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Desired Project Start Date
//                     <input
//                       value={startDate}
//                       onChange={(e) => {
//                         setStartDate(e.target.value);
//                       }}
//                       type="date"
//                       // placeholder="When do you want to start your desired project"
//                       className="inputStyleCommon textBackgroundGrey colorBlack"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Timeline Of Project
//                     <Select
//                       className="selectProductStyle"
//                       options={timelineOption}
//                       isClearable
//                       value={timelineOption.filter(
//                         (e) => e.value === projectTimeline
//                       )}
//                       onChange={(e) => {
//                         setProjectTimeline(e.value);
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Budget
//                     <Select
//                       className="selectProductStyle"
//                       options={budgetOption}
//                       isClearable
//                       value={budgetOption.filter(
//                         (e) => e.value === projectBudget
//                       )}
//                       onChange={(e) => {
//                         setProjectBudget(e.value);
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Additional Comments
//                     <textarea
//                       value={comments}
//                       onChange={(e) => {
//                         setComments(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Additional Comments"
//                       className="inputStyleCommon textBackgroundGrey colorBlack textArea"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Upload
//                     <input
//                       value={fileUpload}
//                       onChange={handleFile}
//                       type="file"
//                       // placeholder="Project Requirements"
//                       className="inputStyleCommon textBackgroundGrey colorBlack"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     How Did You Hear About Us
//                     <Select
//                       className="selectProductStyle"
//                       options={sources}
//                       isClearable
//                       value={sources.filter(
//                         (e) => e.value === source
//                       )}
//                       onChange={(e) => {
//                         setSource(e.value);
//                         if(e.value === "Other") {
//                           setShowInput(true)
//                         } else {
//                           setShowInput(false)
//                         }
//                       }}
//                     />
//                     {showInput && <input type="text" className="inputStyleCommon textBackgroundGrey colorBlack" placeholder="Enter your option here" style={{marginTop: "20px", borderRadius: "5px"}} />}
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     <label>
//                     <input
//                       value={projectRequirements}
//                       onChange={(e) => {
//                         setProjectRequirements(e.target.value);
//                       }}
//                       type="checkbox"
//                       // placeholder="Project Requirements"
//                       className="smallCheckbox"
//                     />
//                     WhatsApp, Call, SMS Receive Confirmation
//                     </label>
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     <label>
//                     <input
//                       value={projectRequirements}
//                       onChange={(e) => {
//                         setProjectRequirements(e.target.value);
//                       }}
//                       type="checkbox"
//                       // placeholder="Project Requirements"
//                       className="smallCheckbox"
//                     />
//                     Terms and Conditions, Data Usage, and Privacy Policy
//                     Consent
//                     </label>
//                   </div>
//                 </div>

//                 <div className="marginTop20 padding10">
//                   {/* <button className='btn btn-danger width30 textCapitalize' onClick={()=>{submitSecondSectionReport()}}> Cancel </button> */}
//                   <button
//                     className="btn btn-primary width100px textCapitalize"
//                     onClick={() => {
//                       submitFirstSectionReport(true);
//                     }}
//                   >
//                     {" "}
//                     NEXT{" "}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="productSection2">
//           <div className="productHeadSection">
//             <div className="productImageSection">
//               <img src="Images/logoWhite.png" style={{ width: "50%" }} alt="" />
//               <br />
//               <img
//                 src="Images/homepage/productImage2.png"
//                 style={{ width: "70%" }}
//                 alt=""
//               />
//             </div>
//             <div className="productTextSection">
//               <div className="productMainHead">
//                 <div className="title2 padding10">
//                   {" "}
//                   Tell Us About <span className="heighlighted"> You</span>
//                 </div>
//                 <div className="flex marginTop20">
//                   <div className="left fullWidth padding10 fontSize15">
//                     First Name
//                     <input
//                       value={userFirstName}
//                       onChange={(e) => {
//                         setUserFirstName(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="First Name"
//                       className="inputStyleCommon colorBlack textBackgroundGrey"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Last Name
//                     <input
//                       value={userLastName}
//                       onChange={(e) => {
//                         setUserLastName(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Last Name"
//                       className="inputStyleCommon colorBlack textBackgroundGrey"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Email
//                     <input
//                       value={userEmail}
//                       onChange={(e) => {
//                         setUserEmail(e.target.value);
//                       }}
//                       type="text"
//                       placeholder="Email"
//                       className="inputStyleCommon colorBlack textBackgroundGrey"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Phone Number
//                     <input
//                       value={userPhone}
//                       onChange={(e) => {
//                         setUserPhone(e.target.value);
//                       }}
//                       type="number"
//                       placeholder="Phone Number"
//                       className="inputStyleCommon colorBlack textBackgroundGrey"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Company Name (If Applicable)
//                     <input
//                       value={userPhone}
//                       onChange={(e) => {
//                         setUserPhone(e.target.value);
//                       }}
//                       type="number"
//                       placeholder="Phone Number"
//                       className="inputStyleCommon colorBlack textBackgroundGrey"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Physical Address (optional)
//                     <input
//                       value={userPhone}
//                       onChange={(e) => {
//                         setUserPhone(e.target.value);
//                       }}
//                       type="number"
//                       placeholder="Phone Number"
//                       className="inputStyleCommon colorBlack textBackgroundGrey"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Brief Description of the Business
//                     <input
//                       value={userPhone}
//                       onChange={(e) => {
//                         setUserPhone(e.target.value);
//                       }}
//                       type="number"
//                       placeholder="Phone Number"
//                       className="inputStyleCommon colorBlack textBackgroundGrey"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex marginTop10">
//                   <div className="left fullWidth padding10 fontSize15">
//                     Current Online Presence (Mention Website )
//                     <input
//                       value={userPhone}
//                       onChange={(e) => {
//                         setUserPhone(e.target.value);
//                       }}
//                       type="number"
//                       placeholder="Phone Number"
//                       className="inputStyleCommon colorBlack textBackgroundGrey"
//                     />
//                   </div>
//                 </div>

//                 <div className="marginTop20">
//                   {/* <button className='btn btn-primary width30 textCapitalize' onClick={()=>{submitFirstSectionReport(false)}}> Back </button> */}
//                   <button
//                     className="btn btn-primary width100px textCapitalize"
//                     onClick={() => {
//                       submitSecondSectionReport();
//                     }}
//                   >
//                     {" "}
//                     Submit{" "}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default ProjectCreation;
