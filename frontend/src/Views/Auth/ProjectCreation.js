import React, { useEffect } from "react";
import "../../Styles/AuthStyles/productStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import "../../Styles/Fixed/fixedDesign.scss";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { sweetAlertFunction } from "../../Components/Extra/sweetAlert";
import { sendEmail, sendMail } from "../../Components/Extra/email";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, primaryAuth, adminAuth, primaryDB, adminDB } from "../../config/firebase";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useToast } from "@chakra-ui/react";
import { ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import { SubCategoryServicesData } from "../../data/SubCategoryServicesData";
import { createUserWithEmailAndPassword } from "firebase/auth";

const ProjectCreationSchema = yup.object().shape({
  projectType: yup.string().required("Type Of Industry Required"),
  services: yup.string().required("Services Required"),
  subCategoryServices: yup.array().required("Sub Category Services Required"),
  startDate: yup.string().required("Start Date Required"),
  projectTimeline: yup.string().required("Timeline Required"),
  projectBudget: yup.string().required("Budget Required"),
  projectRequirements: yup.string().required("Project Requirement Required"),
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("FirstName Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("LastName Required"),
  email: yup.string().email("Invalid email").required("Email Required"),
  phoneNumber: yup.string().required("Phone Number Required"),
  companyName: yup.string().required("Company Name Required"),
  physicalAddress: yup.string(),
  onlinePresence: yup.string().required("Online Presence Required"),
  competitor: yup.string(),
  businessDescription: yup.string().required("Business Description Required"),
  hearAboutUs: yup.string().required("Required this field"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters long")
    .required("Password Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], 'Must match "password" field value')
    .required("Confirm Password Required"),
});

const ProjectCreation = () => {
  const navigate = useNavigate();
  const [isProductSection1, setIsProductSection1] = useState(true);
  const [termsAndCondition, setTermsAndCondition] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [subcategoriesServices, setSubcategoriesServices] = useState([]);
  const toast = useToast();
  useEffect(() => {
    setSubcategoriesServices(SubCategoryServicesData);
  }, []);

  const industryOption = [
    { value: "Banking & Finance", label: "Banking & Finance" },
    {
      value: "Logistics & Transportation",
      label: "Logistics & Transportation",
    },
    { value: "Healthcare & Medical", label: "Healthcare & Medical" },
    { value: "Education & Learning", label: "Education & Learning" },
    { value: "Fashion & Lifestyle", label: "Fashion & Lifestyle" },
    { value: "Food and Beverages", label: "Food and Beverages" },
    { value: "Gaming", label: "Gaming" },
    { value: "Tourism", label: "Tourism" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "E-commerce", label: "E-commerce" },
    { value: "Other", label: "Other" },
  ];
  const timelineOption = [
    { value: "Two weeks", label: "Two weeks" },
    { value: "One Month", label: "One Month" },
    { value: "Two Month", label: "Two Month" },
    { value: "Three Month +", label: "Three Month +" },
  ];
  const budgetOption = [
    { value: "0-5 K", label: "0-5 K" },
    { value: "5-25 K", label: "5-25 K" },
    { value: "25-50 K", label: "25-50 K" },
    { value: "50-100 K", label: "50-100 K" },
    { value: "1- 5 L", label: "1- 5 L" },
    { value: "5 L+", label: "5 L+" },
  ];
  const serviceOptions = [
    { value: "Fundamental Services", label: "Fundamental Services" },
    { value: "Web Development", label: "Web Development" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Design Services", label: "Design Services" },
    { value: "Marketing", label: "Marketing" },
    { value: "Advertising", label: "Advertising" },
  ];
  const hearAboutUsOptions = [
    { value: "Google", label: "Google" },
    { value: "Referral", label: "Referral" },
    { value: "Facebook", label: "Facebook" },
    { value: "Instagram", label: "Instagram" },
    { value: "LinkedIn", label: "LinkedIn" },
    { value: "Ads", label: "Ads" },
    { value: "Other (Specify)", label: "Other (Specify)" },
  ];

  const firstSectionReport = () => {
    setIsProductSection1(!isProductSection1);
  };

  const handleFormSubmit = async () => {
    try {
      // 1. Extract User Details (Combine and Simplify)
      const userDetails = {
        email: values?.email,
        firstName: values?.firstName,
        lastName: values?.lastName,
        phoneNumber: values?.phoneNumber,
        companyName: values?.companyName,
        onlinePresence: values?.onlinePresence,
        physicalAddress: values?.physicalAddress,
      };
  
      // 2. Create Account Logic (Enhanced Error Handling)
      if (createAccount) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            primaryAuth,
            values?.email,
            values?.password
          );
          const user = userCredential.user;
  
          if (user) {
            userDetails.uid = user.uid;
  
            // 3. Create User Document (Concise and Error Handling)
            const userDocRef = collection(primaryDB, "quotations");
            await addDoc(userDocRef, { ...userDetails }); // Add all user details together

            // New code to send user details to the secondary project
            // const secondaryUserDocRef = collection(adminDB, "userQuotations");
            // await addDoc(secondaryUserDocRef, {...userDetails }); // Send user details to the secondary project
          }
  
          // 4.1 Create Roles Document (Conditional Based on User Type)
          // if (/* condition for assigning "Customer" role */) { // Add check for role assignment
            const rolesRef = collection(primaryDB, "roles");
            await addDoc(rolesRef, { uid: user.uid, role: "Customer" });
          // }
          // 4.2 Create Roles Document for adminDB (Conditional Based on User Type)
          // if (/* condition for assigning "Customer" role */) { // Add check for role assignment
          const adminRolesRef = collection(adminDB, "roles");
          await addDoc(adminRolesRef, { uid: user.uid, role: "Customer" });
        // }
        } catch (error) {
          if (error.code === "auth/email-already-in-use") {
            toast({
              description: "Email Already Used",
              status: "error",
              position: "top",
              duration: 1000,
              isClosable: true,
            });
          } else {
            console.error("Error creating user:", error);
            // Consider additional error handling for different error codes
          }
        }
      }
  
      // 5.1 Create Quotation Document (Refactored and Secured)
      const serviceDocRef = collection(primaryDB, "quotations");
      await addDoc(serviceDocRef, {
        // Exclude password from quotation details for security
        ...userDetails, // Include all user details except password
        projectType: values?.projectType,
        timeLine: values?.projectTimeline,
        budget: values?.projectBudget,
        requirements: values?.projectRequirements,
        services: values?.services,
        subCategoryServices: values?.subCategoryServices,
        startDate: values?.startDate,
        competitor: values?.competitor,
        businessDescription: values?.businessDescription,
        hearAboutUs: values?.hearAboutUs,
      });

      // 5.2 Create Quotation Document for AdminDB (Refactored and Secured)
      const adminDocRef = collection(adminDB, "userQuotations");
      await addDoc(adminDocRef, {
        // Exclude password from quotation details for security
        ...userDetails, // Include all user details except password
        projectType: values?.projectType,
        timeLine: values?.projectTimeline,
        budget: values?.projectBudget,
        requirements: values?.projectRequirements,
        services: values?.services,
        subCategoryServices: values?.subCategoryServices,
        startDate: values?.startDate,
        competitor: values?.competitor,
        businessDescription: values?.businessDescription,
        hearAboutUs: values?.hearAboutUs,
      });
  
      // 6. Navigation on Success
      navigate("/service"); // Assuming "/service" is the services page path
    } catch (error) {
      console.error("Error while adding quotation:", error);
      // Consider additional error handling for different error codes
    }
  };
  

  // const handleFormSubmit = async () => {
  //   try {
  //     let userDetails = {
  //       email: values?.email,
  //       firstName: values?.firstName,
  //       lastName: values?.lastName,
  //       phoneNumber: values?.phoneNumber,
  //       companyName: values?.companyName,
  //       onlinePresence: values?.onlinePresence,
  //       physicalAddress: values?.physicalAddress,
  //     };
  //     if (createAccount) {
  //       const userCredential = await createUserWithEmailAndPassword(
  //         auth,
  //         values?.email,
  //         values?.password
  //       );
  //       const user = userCredential.user;
  //       if (user) {
  //         userDetails = { ...userDetails, uid: user.uid };
  //         const userDoc = collection(db, "users");
  //         await addDoc(userDoc, {
  //           uid: user?.uid,
  //           email: values?.email,
  //           firstName: values?.firstName,
  //           lastName: values?.lastName,
  //           phoneNumber: values?.phoneNumber,
  //           password: values?.password,
  //         });
  //         const rolesRef = collection(db, "roles");
  //         await addDoc(rolesRef, {
  //           uid: user.uid,
  //           role: "Customer",
  //         });
  //       }
  //     }
  //     const serviceDocRef = collection(db, "quotations");
  //     await addDoc(serviceDocRef, {
  //       projectType: values?.projectType,
  //       timeLine: values?.projectTimeline,
  //       budget: values?.projectBudget,
  //       requirements: values?.projectRequirements,
  //       services: values?.services,
  //       subCategoryServices: values?.subCategoryServices,
  //       startDate: values?.startDate,
  //       competitor: values?.competitor,
  //       businessDescription: values?.businessDescription,
  //       hearAboutUs: values?.hearAboutUs,
  //       userDetails: userDetails,
  //     });
  //   } catch (error) {
  //     if (error.code === "auth/email-already-in-use") {
  //       toast({
  //         description: "Email Already Used",
  //         status: "error",
  //         position: "top",
  //         duration: 1000,
  //         isClosable: true,
  //       });
  //     }
  //     console.log("Error while add Quotation:", error);
  //   }

  //   // creating account for user
  //   if (createAccount) {
  //     try {
  //       const userDoc = collection(db, "users");
  //       await addDoc(userDoc, {
  //         email: values?.email,
  //         firstName: values?.firstName,
  //         lastName: values?.lastName,
  //         phoneNumber: values?.phoneNumber,
  //         password: values?.password,
  //       });
  //       navigate("/service")
  //     } catch (error) {
  //       console.log("Error while adding User Details :", error);
  //     }
  //   }
  //   var isMailSent = await sendMail(
  //     values?.projectType,
  //     values?.projectTimeline,
  //     values?.projectBudget,
  //     values?.projectRequirements,
  //     values?.firstName,
  //     values?.lastName,
  //     values?.email,
  //     values?.phoneNumber,
  //     "Project Details"
  //   );
  //   if (isMailSent) {
  //     await sweetAlertFunction(
  //       "Submitted",
  //       "Thank You For Submitting The Project Details, Our Executive Will Get In Touch With You Shortly.",
  //       "success",
  //       navigate,
  //       "/service"
  //     );
  //   }
  // };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        projectType: "",
        services: "",
        subCategoryServices: [],
        startDate: "",
        projectTimeline: "",
        projectBudget: "",
        projectRequirements: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        physicalAddress: "",
        onlinePresence: "",
        competitor: "",
        businessDescription: "",
        hearAboutUs: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: ProjectCreationSchema,
      onSubmit: handleFormSubmit,
    });

  return (
    <div className="productsContainer">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box>
          {isProductSection1 ? (
            <div className="productSection1">
              <div className="productHeadSection">
                <div className="productImageSection">
                  <img
                    src="Images/logoWhite.png"
                    style={{ width: "50%" }}
                    alt=""
                  />
                  <br />
                  <img
                    src="Images/homepage/productImage1.png"
                    style={{ width: "80%" }}
                    alt=""
                  />
                </div>
                <div className="productTextSection">
                  <div className="productMainHead">
                    <div className="title2 padding10">
                      {" "}
                      Tell Us About{" "}
                      <span className="heighlighted"> Your Project</span>
                    </div>
                    <div className="flex marginTop20 ">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="projectType"
                            name="projectType"
                            select
                            label="Select Industry Of Business"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.projectType}
                            error={Boolean(
                              errors?.projectType && touched?.projectType
                            )}
                            helperText={
                              errors?.projectType &&
                              touched?.projectType &&
                              String(errors?.projectType)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          >
                            <MenuItem value="">Select Industry</MenuItem>
                            {industryOption.map((option, index) => (
                              <MenuItem key={index} value={option?.value}>
                                {option?.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="services"
                            name="services"
                            select
                            label="Select Your Required Services"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.services}
                            error={Boolean(
                              errors?.services && touched?.services
                            )}
                            helperText={
                              errors?.services &&
                              touched?.services &&
                              String(errors?.services)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          >
                            <MenuItem value="">Select Services</MenuItem>
                            {serviceOptions.map((option, index) => (
                              <MenuItem key={index} value={option?.value}>
                                {option?.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </div>
                    </div>

                    {values?.services && (
                      <>
                        {subcategoriesServices?.filter(
                          (service) => values?.services in service
                        ).length > 0 && (
                          <div className="flex marginTop10">
                            <div className="left fullWidth padding10 fontSize15">
                              <FormControl fullWidth>
                                <TextField
                                  id="subCategoryServices"
                                  name="subCategoryServices"
                                  select
                                  label="Select Sub Category Services"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.subCategoryServices}
                                  error={Boolean(
                                    errors?.subCategoryServices &&
                                      touched?.subCategoryServices
                                  )}
                                  helperText={
                                    errors?.subCategoryServices &&
                                    touched?.subCategoryServices &&
                                    String(errors?.subCategoryServices)
                                  }
                                  required={true}
                                  sx={{
                                    fieldset: {
                                      borderWidth: "3px",
                                      borderColor: "#526D82",
                                    },
                                    input: {
                                      fontWeight: "medium",
                                      minHeight: "auto", // Allow dynamic height
                                    },
                                    label: {
                                      color: "#526D82",
                                    },
                                  }}
                                  SelectProps={{
                                    multiple: true, // Enable multiple selection
                                    renderValue: (selected) =>
                                      selected.join(", "), // Display selected options as a comma-separated string
                                  }}
                                >
                                  <MenuItem value="">
                                    Select Sub Category Services
                                  </MenuItem>
                                  {subcategoriesServices
                                    .filter(
                                      (service) => values?.services in service
                                    )
                                    .map(
                                      (option, index) =>
                                        option[values?.services]
                                    )
                                    .flat()
                                    .map((category, index) => (
                                      <MenuItem
                                        key={index}
                                        value={category?.value}
                                      >
                                        <Checkbox
                                          checked={
                                            values?.subCategoryServices.indexOf(
                                              category?.value
                                            ) > -1
                                          }
                                        />
                                        <ListItemText
                                          primary={category?.label}
                                        />
                                      </MenuItem>
                                    ))}
                                </TextField>
                              </FormControl>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="startDate"
                            name="startDate"
                            type="date"
                            label="Start Date for Project"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.startDate}
                            error={Boolean(
                              errors?.startDate && touched?.startDate
                            )}
                            InputLabelProps={{ shrink: true, required: true }}
                            inputProps={{
                              min: moment().add(1, "days").format("YYYY-MM-DD"),
                            }}
                            helperText={
                              errors?.startDate &&
                              touched?.startDate &&
                              String(errors?.startDate)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="projectTimeline"
                            name="projectTimeline"
                            label="Select Timeline For Project"
                            select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.projectTimeline}
                            error={Boolean(
                              errors?.projectTimeline &&
                                touched?.projectTimeline
                            )}
                            helperText={
                              errors?.projectTimeline &&
                              touched?.projectTimeline &&
                              String(errors?.projectTimeline)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          >
                            <MenuItem value="">Select Timeline</MenuItem>
                            {timelineOption.map((option, index) => (
                              <MenuItem key={index} value={option?.value}>
                                {option?.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="projectBudget"
                            name="projectBudget"
                            label="Select Budget of Your Budget"
                            select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.projectBudget}
                            error={Boolean(
                              errors?.projectBudget && touched?.projectBudget
                            )}
                            helperText={
                              errors?.projectBudget &&
                              touched?.projectBudget &&
                              String(errors?.projectBudget)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          >
                            <MenuItem value="">Select Budget</MenuItem>
                            {budgetOption.map((option, index) => (
                              <MenuItem key={index} value={option?.value}>
                                {option?.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextareaAutosize
                            id="projectRequirements"
                            name="projectRequirements"
                            // label="Describe Project Requirements"
                            minRows={4}
                            placeholder="Describe Project Requirements"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.projectRequirements}
                            error={Boolean(
                              errors?.projectRequirements &&
                                touched?.projectRequirements
                            )}
                            helperText={
                              errors?.projectRequirements &&
                              touched?.projectRequirements &&
                              String(errors?.projectRequirements)
                            }
                            required={true}
                            style={{
                              borderWidth: "3px",
                              borderColor: "#526D82",
                            }}
                          ></TextareaAutosize>
                        </FormControl>
                      </div>
                    </div>

                    <div className="marginTop20 padding10">
                      {/* <button className='btn btn-danger width30 textCapitalize' onClick={()=>{submitSecondSectionReport()}}> Cancel </button> */}
                      <button
                        className="btn btn-primary width30 textCapitalize"
                        onClick={firstSectionReport}
                      >
                        {" "}
                        NEXT{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="productSection2">
              <div className="productHeadSection">
                <div className="productImageSection">
                  <img
                    src="Images/logoWhite.png"
                    style={{ width: "50%" }}
                    alt=""
                  />
                  <br />
                  <img
                    src="Images/homepage/productImage2.png"
                    style={{ width: "70%" }}
                    alt=""
                  />
                </div>
                <div className="productTextSection">
                  <div className="productMainHead">
                    <div className="title2 padding10">
                      {" "}
                      Tell Us About <span className="heighlighted"> You</span>
                    </div>
                    <div className="flex marginTop20">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="firstName"
                            name="firstName"
                            label="FirstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.firstName}
                            error={Boolean(
                              errors?.firstName && touched?.firstName
                            )}
                            helperText={
                              errors?.firstName &&
                              touched?.firstName &&
                              String(errors?.firstName)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="lastName"
                            name="lastName"
                            label="LastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.lastName}
                            error={Boolean(
                              errors?.lastName && touched?.lastName
                            )}
                            helperText={
                              errors?.lastName &&
                              touched?.lastName &&
                              String(errors?.lastName)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="email"
                            name="email"
                            label="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.email}
                            error={Boolean(errors?.email && touched?.email)}
                            helperText={
                              errors?.email &&
                              touched?.email &&
                              String(errors?.email)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="phoneNumber"
                            name="phoneNumber"
                            label="PhoneNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.phoneNumber}
                            error={Boolean(
                              errors?.phoneNumber && touched?.phoneNumber
                            )}
                            helperText={
                              errors?.phoneNumber &&
                              touched?.phoneNumber &&
                              String(errors?.phoneNumber)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="companyName"
                            name="companyName"
                            label="Company Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.companyName}
                            error={Boolean(
                              errors?.companyName && touched?.companyName
                            )}
                            helperText={
                              errors?.companyName &&
                              touched?.companyName &&
                              String(errors?.companyName)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="physicalAddress"
                            name="physicalAddress"
                            label="Physical Address (optional)"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.physicalAddress}
                            error={Boolean(
                              errors?.physicalAddress &&
                                touched?.physicalAddress
                            )}
                            helperText={
                              errors?.physicalAddress &&
                              touched?.physicalAddress &&
                              String(errors?.physicalAddress)
                            }
                            required={false}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="onlinePresence"
                            name="onlinePresence"
                            label="Current Online Presence (Mention Website)"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.onlinePresence}
                            error={Boolean(
                              errors?.onlinePresence && touched?.onlinePresence
                            )}
                            helperText={
                              errors?.onlinePresence &&
                              touched?.onlinePresence &&
                              String(errors?.onlinePresence)
                            }
                            required={true}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="competitor"
                            name="competitor"
                            label="Competitor if any (optional)"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.competitor}
                            error={Boolean(
                              errors?.competitor && touched?.competitor
                            )}
                            helperText={
                              errors?.competitor &&
                              touched?.competitor &&
                              String(errors?.competitor)
                            }
                            required={false}
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          ></TextField>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextareaAutosize
                            id="businessDescription"
                            name="businessDescription"
                            // label="Describe Project Requirements"
                            minRows={4}
                            placeholder="Brief Description of the business"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.businessDescription}
                            error={Boolean(
                              errors?.businessDescription &&
                                touched?.businessDescription
                            )}
                            helperText={
                              errors?.businessDescription &&
                              touched?.businessDescription &&
                              String(errors?.businessDescription)
                            }
                            required
                            style={{
                              borderWidth: "3px",
                              borderColor: "#526D82",
                            }}
                          ></TextareaAutosize>
                        </FormControl>
                      </div>
                    </div>
                    <div className="flex marginTop10">
                      <div className="left fullWidth padding10 fontSize15">
                        <FormControl fullWidth>
                          <TextField
                            id="hearAboutUs"
                            name="hearAboutUs"
                            label="How did you hear about us?"
                            select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.hearAboutUs}
                            error={Boolean(
                              errors?.hearAboutUs && touched?.hearAboutUs
                            )}
                            helperText={
                              errors?.hearAboutUs &&
                              touched?.hearAboutUs &&
                              String(errors?.hearAboutUs)
                            }
                            required
                            sx={{
                              fieldset: {
                                borderWidth: "3px",
                                borderColor: "#526D82",
                              },
                              input: {
                                fontWeight: "medium",
                              },
                              label: {
                                color: "#526D82",
                              },
                            }}
                          >
                            <MenuItem value="">Select Option</MenuItem>
                            {hearAboutUsOptions.map((option, index) => (
                              <MenuItem key={index} value={option?.value}>
                                {option?.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                      </div>
                    </div>
                    {createAccount && (
                      <div className="marginTop10">
                        <div className="left fullWidth padding10 fontSize15 ">
                          <FormControl fullWidth>
                            <TextField
                              id="password"
                              name="password"
                              label="Password"
                              type={showPassword ? "text" : "password"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.password}
                              error={Boolean(
                                errors?.password && touched?.password
                              )}
                              helperText={
                                errors?.password &&
                                touched?.password &&
                                String(errors?.password)
                              }
                              required
                              sx={{
                                fieldset: {
                                  borderWidth: "3px",
                                  borderColor: "#526D82",
                                },
                                input: {
                                  fontWeight: "medium",
                                },
                                label: {
                                  color: "#526D82",
                                },
                              }}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() =>
                                        setShowPassword(!showPassword)
                                      }
                                    >
                                      {showPassword ? (
                                        <IoMdEye />
                                      ) : (
                                        <IoMdEyeOff />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            ></TextField>
                          </FormControl>
                        </div>
                        <div className="left fullWidth padding10 fontSize15">
                          <FormControl fullWidth>
                            <TextField
                              id="confirmPassword"
                              name="confirmPassword"
                              label="Confirm Password"
                              type={showConfirmPassword ? "text" : "password"}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.confirmPassword}
                              error={Boolean(
                                errors?.confirmPassword &&
                                  touched?.confirmPassword
                              )}
                              helperText={
                                errors?.confirmPassword &&
                                touched?.confirmPassword &&
                                String(errors?.confirmPassword)
                              }
                              required
                              sx={{
                                fieldset: {
                                  borderWidth: "3px",
                                  borderColor: "#526D82",
                                },
                                input: {
                                  fontWeight: "medium",
                                },
                                label: {
                                  color: "#526D82",
                                },
                              }}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      onClick={() =>
                                        setShowConfirmPassword(
                                          !showConfirmPassword
                                        )
                                      }
                                    >
                                      {showPassword ? (
                                        <IoMdEye />
                                      ) : (
                                        <IoMdEyeOff />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            ></TextField>
                          </FormControl>
                        </div>
                      </div>
                    )}
                    <div className="flex marginTop10">
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          value={createAccount}
                          onChange={() => setCreateAccount(!createAccount)}
                          label={
                            <Typography
                              variant="body1"
                              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            >
                              By checking this box, you agree to Create an
                              Account with us.
                            </Typography>
                          }
                        />
                      </FormGroup>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "0.8rem",
                      }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          required
                          control={<Checkbox />}
                          value={termsAndCondition}
                          onChange={() =>
                            setTermsAndCondition(!termsAndCondition)
                          }
                          label={
                            <Typography
                              variant="body1"
                              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            >
                              By checking this box, you agree to our Terms and
                              Conditions, Data Usage Policy, and Privacy Policy.
                            </Typography>
                          }
                        />
                      </FormGroup>
                    </div>
                    <div className="marginTop20">
                      <button
                        className="btn btn-primary width30 "
                        onClick={firstSectionReport}
                      >
                        Back
                      </button>
                      <button
                        className="btn btn-primary width30 "
                        type="submit"
                        style={{ backgroundColor: "#FFAA1D", border: "none" }}
                        onClick={handleFormSubmit}
                        disabled={!termsAndCondition || !createAccount}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Box>
      </form>
    </div>
  );
};
export default ProjectCreation;
