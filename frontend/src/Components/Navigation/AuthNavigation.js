import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ProtectedRoutes } from "./ProtectedRoutes";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";
import "../../Styles/AllRouteStyle.scss";

import HomePage from "../../Views/Auth/HomePage";
import AboutUs from "../../Views/Auth/AboutUs";
import Blogs from "../../Views/Auth/Blogs";
import ProjectCreation from "../../Views/Auth/ProjectCreation";
import ContactUs from "../../Views/Auth/ContactUs";
import PrivacyPolicy from "../../Views/Auth/PrivacyPolicy";
import TermsAndCondition from "../../Views/Auth/TermsAndCondition";
import NotFound from "../../Views/Auth/NotFound";
import NameGen from "../../Views/Auth/NameGen";
import Service from "../../Views/Services/Service";
import ServicePR from "../../Views/Services/ServicePR";
import RefundPolicy from "../../Views/Auth/RefundPolicy";
import SpecificBlogs from "../../Views/Auth/blogs/SpecificBlogs";
import SpecificBlog2 from "../../Views/Auth/blogs/SpecificBlog2";
import BlogToDisplay from "../../Views/Auth/blogs/BlogToDisplay";
import CompareServices from "../../Views/Services/CompareServices";
import FirstForm from "../../Views/Auth/PressReleaseForm";

const AuthNavigation = () => {
  const AllRoutes = () => {
    return (
      <Routes>
        {/**************************************** Guest Routes Start ****************************************/}
        {/*  */}
        {/*  */}

        <Route
          exact
          path="/"
          name="Home Page"
          element={
            <ProtectedRoutes Component={HomePage} accessRights={"guest"} />
          }
        />
        {/* <Route exact path="/home" name="Home Page" element={<ProtectedRoutes Component={HomePage} accessRights={"guest"} />} /> */}
        <Route
          exact
          path="/company-name-generator"
          name="Business Name Generator"
          element={
            <ProtectedRoutes Component={NameGen} accessRights={"guest"} />
          }
        />
        <Route
          exact
          path="/aboutUs"
          name="About Us"
          element={
            <ProtectedRoutes Component={AboutUs} accessRights={"guest"} />
          }
        />
        <Route
          exact
          path="/resources/blogs"
          name="Blogs"
          element={<ProtectedRoutes Component={Blogs} accessRights={"guest"} />}
        />
        <Route
          exact
          path="/contactUs"
          name="Contact Us"
          element={
            <ProtectedRoutes Component={ContactUs} accessRights={"guest"} />
          }
        />
        {/* <Route exact path="/blogs/:blogId" name="Specific Blogs" element={<ProtectedRoutes Component={SpecificBlogs} accessRights={"guest"} />} /> */}
        {/* <Route exact path="/blogs/:blogId" name="Specific Blogs" element={<ProtectedRoutes Component={BlogToDisplay} accessRights={"guest"} />} /> */}
        {/* <Route exact path="/resources/blogs/:blogId/:blogId" name="Specific Blogs" element={<ProtectedRoutes Component={SpecificBlogs} accessRights={"guest"} />} /> */}
        <Route
          exact
          path="/resources/blogs/:type/:id"
          name="Specific Blog2"
          element={
            <ProtectedRoutes Component={BlogToDisplay} accessRights={"guest"} />
          }
        />
        <Route
          exact
          path="/projectCreation"
          name="Project Creation"
          element={
            <ProtectedRoutes
              Component={ProjectCreation}
              accessRights={"guest"}
            />
          }
        />
        <Route
          exact
          path="/pressReleaseForm"
          name="Project Creation"
          element={
            <ProtectedRoutes Component={FirstForm} accessRights={"guest"} />
          }
        />
        <Route
          exact
          path="/privacyPolicy"
          name="Privacy Policy"
          element={
            <ProtectedRoutes Component={PrivacyPolicy} accessRights={"guest"} />
          }
        />
        <Route
          exact
          path="/refund-and-cancellation-policy"
          name="Refund Policy"
          element={
            <ProtectedRoutes Component={RefundPolicy} accessRights={"guest"} />
          }
        />
        <Route
          exact
          path="/termsAndCondition"
          name="Terms & Condition"
          element={
            <ProtectedRoutes
              Component={TermsAndCondition}
              accessRights={"guest"}
            />
          }
        />
        <Route
          exact
          path="/service"
          name="Service"
          element={
            <ProtectedRoutes Component={Service} accessRights={"guest"} />
          }
        />
        <Route
          path="/service/compare/:service?"
          name="Compare"
          element={
            <ProtectedRoutes
              Component={CompareServices}
              accessRights={"guest"}
            />
          }
        />
        <Route
          exact
          path="/pr/service"
          name="ServicePR"
          element={
            <ProtectedRoutes Component={ServicePR} accessRights={"guest"} />
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoutes Component={NotFound} accessRights={"guest"} />
          }
        />
        {/*  */}
        {/*  */}
        {/**************************************** Guest Routes Close ****************************************/}

        {/**************************************** User Routes Start ****************************************/}
        {/*  */}
        {/*  */}
        {/* <Route exact path="/user/" name="User Dashboard" element={<ProtectedRoutes Component={UserDashboard} accessRights={"user"} />} /> */}

        {/*  */}
        {/*  */}
        {/**************************************** User Routes Close ****************************************/}

        {/**************************************** Admin Routes Start ****************************************/}
        {/*  */}
        {/*  */}
        {/* <Route exact path="/admin/" name="Dashboard" element={<ProtectedRoutes Component={Dashboard} accessRights={"admin"} />} /> */}

        {/*  */}
        {/*  */}
        {/**************************************** Admin Routes Close ****************************************/}
      </Routes>
    );
  };

  return (
    <ProSidebarProvider>
      <div className="mainContainer">
        {/* <NavBar/> */}
        <AllRoutes />
        {/* <Footer/> */}
      </div>
    </ProSidebarProvider>
  );
};
export default AuthNavigation;
