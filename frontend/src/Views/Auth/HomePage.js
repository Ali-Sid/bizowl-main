import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import "../../Styles/AuthStyles/homepageStyle.scss";
import "../../Styles/AuthStyles/serviceStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import { BsSearch } from "react-icons/bs";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import {
  AskBigCard,
  BlogsBigCard2,
  BlogsSmallCard,
  HowCard,
  IndustriesBigCard,
  IndustriesSmallCard,
  OurMoreServicesDesign,
  OurServicesCard,
  TestimonialDesign,
  WhyBestCard,
  WhyUsCard,
} from "../../Components/Design/fixedDesigns";
import { useState } from "react";
import Faq from "react-faq-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TestimonialsSlide,
  WindowOpenLink,
} from "../../Components/Extra/extraFunction";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { setIsVisible } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import {
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
// import { PopupModal } from '../../Components/Design/fixedDesigns';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedIndustry, setSelectedIndustry] = useState("");
  // const [selectedServiceCategory, setSelectedServiceCategory] = useState('');
  const [selectedIndustryImage, setSelectedIndustryImage] = useState(
    "Images/company/finance.png"
  );
  const [selectedIndustryDescription, setSelectedIndustryDescription] =
    useState(
      "Due to the cross-industry knowledge of our registered partner, we can quickly create complex fintech solutions for clients in the banking and financial sector. Benefiting features including payout modules, credit management systems, and any other Feature that is required by our client in these applications."
    );

  const slickSliderRef = useRef();
  const [loginWindow, setLoginWindow] = useState(false);

  function navigateFunction(val) {
    navigate(val);
  }

  const serviceHeadList = [
    {
      value: "Business Fundamental Services",
      label: "Business Fundamental Services",
    },
    { value: "Web Development", label: "Web Development" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Graphics", label: "Graphics" },
    { value: "Marketing", label: "Marketing" },
    { value: "Advertising", label: "Advertising" },
  ];

  const serviceBodyListData = [
    //************************************Business Fundamental Services************************** */
    {
      name: "Market Research",
      image: "Images/services/BusinessFundamental/MarketResearch.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Idea Validation",
      image: "Images/services/BusinessFundamental/IdeaValidation.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Business Model Development",
      image: "Images/services/BusinessFundamental/BusinessModelDevelopment.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Target Audience Analysis",
      image: "Images/services/BusinessFundamental/TargetAudienceAnalsyis.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Market Entry Strategy",
      image: "Images/services/BusinessFundamental/MarketEntry.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Financial Planning",
      image: "Images/services/BusinessFundamental/financial-report.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Startup Consulting",
      image: "Images/services/Other/StartupConsulting.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Business Canvas Model",
      image: "Images/services/BusinessFundamental/BusinessCanvasModel.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Market Size Analysis",
      image: "Images/services/BusinessFundamental/MarketSizeAnalysis.png",
      type: "Business Fundamental Services",
    },
    {
      name: "Competitor Analysis",
      image: "Images/services/BusinessFundamental/CompetitorsAnalysis.png",
      type: "Business Fundamental Services",
    },

    //************************************Business Fundamental Services************************** */

    //************************************ Advertising Services ************************************/

    {
      name: "Billboard Advertisement",
      image: "Images/services/Advertising/BillboardAdvt.png",
      type: "Advertising",
    },
    {
      name: "Fm Radio Advertisement",
      image: "Images/services/Advertising/FmRadioAds.png",
      type: "Advertising",
    },
    {
      name: "Metro Advertisement",
      image: "Images/services/Advertising/MetroAdvertisement.png",
      type: "Advertising",
    },
    {
      name: "News Paper Advertisement",
      image: "Images/services/Advertising/NewspaperAds.png",
      type: "Advertising",
    },
    {
      name: "PPC",
      image: "Images/services/Advertising/PPC.png",
      type: "Advertising",
    },
    {
      name: "Tv Advertisement",
      image: "Images/services/Advertising/TvAds.png",
      type: "Advertising",
    },
    {
      name: "Vehicle Wraps",
      image: "Images/services/Advertising/VehicleWraps.png",
      type: "Advertising",
    },
    {
      name: "Youtube Advertising",
      image: "Images/services/Advertising/YoutubeAdvertsing.png",
      type: "Advertising",
    },

    //************************************ Advertising Services ************************************/

    //****//
    //****//
    //****//
    //****//
    //****//

    //************************************ Digital Marketing Services ************************************/

    {
      name: "Ad Copy",
      image: "Images/services/DigitalMarketing/Adcopy.png",
      type: "Digital Marketing",
    },
    {
      name: "Article & Blog Post",
      image: "Images/services/DigitalMarketing/ArticleLogPost.png",
      type: "Digital Marketing",
    },
    {
      name: "Book Marketing",
      image: "Images/services/DigitalMarketing/BookMarketing.png",
      type: "Digital Marketing",
    },
    {
      name: "Case Study",
      image: "Images/services/DigitalMarketing/CaseStudy.png",
      type: "Digital Marketing",
    },
    {
      name: "Creative Writing",
      image: "Images/services/DigitalMarketing/CreativeWriting.png",
      type: "Digital Marketing",
    },
    {
      name: "E Commerce Marketing",
      image: "Images/services/DigitalMarketing/ECommerceMarketing.png",
      type: "Digital Marketing",
    },
    {
      name: "E Com SEO",
      image: "Images/services/DigitalMarketing/EComSEO.png",
      type: "Digital Marketing",
    },
    {
      name: "Email Marketing",
      image: "Images/services/DigitalMarketing/EmilMarketing.png",
      type: "Digital Marketing",
    },
    {
      name: "Funnel Building",
      image: "Images/services/DigitalMarketing/Funnelbuilding.png",
      type: "Digital Marketing",
    },
    {
      name: "Link Building",
      image: "Images/services/DigitalMarketing/LinkBuilding.png",
      type: "Digital Marketing",
    },
    {
      name: "Local SEO",
      image: "Images/services/DigitalMarketing/LocalSEO.png",
      type: "Digital Marketing",
    },
    {
      name: "Marketing Strategy",
      image: "Images/services/DigitalMarketing/MarketingStrategy.png",
      type: "Digital Marketing",
    },
    {
      name: "Mobile App Marketing",
      image: "Images/services/DigitalMarketing/MobileAppMarketing.png",
      type: "Digital Marketing",
    },
    {
      name: "Music Promotion",
      image: "Images/services/DigitalMarketing/MusicPromotion.png",
      type: "Digital Marketing",
    },
    {
      name: "PPC",
      image: "Images/services/DigitalMarketing/PPC.png",
      type: "Digital Marketing",
    },
    {
      name: "Press Release Service",
      image: "Images/services/DigitalMarketing/PressReleaseService.png",
      type: "Digital Marketing",
    },
    {
      name: "Product Descriptions",
      image: "Images/services/DigitalMarketing/ProductDescriptions.png",
      type: "Digital Marketing",
    },
    {
      name: "SEM",
      image: "Images/services/DigitalMarketing/SEM.png",
      type: "Digital Marketing",
    },
    {
      name: "SEO",
      image: "Images/services/DigitalMarketing/SEO.png",
      type: "Digital Marketing",
    },
    {
      name: "SMS Marketing",
      image: "Images/services/DigitalMarketing/SMSMarketing.png",
      type: "Digital Marketing",
    },
    {
      name: "Social Media Advertising",
      image: "Images/services/DigitalMarketing/SocialMediaAdvertising.png",
      type: "Digital Marketing",
    },
    {
      name: "Social Media Management",
      image: "Images/services/DigitalMarketing/SocialMediaManagement.png",
      type: "Digital Marketing",
    },
    {
      name: "Social Media Marketing",
      image: "Images/services/DigitalMarketing/SocialMediaMarketing.png",
      type: "Digital Marketing",
    },
    {
      name: "Technical Writing",
      image: "Images/services/DigitalMarketing/TechnicalWriting.png",
      type: "Digital Marketing",
    },
    {
      name: "Video Marketing",
      image: "Images/services/DigitalMarketing/VideoMarketing.png",
      type: "Digital Marketing",
    },
    {
      name: "Video SEO",
      image: "Images/services/DigitalMarketing/VideoSEO.png",
      type: "Digital Marketing",
    },
    {
      name: "Web Analytics",
      image: "Images/services/DigitalMarketing/WebAnalytics1.png",
      type: "Digital Marketing",
    },
    {
      name: "Website Content",
      image: "Images/services/DigitalMarketing/WebsiteContent.png",
      type: "Digital Marketing",
    },

    //************************************ Digital Marketing Services ************************************/

    //****//
    //****//
    //****//
    //****//
    //****//

    //************************************ Graphics Services ************************************/

    {
      name: "App Design",
      image: "Images/services/Graphic/AppDesign.png",
      type: "Graphics",
    },
    {
      name: "Brand Identity",
      image: "Images/services/Graphic/BrandIdentity.png",
      type: "Graphics",
    },
    {
      name: "Brand Style Guide",
      image: "Images/services/Graphic/BrandStyleGuide.png",
      type: "Graphics",
    },
    {
      name: "Brochure Design",
      image: "Images/services/Graphic/BrochureDesign.png",
      type: "Graphics",
    },
    {
      name: "Business Cards And Stationary",
      image: "Images/services/Graphic/BusinessCardsAndStationary.png",
      type: "Graphics",
    },
    {
      name: "Catalogue Design",
      image: "Images/services/Graphic/CatalogueDesign.png",
      type: "Graphics",
    },
    {
      name: "Email Design",
      image: "Images/services/Graphic/EmailDesign.png",
      type: "Graphics",
    },
    {
      name: "Flyer Design",
      image: "Images/services/Graphic/FlyerDesign.png",
      type: "Graphics",
    },
    {
      name: "Font Style Guide",
      image: "Images/services/Graphic/FontStyleGuide.png",
      type: "Graphics",
    },
    {
      name: "Icon Design",
      image: "Images/services/Graphic/IconDesign.png",
      type: "Graphics",
    },
    {
      name: "Image Editing",
      image: "Images/services/Graphic/ImageEditing.png",
      type: "Graphics",
    },
    {
      name: "Infographic Design",
      image: "Images/services/Graphic/InfographicDesign.png",
      type: "Graphics",
    },
    {
      name: "Invitation Design",
      image: "Images/services/Graphic/InvitationDesign.png",
      type: "Graphics",
    },
    {
      name: "Landing Page Design",
      image: "Images/services/Graphic/LandingPageDesign.png",
      type: "Graphics",
    },
    {
      name: "Logo Design",
      image: "Images/services/Graphic/LogoDesign.png",
      type: "Graphics",
    },
    {
      name: "Menu Design",
      image: "Images/services/Graphic/MenuDesign.png",
      type: "Graphics",
    },
    {
      name: "Merchandise Design",
      image: "Images/services/Graphic/MerchandiseDesign.png",
      type: "Graphics",
    },
    {
      name: "Packing And Label Design",
      image: "Images/services/Graphic/packingAndLabelDesign.png",
      type: "Graphics",
    },
    {
      name: "Poster Design",
      image: "Images/services/Graphic/PosterDesign.png",
      type: "Graphics",
    },
    {
      name: "Social Media Creatives",
      image: "Images/services/Graphic/SocialMediaCreatives.png",
      type: "Graphics",
    },
    {
      name: "UX Design",
      image: "Images/services/Graphic/UXDesign.png",
      type: "Graphics",
    },
    {
      name: "Visual Design",
      image: "Images/services/Graphic/visualDesign.png",
      type: "Graphics",
    },
    {
      name: "Web Banners",
      image: "Images/services/Graphic/WebBanners.png",
      type: "Graphics",
    },
    {
      name: "Website Design",
      image: "Images/services/Graphic/WebsiteDesign.png",
      type: "Graphics",
    },

    //************************************ Graphics Services ************************************/

    //****//
    //****//
    //****//
    //****//
    //****//

    //************************************ Marketing Services ************************************/

    {
      name: "Affiliate Marketing",
      image: "Images/services/Marketing/AffiliateMarketing.png",
      type: "Marketing",
    },
    {
      name: "B2B Marketing",
      image: "Images/services/Marketing/B2BMarketing.png",
      type: "Marketing",
    },
    {
      name: "Content Marketing",
      image: "Images/services/Marketing/ContentMarketing.png",
      type: "Marketing",
    },
    {
      name: "Inbound Marketing",
      image: "Images/services/Marketing/InboundMarketing.png",
      type: "Marketing",
    },
    {
      name: "Influencer Advt",
      image: "Images/services/Marketing/InfluencerAdvt.png",
      type: "Marketing",
    },
    {
      name: "Offline Marketing",
      image: "Images/services/Marketing/OfflineMarketing.png",
      type: "Marketing",
    },
    {
      name: "Outbound Marketing",
      image: "Images/services/Marketing/OutboundMArketing.png",
      type: "Marketing",
    },
    {
      name: "Paid Media",
      image: "Images/services/Marketing/PaidMedia.png",
      type: "Marketing",
    },
    {
      name: "PR",
      image: "Images/services/Marketing/PR.png",
      type: "Marketing",
    },

    //************************************ Marketing Services ************************************/

    //****//
    //****//
    //****//
    //****//
    //****//

    //************************************ Web Development Service ************************************/

    {
      name: "AI Application",
      image: "Images/services/WebDevelopment/AIApplication.png",
      type: "Web Development",
    },
    {
      name: "App Development",
      image: "Images/services/WebDevelopment/AppDevelopment.png",
      type: "Web Development",
    },
    {
      name: "Blog Website",
      image: "Images/services/WebDevelopment/BlogWebsite.png",
      type: "Web Development",
    },
    {
      name: "Custom Site",
      image: "Images/services/WebDevelopment/CustomSite.png",
      type: "Web Development",
    },
    {
      name: "E-Com Development",
      image: "Images/services/WebDevelopment/EComDevelopment.png",
      type: "Web Development",
    },
    {
      name: "Game Development",
      image: "Images/services/WebDevelopment/GameDevelopment.png",
      type: "Web Development",
    },
    {
      name: "It Support",
      image: "Images/services/WebDevelopment/ItSupport.png",
      type: "Web Development",
    },
    {
      name: "Shopify Development",
      image: "Images/services/WebDevelopment/ShopifyDevelopment.png",
      type: "Web Development",
    },
    {
      name: "Simple Static Website",
      image: "Images/services/WebDevelopment/SimpleStaticWebsite.png",
      type: "Web Development",
    },
    {
      name: "Web Development",
      image: "Images/services/WebDevelopment/WebDevelopment.png",
      type: "Web Development",
    },
    {
      name: "WebSite Maintenance",
      image: "Images/services/WebDevelopment/WebSiteMaintenance.png",
      type: "Web Development",
    },
    {
      name: "Wix",
      image: "Images/services/WebDevelopment/Wix.png",
      type: "Web Development",
    },
    {
      name: "Woo Commerce",
      image: "Images/services/WebDevelopment/WooCommerce.png",
      type: "Web Development",
    },

    //************************************ Web Development Service ************************************/

    //****//
    //****//
    //****//
    //****//
    //****//
  ];

    // const ModalComponent = () => {
    //   const [isModalOpen, setIsModalOpen] = useState(false);

    //   const openModal = () => {
    //     setIsModalOpen(true);
    //   };

    //   const closeModal = () => {
    //     setIsModalOpen(false);
    //   };

  //     const handleModalAction = () => {
  //       // Add your custom action logic here
  //       // This function will be called when an action button in the modal is clicked
  //       closeModal(); // Close the modal when the action is performed
  //     };

  //   return (
  //     <div>
  //       <button onClick={openModal}>Open Modal</button>
  //       <PopupModal
  //         open={isModalOpen}
  //         onClose={closeModal}
  //         title="My Modal Title"
  //         content={<p>This is the modal content.</p>}
  //         actions={[
  //           { label: 'Cancel', onClick: closeModal, color: 'primary' },
  //           { label: 'OK', onClick: handleModalAction, color: 'primary' },
  //         ]}
  //       />
  //     </div>
  //   );
  // };

  const isMobile = useMediaQuery("(max-width:700px)");

  const [serviceBodyListDummy, setServiceBodyListDummy] =
    useState(serviceBodyListData);
  const [serviceBodyList, setServiceBodyList] = useState(serviceBodyListData);
  const [selectedServiceName, setSelectedServiceName] = useState(
    "Business Fundamental Services"
  );
  const [serviceSearchValue, setServiceSearchValue] = useState("");

  const serviceWindowFunction = async (val) => {
    setLoginWindow(val);
  };

  const faqData = {
    // title: "FAQ (How it works)",
    rows: [
      {
        title: "How does your platform work?",
        content: `
        <ul>
          <li>
          Our vision is to empower entrepreneurship in India. We have built the only business service aggregation platform in India that exclusively focuses on business services, and having our very strong emphasis on business growth. Our platform provides you with initial access to Business fundamental services, such as market research, business model development, market size analysis, and more. This will help you establish a solid foundation and you will have a less chances of business failure. We also offer a few fundamental services for free so at least you can get some support. Additionally, we provide our users with digital business services, including web development, digital marketing, design, marketing, and advertising services.
          </li>
          <li>
          Bizowl is the sole business service aggregation platform designed to offer end-to-end business solutions, enabling you to establish and scale your business to the next level. Users on our platform can compare prices, features, and service portfolios to choose the best option for their specific needs (applicable to digital business services).
          </li>
        </ul>`,
      },
      {
        title: `How does Bizowl help us? `,
        content: `
        <ul>
          <li>
          We identified the root cause of startup and business failures. Further research revealed that, often, the fundamentals of business (such as market size, problem comprehension, customer pain points, and incorrect business models) are flawed. These errors are a major contributor to startup failures. Moreover, when users seek reliable service partners, they often struggle to find providers they can trust in terms of both work quality and service reliability. While there are marketplaces available, they typically do not prioritize business growth, ensure quality work, or and do not just focuses on business services.
          </li>
          <li>
          At Bizowl, we prioritize your business growth ahead of selling services. Having identified this problem, we have now shifted our main aim to provide the best and genuine solution for this problem, and that's how we aim to assist you. You will get solutions for all your business problem.
          </li>        
        </ul>`,
      },
      {
        title: `How do you ensure the service we get will be of desired and good quality?`,
        content: `
        <ul>
          <li>
          Our service partners must adhere to our tight rules in order to become and remain a part of our collaboration. We closely examine our service partners before partnering with them, and we caution against doing business with people who lack professionalism. In the event of any dishonest or fraudulent type action, we typically invalidate the agreement between us and the service partner. We constantly ensure that our clients receive the desired degree of work and quality with service offered.
          </li>          
        </ul>`,
      },
      {
        title: `Why should we choose BIZOWL rather contacting your listed partner directly?`,
        content: `
        <ul>
          <li>
            The price you receive on our platform is less than what they will directly quote you, and if you somehow discover the price is identical, we give our client rewards and 
            <a href="contactUs" class="textDecoration"> <span class='bold pointer'> FREE BUSINESS CONSULTATION </span></a>.
          </li>          
          <li>
            We also act as an aggregator, allowing you to compare the costs and features of several listed services, giving you an advantage in selecting the best service partner for your requirements. according to your needs in terms of work and your budget.
          </li>          
          <li>
            We are also a one stop shop for services. All of the services are provided under one roof. We provide services from A to Z.
          </li>          
          <li>
            You have the freedom to decide with whoever you want to move forward; we will just provide you with guidance at every stage.
          </li>          
          <li>
            As an aggregating platform, we are committed to offering top-notch client service. We are striving to enhance the B2B service experience. On your platform, the pre- and post-sale experiences will be of the highest caliber.
          </li>          
          <li>
            We closely monitor each and every move. We guarantee that you receive the desired work and that the compilation of the job is accomplished promptly.
          </li>          
          <li>
            Your money are secure with us, so there won't be a trust issue on our platform. We accept your payment and hold it in escrow until you acquire a better outcome.
          </li>          
        </ul>`,
      },
      {
        title: `How do we reach out to you?`,
        content: `
        <ul>
          <li>
          For support, you can contact us at 
          <a href="mailto:support@bizzowl.com" class="textDecoration"> <span class='bold pointer'> support@bizzowl.com </span></a>.
           or by phone at 
           <a href="tel:+91 9354651433" class="textDecoration"> <span class='bold pointer'> +919354651433. </span></a>.
            For general questions, please email us at 
            <a href="mailto:info@bizzowl.com" class="textDecoration"> <span class='bold pointer'> info@bizzowl.com </span></a> 
            or 
            <a href="mailto:contact@bizzowl.com" class="textDecoration"> <span class='bold pointer'> contact@bizzowl.com. </span></a>
             You can reach at prashantsirohi@bizzowl.com if you have any concerns and wish to speak with someone in management in our organization.
          </li>          
        </ul>`,
      },
      {
        title: `If there are any issues between a client and your service provider, how do you resolve them?`,
        content: `
        <ul>
          <li>
            For this, we have an impeccable policy. When it comes to receiving any work through our platform, we are the front face. You don't need to interact with our partners directly. Our executive will deal with you and you have to convey your work related conversation with our team. It won't be a big deal because we will make sure that you achieve all of your goals without giving this disagreement a second thought.
          </li>          
        </ul>`,
      },
    ],
  };

  // Bizowl Advantages

  const [open, setOpen] = useState(false);
  const [selectedTileIndex, setSelectedTileIndex] = useState(null);

  const handleTileClick = (index) => {
    setSelectedTileIndex(index);
    setOpen(true);
  };

  const handleNavigate = (direction) => {
    if (direction === "prev") {
      setSelectedTileIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (direction === "next") {
      setSelectedTileIndex((prevIndex) =>
        prevIndex < tiles.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const handleClose = () => {
    setSelectedTileIndex(null);
    setOpen(false);
  };

  const tiles = [
    {
      id: 1,
      icon: "Images/homepage/business-Wingman---Color-code---BA68C8.png",
      color: "#ffeef8",
      color2: "#cf9dbb",
      color3: "rgba(207,157,187,0.4)",
      color4: "#cf9dbb",
      title: "Your Business Wingman",
      content:
        "Bizowl is more than just a service company; we are your ally in business and are dedicated to your success. Our main objective is to see you succeed. We will provide guidance at every stage, from idea validation to startup launch to PMF achievement. We provide individualized advice and ongoing support as you succeed in business.",
    },
    {
      id: 2,
      icon: "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697657194/Bizowl/Pioneer---Color-Code---_A1D4C9_ddy5mf.png",
      color: "#e1f3ef",
      color2: "#a1d4c9",
      color3: "rgba(161,212,201,0.4)",
      color4: "#a1d4c9",
      title: "Pioneer in Business Growth",
      content:
        "We at Bizowl are leaders in the field of business development, not just another service provider. We are dedicated to being your sole partner in achieving success. We are the only company in India created specifically to support startups in India and assist businesses, and we only deal in services that helps businesses.",
    },
    {
      id: 3,
      icon: "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697657270/Bizowl/Tailored-Service-Partner---Color-Code---_9BC5EF_q419qw.png",
      color: "#f3f9ff",
      color2: "#9bc5ef",
      color3: "rgba(100, 140, 200, 0.4)",
      color4: "#1c6ed0",
      title: "Tailored Service Partner",
      content:
        "Bizowl makes it simple to find the ideal service partner. We evaluate your requirements and find the ideal digital service provider for you. We take into account your service industry, available budget, and the expertise you require or are looking for to help you find the best service partner.",
    },
    {
      id: 4,
      icon: "Images/homepage/freedom.png",
      color: "#fff9ea",
      color2: "#ead39c",
      color3: "rgba(234,211,156,0.4)",
      color4: "#f8c64c",
      title: "Compare Services",
      content:
        "You can use our platform to compare the price of services, features and portfolio of service providers to choose the best option based on comparisons and your needs.",
    },
    {
      id: 5,
      icon: "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697657129/Bizowl/end-to-end-solution-Color-Code---_7897BA_1_mhabps.png",
      color: "#ebf2fa",
      color2: "#7897ba",
      color3: "rgba(120,151,186,0.4)",
      color4: "#7897ba",
      title: "End-to-End Solutions",
      content:
        "Bizowl is a platform that can assist you in obtaining all the services required to launch and expand your business. We provide both Fundamental and digital business services. Market research, idea validation, customer analysis, digital marketing, web development, design services, and advertising services are a few examples of the services we offer.",
    },
    {
      id: 6,
      icon: "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697657342/Bizowl/Tursted-Advisor---_A0A3D8_xiiat7.png",
      color: "#e5e6f9",
      color2: "#a0a3d8",
      color3: "rgba(160,163,216,0.4)",
      color4: "#7c84c9",
      title: "Free Trusted Advisor",
      content:
        "We are here as your trustworthy advisor and have no other goals. Bizowl is committed to your success and offers advice without putting any pressure on you to buy. Receive free advice; we are not promoting any products; all we want is for you to use Bizowl as a place for performing out operations that you would normally do out outside. Simply put, we're trying to make things convenient for you.",
    },
  ];

  const selectedTile =
    selectedTileIndex !== null ? tiles[selectedTileIndex] : null;
  // const [selectedTile, setSelectedTile] = useState(tiles[0]);
  // const [isModalOpen, setModalOpen] = useState(false);

  // const handleTileClick = (tileContent) => {
  //   // console.log('handleTileClick called');
  //   setSelectedTile(tileContent);
  //   setModalOpen(true);
  //   // alert("Heyyy")
  //   // console.log('isModalOpen:', isModalOpen);
  // };

  // const openModal = (tileId) => {
  //   setActiveTile(tileId);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const navigateTile = (direction) => {
  //   const currentIndex = tiles.findIndex((tile) => tile.id === selectedTile.id);
  //   if (direction === "prev" && currentIndex > 0) {
  //     setSelectedTile(tiles[currentIndex - 1]);
  //   } else if (direction === "next" && currentIndex < tiles.length - 1) {
  //     setSelectedTile(tiles[currentIndex + 1]);
  //   }
  // };

  // const Modal = ({ isOpen, onClose, content, onNavigate }) => {
  //   if (!isOpen || !content) {
  //     return null;
  //   }

  //   return (
  //     <div className="modal-container">
  //       <div className="modalContent">
  //         <h2>{content.title}</h2>
  //         <p>{content.content}</p>
  //       </div>
  //       <div className="modal-navigation">
  //         <button onClick={() => onNavigate('prev')}>Previous</button>
  //         <button onClick={() => onNavigate('next')}>Next</button>
  //       </div>
  //       <button className="modal-close" onClick={onClose}>Close</button>
  //     </div>
  //   );
  // };

  // const navigate = (direction) => {
  //   const currentIndex = tiles.findIndex((tile) => tile.id === activeTile);
  //   if (direction === "prev" && currentIndex > 0) {
  //     setActiveTile(tiles[currentIndex - 1].id);
  //   } else if (direction === "next" && currentIndex < tiles.length - 1) {
  //     setActiveTile(tiles[currentIndex + 1].id);
  //   }
  // };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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

  var testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay:true,
    arrows: false,
  };

  useEffect(() => {
    var newServiceBodyList = [];
    serviceBodyListDummy.filter((res, index) => {
      if (
        res.name
          .toLocaleLowerCase()
          .includes(serviceSearchValue.toLocaleLowerCase())
      ) {
        newServiceBodyList.push(res);
      }
    });
    setServiceBodyList(newServiceBodyList);
  }, [serviceSearchValue]);

  const blogPosts = [
    {
      id: 1,
      icon: "https://res.cloudinary.com/dr1pmtefx/image/upload/v1697129744/Bizowl/blog1_mjudxr.jpg",
      jobTitle: "Business Service",
      tag: "business-service",
      urlTitle:
        "the-importance-of-an-end-to-end-business-service-aggregating-platform",
      title:
        "The Importance of an End-to-End Business Service Aggregating Platform",
      description:
        "In today's fast-paced business world, small business owners and startup entrepreneurs face numerous challenges...",
      date: "12-Oct-2023",
    },
    // Add more blog posts here
  ];

  return (
    <>
      <NavBar />
      <div className="homepageContainer">
        <div className="marginTop20">
          <Row md={12}>
            <Col md={6} className="col1Style">
              <div
                className="title1 textCapitalize"
                style={{ textAlign: "left" }}
              >
                A Platform to Establish{" "}
              </div>
              <div className="title2" style={{ textAlign: "left" }}>
                <span className="heighlighted">And Grow</span> Your Business
              </div>
              {/* <div className='title3'>Freelancers</div> */}
              <div className="description textCapitalize">
                You can get any service from idea validation to business
                establishment and scale it to the next level. Get both
                Fundamental and Digital services. Compare and choose the best
                one as per your need.
              </div>
              <div className="inputBoxDiv">
                <div className="inputBoxStyle2 input-group">
                  <input
                    type="text"
                    className="inputStyle2"
                    placeholder="Search for services"
                  />
                </div>
                <div className="searchButtonDiv">
                  <button
                    onClick={() => {
                      WindowOpenLink("/projectCreation", "_self");
                    }}
                    className="searchButtonStyle"
                  >
                    Search
                    <BsSearch
                      color="#fafafa"
                      style={{ fontSize: "25px" }}
                      className="ps-2"
                    />
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6} className="col2Style">
              <img
                src="Images/homepage/bizowlGirl.png"
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </Col>
          </Row>
        </div>

        <div className="ourServicesSec" id="ourServicesSection">
          {OurMoreServicesDesign(
            loginWindow,
            serviceHeadList,
            serviceBodyList,
            serviceWindowFunction,
            selectedServiceName,
            setSelectedServiceName,
            serviceSearchValue,
            setServiceSearchValue
          )}
          <Row xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="BigTitleContainer">
              <div className="BigTitleText">
                Services{" "}
                <span className="BigTitleHighlightedText">We Offer</span>
              </div>
            </div>
            <Col xxl={2} xl={4} lg={4} md={4} sm={6} xs={6}>
              <OurServicesCard
                icon="Images/homepage/business-fundamental.png"
                title="Fundamental Services"
                color="#e5e6f9"
                color2="#8486b5"
                color3="rgba(132,134,181,0.4)"
                action={() => {}}
              />
            </Col>
            <Col xxl={2} xl={4} lg={4} md={4} sm={6} xs={6}>
              <OurServicesCard
                icon="Images/homepage/webDev.png"
                title="Web Development"
                color="#ffeef8"
                color2="#e5a8cc"
                color3="rgba(229,168,204,0.4)"
                action={() => {}}
              />
            </Col>
            <Col xxl={2} xl={4} lg={4} md={4} sm={6} xs={6}>
              <OurServicesCard
                icon="Images/homepage/digitalMarketing.png"
                title="Digital Marketing"
                color="#ebf2fa"
                color2="#7897ba"
                color3="rgba(120,151,186,0.4)"
                action={() => {}}
              />
            </Col>
            <Col xxl={2} xl={4} lg={4} md={4} sm={6} xs={6}>
              <OurServicesCard
                icon="Images/homepage/design.png"
                title="Design"
                color="#e1f3ef"
                color2="#86cabb"
                color3="rgba(134,202,187,0.4)"
                action={() => {}}
              />
            </Col>
            <Col xxl={2} xl={4} lg={4} md={4} sm={6} xs={6}>
              <OurServicesCard
                icon="Images/homepage/marketing.png"
                title="Marketing"
                color="#e9f8e7"
                color2="#95be8f"
                color3="rgba(149,190,143,0.4)"
                action={() => {}}
              />
            </Col>
            <Col xxl={2} xl={4} lg={4} md={4} sm={6} xs={6}>
              <OurServicesCard
                icon="Images/homepage/advertise.png"
                title="Advertising"
                color="#faf6eb"
                color2="#f4c237"
                color3="rgba(234,211,156,0.4)"
                action={() => {}}
              />
            </Col>

            <div className="viewAllButtonDiv">
              <button
                className="btn btn-outline-success viewAllButtonStyle marginTop20 mobileTransformLow7"
                onClick={() => {
                  serviceWindowFunction(true);
                }}
                type="submit"
              >
                VIEW ALL SERVICES
              </button>
            </div>
          </Row>
        </div>

        <div className="whyUsSec">
          <Row xxl={12} xl={12} lg={12} sm={12} xs={12}>
            <div className="BigSubTitleContainer">
              <div className="BigSubTitleText">Bizowl Advantages</div>
            </div>
            <div className="BigTitleContainer">
              <div className="BigTitleText textCapitalize">
                What makes{" "}
                <span className="BigTitleHighlightedText textCapitalize">
                  Bizowl the best{" "}
                </span>
                place For your project?
              </div>
              <div className="BigTitleContainerDecoration"></div>
            </div>

            {tiles.map((tile, index) => (
              <Col
                key={index}
                xxl={2}
                xl={4}
                lg={4}
                md={4}
                sm={6}
                xs={6}
                // onClick={() => handleTileClick(index)}
              >
                <div key={index} onClick={() => handleTileClick(index)}>
                  <WhyUsCard
                    icon={tile.icon}
                    title={tile.title}
                    color={tile.color}
                    color2={tile.color2}
                    color3={tile.color3}
                    color4={tile.color4}
                  />
                </div>
              </Col>
            ))}
          </Row>
          <Dialog
            open={open}
            onClose={handleClose}
            className="dialog-container"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <DialogTitle>{selectedTile ? selectedTile.title : ""}</DialogTitle>
            <DialogContent
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedTile && (
                <>
                  <IconButton
                    className="left-arrow"
                    onClick={() => handleNavigate("prev")}
                  >
                    <ArrowBackIos />
                  </IconButton>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Card
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "25px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={selectedTile.title}
                        height="180"
                        image={selectedTile.icon}
                        style={{
                          objectFit: "cover",
                          width: "180px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      />
                      <CardContent>
                        <Typography>{selectedTile.content}</Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <IconButton
                    className="right-arrow"
                    onClick={() => handleNavigate("next")}
                  >
                    <ArrowForwardIos />
                  </IconButton>
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          {/* {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              content={selectedTile}
              onNavigate={navigateTile}
            />
          )} */}
        </div>

        <div className="howSec">
          <Row xxl={12} xl={12} lg={12} sm={12} xs={12}>
            <div className="BigSubTitleContainer">
              <div className="BigSubTitleText">Our Process</div>
            </div>
            <div className="BigTitleContainer">
              <div className="BigTitleText">How Does It Work</div>
              <div className="BigTitleContainerDecoration"></div>
            </div>
            <HowCard
              icon="Images/homepage/how1.png"
              title="Fill Up The Form "
              title2="Submit your project requirement"
              extra={false}
              line={"40%"}
              direction={"down"}
              isDownLine={false}
              action={() => {}}
            />
            <HowCard
              icon="Images/homepage/how2.png"
              title="Compare Services, Quotations "
              title2="Final prices will be updated within 1-2 hr"
              extra={true}
              line={"30%"}
              direction={"up"}
              isDownLine={true}
              action={() => {}}
            />
            <HowCard
              icon="Images/homepage/how3.png"
              title="Finalize Partner "
              title2="Communicate and finalize the partner"
              extra={false}
              line={"60%"}
              direction={"down"}
              isDownLine={false}
              action={() => {}}
            />
            <HowCard
              icon="Images/homepage/how4.png"
              title="Sign Agreement To "
              title2="Proceed Further"
              extra={true}
              line={"30%"}
              direction={"up"}
              isDownLine={true}
              action={() => {}}
            />
            <HowCard
              icon="Images/homepage/how5.png"
              title="Upfront Payment & "
              title2="Work Start"
              extra={false}
              line={"60%"}
              direction={"down"}
              isDownLine={false}
              action={() => {}}
            />
            <HowCard
              icon="Images/homepage/how6.png"
              title="Project Delivery "
              title2="on time"
              extra={true}
              line={""}
              direction={"no"}
              isDownLine={false}
              action={() => {}}
            />
          </Row>
        </div>

        <div className="whyBestSec">
          <Row md={12}>
            <Col md={6} className="whyBestLeftCol">
              <div className="whyBestTitleContainer">
                <div className="BigSubTitleText">Why Bizowl?</div>
              </div>
              <div className="whyBestTitleContainer">
                <div className="whyBestTitleText textCapitalize">
                  Choose Bizowl for{" "}
                </div>
              </div>
              <div className="whyBestTitleContainer">
                <div className="whyBestTitleText textCapitalize">
                  Genuine Business Care{" "}
                </div>
                <div className="whyBestContainerDecoration"></div>
              </div>
              <div className="whyBestTitleContainer">
                <div className="whyBestTitleText textCapitalize">
                  and{" "}
                  <div className="whyBestTitleHighlightedText textCapitalize">
                    Solutions
                  </div>
                </div>

                <div className="whyBestDescription textCapitalize">
                  At Bizowl we understand the true emotion behind your business.
                  It is your dream, your hard work and your everything. That is
                  why when you choose the Bizowl for your business services you
                  are not getting just a service provider, in fact you are
                  choosing a business growth partner who genuinely wants and
                  cares about the growth and success of your business. Plus, you
                  get a platform where everything is customizable and as per
                  your need. You get to compare and choose the services as per
                  your need.
                </div>
              </div>
            </Col>
            <Col md={6} sm={12} xs={12} className="col2Style">
              <Row md={12} sm={12} xs={12}>
                <Col md={1}></Col>
                <Col md={5} sm={6} xs={6}>
                  <WhyBestCard
                    icon="Images/homepage/genuine-care2.png"
                    title="Genuine Care"
                    color="#ffeef8"
                    color2="#e5a8cc"
                    color3="rgba(229,168,204,0.4)"
                    action={() => {}}
                  />
                </Col>
                <Col md={5} sm={6} xs={6}>
                  <WhyBestCard
                    icon="Images/homepage/whyBest2.png"
                    title="Best Prices"
                    color="#ebf2fa"
                    color2="#7897ba"
                    color3="rgba(120,151,186,0.4)"
                    action={() => {}}
                  />
                </Col>
                <Col md={1}></Col>
              </Row>
              <Row md={12} sm={12} xs={12}>
                <Col md={1}></Col>
                <Col md={5} sm={6} xs={6}>
                  <WhyBestCard
                    icon="Images/homepage/smartComparison.png"
                    title="Smart Service Comparison"
                    color="#e5e6f9"
                    color2="#8486b5"
                    color3="rgba(132,134,181,0.4)"
                    action={() => {}}
                  />
                </Col>
                <Col md={5} sm={6} xs={6}>
                  <WhyBestCard
                    icon="Images/homepage/exclusiveAggregator.png"
                    title="Exclusive Aggregator"
                    color="#e1f3ef"
                    color2="#86cabb"
                    color3="rgba(134,202,187,0.4)"
                    action={() => {}}
                  />
                </Col>
                <Col md={1}></Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div
          className="ourStorySec"
          style={{
            backgroundColor: "#fff",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="BigSubTitleContainer">
            <div className="BigSubTitleText">Our Story</div>
          </div>
          <div className="BigTitleContainer">
            <div className="BigTitleText">
              <span className="BigTitleHighlightedText"> Journey so far</span>:{" "}
              Bridging Gaps, Unleashing Potential
            </div>
            <div className="BigTitleContainerDecoration"></div>
          </div>
          <div
            className="card-hook-container"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {!isMobile && (
              <div
                style={{ backgroundColor: "#cf9dbb" }}
                className="BigTitleContainerDecoration story one"
              ></div>
            )}
            {!isMobile && (
              <div
                style={{ backgroundColor: "#9bc5ef" }}
                className="BigTitleContainerDecoration story two"
              ></div>
            )}
            {!isMobile && (
              <div
                style={{ backgroundColor: "#a1d4c9" }}
                className="BigTitleContainerDecoration story three"
              ></div>
            )}
            {!isMobile && (
              <div
                style={{ backgroundColor: "#a0a3d8" }}
                className="BigTitleContainerDecoration story four"
              ></div>
            )}
            {!isMobile && <div className="white-story1"></div>}
            {!isMobile && <div className="black-story1"></div>}
            {!isMobile && <div className="white-story2"></div>}
            {!isMobile && <div className="black-story2"></div>}
            {!isMobile && <div className="white-story3"></div>}
            {!isMobile && <div className="black-story3"></div>}
            {!isMobile && <div className="white-story4"></div>}
            {!isMobile && <div className="black-story4"></div>}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: isMobile && "center",
              textAlign: "left",
              gap: "20px",
              // marginTop: "40px",
              // marginRight: "50px",
            }}
            className="story-card-container"
          >
            <div
              style={{
                padding: "50px 30px",
                margin: "20px",
                backgroundColor: "#ffeef8",
                border: "2px solid #faa0a0",
                borderRadius: "25px",
                width: "280px",
                height: "410px",
              }}
              className="story1-card"
            >
              <h6 style={{ fontWeight: "bold" }}>Story Begins</h6>
              <p>
                Our story at Bizowl begins with our founder's experience running
                a D2C brand. It revealed a common issue: startup failures were
                due to fundamental gaps in understanding the market, defining
                the problem, identifying market size, understanding customer
                needs, and working on the wrong business model.
              </p>
            </div>
            <div
              style={{
                padding: "50px 30px",
                margin: "20px",
                backgroundColor: "#d7e9fd",
                border: "none",
                borderRadius: "25px",
                width: "280px",
                height: "320px",
              }}
              className="story2-card"
            >
              <h6 style={{ fontWeight: "bold" }}>There's Always More</h6>
              <p>
                Another issue arose: finding reliable service partners. There
                were marketplaces, but they did not prioritize business growth
                or ensure quality work or can say they were not specifically
                focusing on business services.
              </p>
            </div>
            <div
              style={{
                padding: "50px 30px",
                margin: "20px",
                backgroundColor: "#e1f3ef",
                border: "none",
                borderRadius: "25px",
                width: "280px",
                height: "auto",
              }}
              className="story3-card"
            >
              <h6 style={{ fontWeight: "bold" }}>The Solution</h6>
              <p>
                Bizowl was created to address both issues. <br />
                <br />
                We begin by concentrating on the fundamentals, providing few
                services for free to promote entrepreneurship.
                <br />
                <br />
                From market research to digital marketing and advertising, our
                platform provides access to important digital and business
                fundamental services, providing end-to-end solutions for your
                business Success.
                <br />
                <br />
                User can compare prices, features and portfolio to choose to
                best option for their need.
              </p>
            </div>
            <div
              style={{
                padding: "50px 30px",
                margin: "20px",
                backgroundColor: "#e5e6f9",
                border: "none",
                borderRadius: "25px",
                width: "280px",
                height: "260px",
              }}
              className="story4-card"
            >
              <h6 style={{ fontWeight: "bold" }}>Founder's Vision</h6>
              <p>
                Our Vision is get your basic strong and provide you the services
                as per your budget, need and industry you are serving, so you
                get to see the real growth in real time.
              </p>
            </div>
          </div>
          {/* {!isMobile && (
          <svg
            className="line-card"
            xmlns="http://www.w3.org/2000/svg"
            width="auto"
            height="600"
            viewBox="0 0 1257 350"
            fill="none"
            style={{
              flexShrink: "0",
              zIndex: "1",
              marginLeft: "140px",
              position: "relative",
              bottom: "850px",
              maxWidth: "1000px",
            }}
            // style={{ strokeWidth: "2px", stroke: "#071C34", opacity: "0.2" }}
          >
            <path
              opacity="0.2"
              d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM1345.67 356C1345.67 358.946 1348.05 361.333 1351 361.333C1353.95 361.333 1356.33 358.946 1356.33 356C1356.33 353.055 1353.95 350.667 1351 350.667C1348.05 350.667 1345.67 353.055 1345.67 356ZM70.6356 6.36517L70.63 7.36516L70.6356 6.36517ZM5.99435 6.99998L70.63 7.36516L70.6413 5.36519L6.00565 5.00002L5.99435 6.99998ZM93.5 30.3648V371H95.5V30.3648H93.5ZM118.5 396H172V394H118.5V396ZM172 396H515V394H172V396ZM540 371V30.5H538V371H540ZM563 7.5H897V5.5H563V7.5ZM897 7.5H979V5.5H897V7.5ZM1002 30.5V332H1004V30.5H1002ZM1027 357H1351V355H1027V357ZM1002 332C1002 345.807 1013.19 357 1027 357V355C1014.3 355 1004 344.703 1004 332H1002ZM540 30.5C540 17.7974 550.297 7.5 563 7.5V5.5C549.193 5.5 538 16.6929 538 30.5H540ZM515 396C528.807 396 540 384.807 540 371H538C538 383.703 527.703 394 515 394V396ZM979 7.5C991.703 7.5 1002 17.7975 1002 30.5H1004C1004 16.6929 992.807 5.5 979 5.5V7.5ZM93.5 371C93.5 384.807 104.693 396 118.5 396V394C105.797 394 95.5 383.703 95.5 371H93.5ZM70.63 7.36516C83.2816 7.43664 93.5 17.713 93.5 30.3648H95.5C95.5 16.6128 84.393 5.44288 70.6413 5.36519L70.63 7.36516Z"
              fill="#071C34"
            />
          </svg>
          )} */}
        </div>

        <div className="testimonialSec">
          <Row xxl={12} xl={12} lg={12} sm={12} xs={12}>
            <div className="BigSubTitleContainer">
              <div className="BigSubTitleText">Testimonial</div>
            </div>

            <div className="BigTitleContainer">
              <div className="BigTitleText">
                What
                <span className="BigTitleHighlightedText">
                  {" "}
                  our customer{" "}
                </span>{" "}
                says
              </div>
              <div className="BigTitleContainerDecoration"></div>
            </div>

            <div className="testimonialSection">
              <Slider ref={slickSliderRef} {...testimonialSettings}>
                {TestimonialDesign(
                  "5",
                  "Perfect place to use any service. I love their concept of business. It saves a lot of time and prices are according to budget.",
                  "Kravitz",
                  "",
                  "Images/company/kravitz.jpg"
                )}
                {TestimonialDesign(
                  "4",
                  "Used their service for my business, Shiv Vinayak Band in Palam Delhi, I had the time and knowledge issue so I handed over everything on BIZOWL'S team, told them my budget and they did a fabulous job. They did a complete make over using their partners services. I would definitely recommend BizOwl, at least give them a try and know by yourself.",
                  "Shiv Vinayak Band",
                  "",
                  "Images/company/shivVinayakBand.png"
                )}
                {TestimonialDesign(
                  "5",
                  "Great! We got BIZOWL's services for digitalization of our company INDUS OVERSEAS. BIZOWL made is easy to explore our business internationally. Thanks",
                  "Indus Overseas",
                  "",
                  "Images/company/logoindus.png"
                )}
              </Slider>

              {/**************************** Testimonial Section Button ****************************/}
              <div className="testimonialLeftInner4 marginTop10">
                <button
                  onClick={() => {
                    TestimonialsSlide(false, slickSliderRef);
                  }}
                  className="testimonialButtonLeft"
                >
                  <RxCaretLeft size={40} className="caretHoverEffect" />
                </button>
                <button
                  onClick={() => {
                    TestimonialsSlide(true, slickSliderRef);
                  }}
                  className="testimonialButtonRight"
                >
                  <RxCaretRight size={40} className="caretHoverEffect" />
                </button>
                <div className="existTag" />
              </div>
            </div>
          </Row>
        </div>

        <div className="industriesSec">
          <div className="BigSubTitleContainer">
            <div className="BigSubTitleText">Industries</div>
          </div>
          <div className="BigTitleContainer">
            <div className="BigTitleText">
              <span className="BigTitleHighlightedText">Industries </span> we
              expert in
            </div>
            <div className="BigTitleContainerDecoration"></div>
          </div>
          <div className="industriesMenu">
            <div className="industriesMenu1">
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Banking & Finance");
                  setSelectedIndustryImage("Images/company/finance-img.png");
                  setSelectedIndustryDescription(
                    "Due to the cross-industry knowledge of our registered partner, we can quickly create complex fintech solutions for clients in the banking and financial sector. Benefiting features including payout modules, credit management systems, and any other Feature that is required by our client in these applications."
                  );
                }}
                icon="Images/homepage/banking.png"
                icon2="Images/homepage/banking2.png"
                title="Banking & Finance"
                active={selectedIndustry === "Banking & Finance" ? true : false}
              />
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Logistics & Transportation");
                  setSelectedIndustryImage("Images/company/logistic-img.png");
                  setSelectedIndustryDescription(
                    "Businesses in the logistics and transportation sector can get help from our skilled registered and verified partners to make sure their operations are consistently reliable and effective. In addition to comprehensive integrated websites, computer networking, tracker Software, inventory validation software, and other services, we also provide them. Our objective is to give our clients the best results possible"
                  );
                }}
                icon="Images/homepage/logistics.png"
                icon2="Images/homepage/logistics2.png"
                title="Logistics & Transportation"
                active={
                  selectedIndustry === "Logistics & Transportation"
                    ? true
                    : false
                }
              />
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Healthcare & Medical");
                  setSelectedIndustryImage("Images/company/medicine-bro1.png");
                  setSelectedIndustryDescription(
                    "Due to their extensive customer experience and leadership in advancing the health of thousands of people, our partners have the required knowledge to meet the needs of clients in the healthcare sector. They specialize in creating effective websites and apps for ordering, nutraceuticals, and other products as well as scheduling testing. Our services help clients reach a wider audience and produce the intended effects. "
                  );
                }}
                icon="Images/homepage/health.png"
                icon2="Images/homepage/health2.png"
                title="Healthcare & Medical"
                active={
                  selectedIndustry === "Healthcare & Medical" ? true : false
                }
              />
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Education & Learning");
                  setSelectedIndustryImage("Images/company/learning.png");
                  setSelectedIndustryDescription(
                    "No matter what our customers want, Bizowl promises to deliver the greatest service. By creating specialized software and platforms for online learning, we have taken steps to assure uninterrupted education and learning. Our solutions are customized to match the clients' business needs."
                  );
                }}
                icon="Images/homepage/education.png"
                icon2="Images/homepage/education2.png"
                title="Education & Learning"
                active={
                  selectedIndustry === "Education & Learning" ? true : false
                }
              />
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Fashion & Lifestyle");
                  setSelectedIndustryImage("Images/company/Fashion1.png");
                  setSelectedIndustryDescription(
                    "A number of clients in the fashion industry have benefited from Bizowl's roster of registered and verified partners, who have aided them grow their businesses by offering visually appealing website and application development solutions. In addition, we enabled them reach their target audience by delivering them with crucial D2C business services like branding, digital marketing, platform placement, and packaging."
                  );
                }}
                icon="Images/homepage/fashion.png"
                icon2="Images/homepage/fashion2.png"
                title="Fashion & Lifestyle"
                active={
                  selectedIndustry === "Fashion & Lifestyle" ? true : false
                }
              />
            </div>
            <div className="industriesMenuBody">
              <IndustriesBigCard
                icon={selectedIndustryImage}
                title={selectedIndustry}
                description={selectedIndustryDescription}
              />
            </div>
            <div className="industriesMenu2">
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Food & Beverage");
                  setSelectedIndustryImage("Images/company/Food1.png");
                  setSelectedIndustryDescription(
                    "Are you looking to grow your online food sector business? You can work with our team to create a unique app or website that meets your requirements. We offer a wide range of services to support your success in this cutthroat sector. By working with us, you'll have access to our network of talented developers who have produced popular websites and apps that have delighted countless families and assisted companies in reaching a larger market. Let us assist you in providing your consumers with some exquisite joy right now."
                  );
                }}
                icon="Images/homepage/food.png"
                icon2="Images/homepage/food2.png"
                title="Food & Beverage"
                active={selectedIndustry === "Food & Beverage" ? true : false}
              />
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Gaming");
                  setSelectedIndustryImage("Images/company/gaming1.png");
                  setSelectedIndustryDescription(
                    "You want to create the next huge gaming sensation like Call of Duty, PUBG, or any other game. Our team is the only place to turn! Regardless of your needs, our team of gaming experts has the responsible mindset to swiftly grasp your gaming requirements and create the ideal game and gaming app for you. Also, we charge a very very fair fee for our services."
                  );
                }}
                icon="Images/homepage/gaming.png"
                icon2="Images/homepage/gamingWhite.png"
                title="Gaming"
                active={selectedIndustry === "Gaming" ? true : false}
              />
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Tourism");
                  setSelectedIndustryImage("Images/company/Tourism1.png");
                  setSelectedIndustryDescription(
                    "Want to reach your tourism-related business objectives? We at Bizowl have the ideal collaborators to assist you in doing just that. Our team has worked with a range of clients in the manufacturing industry, producing services that are value-driven and purpose-driven. We can assist you whether you want to create a new website, boost your internet presence, or just organize your business processes."
                  );
                }}
                icon="Images/homepage/tourism.png"
                icon2="Images/homepage/tourismWhite.png"
                title="Tourism"
                active={selectedIndustry === "Tourism" ? true : false}
              />
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("Real Estate");
                  setSelectedIndustryImage("Images/company/Real-estate.png");
                  setSelectedIndustryDescription(
                    "Our business is dedicated to giving real estate agents the best technology solutions available. We have been able to supply cutting-edge services, such as showcase websites, digital marketing, advertising and a variety of other digital solutions specifically suited to the real estate business, thanks to our team of knowledgeable partners and agencies. You may create a strong foundation for success and grow your company to greater heights with our guidance. Also, we keep up with the most recent technological developments, enabling us to provide you with the resources you need to stay one step ahead of the competition. Today, let us assist you in expanding your real estate business."
                  );
                }}
                icon="Images/homepage/realestate.png"
                icon2="Images/homepage/realestate2.png"
                title="Real Estate"
                active={selectedIndustry === "Real Estate" ? true : false}
              />
              <IndustriesSmallCard
                action={() => {
                  setSelectedIndustry("E-commerce");
                  setSelectedIndustryImage("Images/company/E-commerce.png");
                  setSelectedIndustryDescription(
                    "We can better understand D2C businesses because the founder of Bizowl previously operated one. We can assist you in achieving your goals. Our prior experience can provide you an advantage as we can direct your moves. We can assist you in creating websites based on bespoke technology, Woo Commerce, or Shopify."
                  );
                }}
                icon="Images/homepage/ecommerce.png"
                icon2="Images/homepage/ecommerce2.png"
                title="E-commerce"
                active={selectedIndustry === "E-commerce" ? true : false}
              />
            </div>
          </div>
        </div>

        <div className="askUsAnythingSec">
          <AskBigCard />
        </div>

        <div className="faqSec">
          <div className="faqLeft">
            <img src="Images/homepage/FAQ1.png" alt="faq" className="faqImage" />
          </div>
          <div className="faqRight">
            <div className="faqTitleContainer">
              <div className="BigSubTitleText">Support</div>
            </div>
            <div className="faqTitleContainer">
              <div className="fontWeight500 BigTitleText">
                Frequently Asked{" "}
                <span className="fontWeight500 BigTitleHighlightedText">
                  Questions{" "}
                </span>
              </div>
            </div>
            <Faq
              data={faqData}
              config={{
                animate: true,
                arrowIcon: "+",
                arrowColor: "red",
              }}
            />
          </div>
        </div>

        <div className="companySec">
          <div className="companySection">
            <div className="BigTitleText left">
              Company We Have
              <span className="BigTitleHighlightedText"> Served</span>
            </div>
            <div className="marginTop30">
              <Slider {...settings}>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/kravitz.jpg"}
                  />
                </div>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/Astro_logo.png"}
                  />
                </div>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/CSLogo640.png"}
                  />
                </div>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/FINALCOLLISONLOGO.png"}
                  />
                </div>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/infocialist-icon.png"}
                  />
                </div>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/logoindus.png"}
                  />
                </div>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/shivVinayakBand.png"}
                  />
                </div>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/Warpsnwoofs.png"}
                  />
                </div>
                <div className="flex centerDiv">
                  <img
                    alt=""
                    className="sliderImageSection"
                    src={"/Images/company/jewal.png"}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="blogsSec">
          <div className="BigTitleContainer">
            <div className="BigTitleText">
              <span className="BigTitleHighlightedText">Our </span>Latest Blogs
            </div>
            <div className="BigTitleContainerDecoration"></div>
          </div>
          <div className="blogsMenu fullHeight">
            <div className="industriesMenuBody fullWidth">
              <Row md={12}>
                {blogPosts.map((post) => (
                  <Col key={post.id} md={6} className="marginTop20">
                    <Link to={`/blogs/${post.tag}/${post.urlTitle}`}>
                      {" "}
                      {/* Use Link component for each blog post */}
                      <BlogsBigCard2
                        icon={post.icon}
                        jobTitle={post.jobTitle}
                        title={post.title}
                        description={post.description}
                        date={post.date}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>

        {/* <div className='blogsSec'>
          <div className='BigSubTitleContainer'>
            <div className='BigSubTitleText'>Blogs</div>
          </div>
          <div className='BigTitleContainer'>
            <div className='BigTitleText'><span className='BigTitleHighlightedText'>Our </span>Latest Blogs</div>
            <div className='BigTitleContainerDecoration'></div>
          </div>
          <div className='blogsMenu'>
            <div className='industriesMenuBody'>
              <BlogsBigCard jobTitle='Web Designer' icon="Images/homepage/blogs1.png" title="Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices " description="Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices sodales. Et in morbi amet aliquet amet placerat pretium.Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices sodales." date='20-Mar-2020' />
            </div>
            <div className='blogsMenu2'>
              <BlogsSmallCard jobTitle='Web Designer' icon="Images/homepage/blogs2.png" title="Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices " description="Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices sodales. Et in morbi amet aliquet amet placerat pretium.Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices sodales." date='20-Mar-2020' />
              <BlogsSmallCard jobTitle='Web Designer' icon="Images/homepage/blogs2.png" title="Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices " description="Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices sodales. Et in morbi amet aliquet amet placerat pretium.Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices sodales." date='20-Mar-2020' />
              <BlogsSmallCard jobTitle='Web Designer' icon="Images/homepage/blogs2.png" title="Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices " description="Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices sodales. Et in morbi amet aliquet amet placerat pretium.Lorem ipsum dolor sit amet consectetur. Massa dictum convallis eget duis ultrices sodales." date='20-Mar-2020' />
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
