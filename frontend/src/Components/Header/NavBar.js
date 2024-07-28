import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../Styles/CompStyle/NavBarStyle.scss";
import { NavLink } from "react-router-dom";
import { setIsVisible } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { LandingPagePopup } from "../Design/fixedDesigns";
import { WindowOpenLink } from "../Extra/extraFunction";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isActiveHoroscope, setIsActiveHoroscope] = useState(false);
  const { isVisible, isClosed, isSubmit } = useSelector(
    (state) => state.landingPageReducer
  );

  useEffect(() => {
    setTimeout(() => {
      if (!isClosed && !isSubmit) dispatch(setIsVisible(true));
    }, 30000); // 30 Sec
  }, []);

  var hyperMainMenuHeadStackList = [
    {
      name: "Business Fundamental Services",
      image: "Images/services/Other/StartupConsulting.png",
    },
    {
      name: "WEBSITE DEVELOPMENT",
      image: "Images/services/Graphic/WebsiteDesign.png",
    },
    {
      name: "DIGITAL MARKETING",
      image: "/Images/services/DigitalMarketing/SocialMediaMarketing.png",
    },
    {
      name: "GRAPHIC DESIGN SERVICE",
      image: "/Images/services/Graphic/WebsiteDesign.png",
    },
    // {
    //     name: 'MEDIA PRODUCTION',
    //     image: '/Images/services/MediaProduction/SocialMediaVideos.png'
    // },
    {
      name: "MARKETING",
      image: "Images/services/Marketing/ContentMarketing.png",
    },
    {
      name: "ADVERTISING",
      image: "Images/services/DigitalMarketing/SocialMediaAdvertising.png",
    },
  ];

  var hyperSubMenuStackList = [
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      name: "Business Fundamental Services",
      image: "Images/services/Other/StartupConsulting.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      name: "Website Development",
      image: "Images/services/Graphic/WebsiteDesign.png",
    },
    {
      head: "DIGITAL MARKETING",
      name: "Search",
      image: "Images/services/DigitalMarketing/EComSEO.png",
    },
    {
      head: "DIGITAL MARKETING",
      name: "Social",
      image: "Images/services/DigitalMarketing/SocialMediaAdvertising.png",
    },
    {
      head: "DIGITAL MARKETING",
      name: "Methods & Techniques",
      image: "Images/services/DigitalMarketing/Funnelbuilding.png",
    },
    {
      head: "DIGITAL MARKETING",
      name: "Analytics & Strategy",
      image: "Images/services/DigitalMarketing/WebAnalytics1.png",
    },
    {
      head: "DIGITAL MARKETING",
      name: "Industry & Purpose-Specific",
      image: "Images/services/DigitalMarketing/MusicPromotion.png",
    },
    {
      head: "DIGITAL MARKETING",
      name: "Writing",
      image: "Images/services/DigitalMarketing/CreativeWriting.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      name: "Logo & Brand Identity",
      image: "Images/services/Graphic/LogoDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      name: "Web & App Design",
      image: "Images/services/Graphic/AppDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      name: "Marketing Design",
      image: "Images/services/Other/MarketResearch.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      name: "Packaging & Covers",
      image: "Images/services/Graphic/packingAndLabelDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      name: "Print Design",
      image: "Images/services/Graphic/CatalogueDesign.png",
    },
    // {
    //   head: "MEDIA PRODUCTION",
    //   name: "Video",
    //   image: "Images/services/DigitalMarketing/VideoMarketing.png",
    // },
    // {
    //   head: "MEDIA PRODUCTION",
    //   name: "Still",
    //   image: "Images/services/MediaProduction/CorporateShoots.png",
    // },
    // {
    //   head: "MEDIA PRODUCTION",
    //   name: "Audio",
    //   image: "Images/services/MediaProduction/AudioLogo.png",
    // },
    {
      head: "MARKETING",
      name: "Marketing",
      image: "Images/services/Marketing/ContentMarketing.png",
    },
    {
      head: "ADVERTISING",
      name: "Advertising",
      image: "Images/services/DigitalMarketing/SocialMediaAdvertising.png",
    },
  ];

  var hyperMenuStackList = [
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Logo & Brand Identity",
      name: "Visual Design",
      image: "Images/services/Graphic/visualDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Logo & Brand Identity",
      name: "Logo Design",
      image: "Images/services/Graphic/LogoDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Logo & Brand Identity",
      name: "Website Design",
      image: "Images/services/Graphic/WebsiteDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Logo & Brand Identity",
      name: "Brand Style Guides",
      image: "Images/services/Graphic/BrandStyleGuide.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Logo & Brand Identity",
      name: "Fonts & Typography",
      image: "Images/services/Graphic/FontStyleGuide.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Logo & Brand Identity",
      name: "Business Cards & Stationery",
      image: "Images/services/Graphic/BusinessCardsAndStationary.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Logo & Brand Identity",
      name: "Brand Identity",
      image: "Images/services/Graphic/BrandIdentity.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Web & App Design",
      name: "Website design",
      image: "Images/services/Graphic/WebsiteDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Web & App Design",
      name: "App Design",
      image: "Images/services/Graphic/AppDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Web & App Design",
      name: "UX Design",
      image: "Images/services/Graphic/UXDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Web & App Design",
      name: "Landing Page Design",
      image: "Images/services/Graphic/LandingPageDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Web & App Design",
      name: "Icon Design",
      image: "Images/services/Graphic/IconDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Marketing Design",
      name: "Social Media Creatives Design",
      image: "Images/services/Graphic/SocialMediaCreatives.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Marketing Design",
      name: "Email Design",
      image: "Images/services/Graphic/EmailDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Marketing Design",
      name: "Web Banners",
      image: "Images/services/Graphic/WebBanners.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Packaging & Covers",
      name: "Packaging & Label Design",
      image: "Images/services/Graphic/packingAndLabelDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Packaging & Covers",
      name: "Image Editing",
      image: "Images/services/Graphic/ImageEditing.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Packaging & Covers",
      name: "Infographic Design",
      image: "Images/services/Graphic/InfographicDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Packaging & Covers",
      name: "T-Shirts & Merchandise",
      image: "Images/services/Graphic/MerchandiseDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Print Design",
      name: "Flyer Design",
      image: "Images/services/Graphic/FlyerDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Print Design",
      name: "Brochure Design",
      image: "Images/services/Graphic/BrochureDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Print Design",
      name: "Poster Design",
      image: "Images/services/Graphic/PosterDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Print Design",
      name: "Catalog Design",
      image: "Images/services/Graphic/CatalogueDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Print Design",
      name: "Menu Design",
      image: "Images/services/Graphic/MenuDesign.png",
    },
    {
      head: "GRAPHIC DESIGN SERVICE",
      mainMenu: "Print Design",
      name: "Invitation Design",
      image: "Images/services/Graphic/InvitationDesign.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Search",
      name: "Search Engine Optimization (SEO)",
      image: "Images/services/DigitalMarketing/SEO.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Search",
      name: "Search Engine Marketing (SEM)",
      image: "Images/services/DigitalMarketing/SEM.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Search",
      name: "Local SEO",
      image: "Images/services/DigitalMarketing/LocalSEO.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Search",
      name: "E-Commerce SEO",
      image: "Images/services/DigitalMarketing/EComSEO.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Search",
      name: "Video SEO",
      image: "Images/services/DigitalMarketing/VideoSEO.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Social",
      name: "Social Media Marketing",
      image: "Images/services/DigitalMarketing/SocialMediaMarketing.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Social",
      name: "Social Media Advertising",
      image: "Images/services/DigitalMarketing/SocialMediaAdvertising.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Social",
      name: "Social Media Management",
      image: "Images/services/DigitalMarketing/SocialMediaManagement.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Social",
      name: "PPC ( Pay Per Click )",
      image: "Images/services/Advertising/PPC.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Methods & Techniques",
      name: "Video Marketing",
      image: "Images/services/DigitalMarketing/VideoMarketing.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Methods & Techniques",
      name: "E-Commerce Marketing",
      image: "Images/services/MediaProduction/ECommerceProduct.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Methods & Techniques",
      name: "Email Marketing",
      image: "Images/services/DigitalMarketing/EmilMarketing.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Methods & Techniques",
      name: "Text Message Marketing",
      image: "Images/services/DigitalMarketing/SMSMarketing.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Methods & Techniques",
      name: "Funnel Building",
      image: "Images/services/DigitalMarketing/Funnelbuilding.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Methods & Techniques",
      name: "Link building",
      image: "Images/services/DigitalMarketing/LinkBuilding.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Analytics & Strategy",
      name: "Marketing Strategy",
      image: "Images/services/DigitalMarketing/MarketingStrategy.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Analytics & Strategy",
      name: "Web Analytics",
      image: "Images/services/DigitalMarketing/WebAnalytics1.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Industry & Purpose-Specific",
      name: "Music Promotion",
      image: "Images/services/DigitalMarketing/MusicPromotion.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Industry & Purpose-Specific",
      name: "Book & eBook Marketing",
      image: "Images/services/DigitalMarketing/BookMarketing.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Industry & Purpose-Specific",
      name: "Mobile App Marketing",
      image: "Images/services/DigitalMarketing/MobileAppMarketing.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Articles & Blog Posts",
      image: "Images/services/DigitalMarketing/ArticleLogPost.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Ad Copy",
      image: "Images/services/DigitalMarketing/Adcopy.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Social Media Copy",
      image: "Images/services/DigitalMarketing/SocialMediaMarketing.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Email Copy",
      image: "Images/services/DigitalMarketing/Funnelbuilding.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Case Studies",
      image: "Images/services/DigitalMarketing/CaseStudy.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Creative Writing",
      image: "Images/services/DigitalMarketing/CreativeWriting.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Technical Writing",
      image: "Images/services/DigitalMarketing/TechnicalWriting.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Website Content",
      image: "Images/services/DigitalMarketing/WebsiteContent.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Product Descriptions",
      image: "Images/services/DigitalMarketing/ProductDescriptions.png",
    },
    {
      head: "DIGITAL MARKETING",
      mainMenu: "Writing",
      name: "Press Releases",
      image: "Images/services/DigitalMarketing/PressReleaseService.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "Corporate Videos",
      image: "Images/services/MediaProduction/CorporateVideos.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "Ad Film Shoot",
      image: "Images/services/MediaProduction/AdFilmShoot.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "Video Editing",
      image: "Images/services/MediaProduction/VideoEditing.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "Animated Explainers",
      image: "Images/services/MediaProduction/AnimatedExplainers.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "Logo Animation",
      image: "Images/services/MediaProduction/logoAnimation.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "Intro & Outro Videos",
      image: "Images/services/MediaProduction/IntroOutroVideo.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "App & Website Previews",
      image: "Images/services/MediaProduction/AppWebPreview.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "Social Media Videos",
      image: "Images/services/MediaProduction/SocialMediaVideos.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Video",
      name: "E-Commerce Product Videos",
      image: "Images/services/MediaProduction/ECommerceProduct.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Still",
      name: "Product Photography",
      image: "Images/services/MediaProduction/ProductPhotography.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Still",
      name: "Commercial Shoots",
      image: "Images/services/MediaProduction/CommercialShoot.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Still",
      name: "Corporate Shoots",
      image: "Images/services/MediaProduction/CorporateShoots.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Audio",
      name: "Voice Over",
      image: "Images/services/MediaProduction/VoiceOver.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Audio",
      name: "Audio Ads Production",
      image: "Images/services/MediaProduction/AudioAds.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Audio",
      name: "Audio Editing",
      image: "Images/services/MediaProduction/AudioEditing.png",
    },
    {
      head: "MEDIA PRODUCTION",
      mainMenu: "Audio",
      name: "Audio Logo & Sonic Branding",
      image: "Images/services/MediaProduction/AudioLogo.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Website Development",
      image: "Images/services/WebDevelopment/WebDevelopment.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Website Maintenance",
      image: "Images/services/WebDevelopment/WebSiteMaintenance.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Business Websites",
      image: "Images/services/Graphic/WebsiteDesign.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "E-Commerce Development",
      image: "Images/services/WebDevelopment/EComDevelopment.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Blog Website",
      image: "Images/services/WebDevelopment/BlogWebsite.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "WordPress Websites",
      image: "Images/services/WebDevelopment/WebDevelopment.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Simple Static Website",
      image: "Images/services/WebDevelopment/SimpleStaticWebsite.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Woo Commerce",
      image: "Images/services/WebDevelopment/WooCommerce.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Shopify",
      image: "Images/services/WebDevelopment/ShopifyDevelopment.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Wix",
      image: "Images/services/WebDevelopment/Wix.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Custom Websites",
      image: "Images/services/WebDevelopment/CustomSite.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Application Development",
      image: "Images/services/WebDevelopment/AppDevelopment.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Game Development",
      image: "Images/services/WebDevelopment/GameDevelopment.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Al Applications",
      image: "Images/services/WebDevelopment/AIApplication.png",
    },
    {
      head: "WEBSITE DEVELOPMENT",
      mainMenu: "Website Development",
      name: "Support & IT",
      image: "Images/services/WebDevelopment/ItSupport.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "Billboard Advertising",
      image: "Images/services/Advertising/BillboardAdvt.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "TV ads",
      image: "Images/services/Advertising/TvAds.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "YouTube Advertisement",
      image: "Images/services/Advertising/YoutubeAdvertsing.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "Metro Advertising",
      image: "Images/services/Advertising/MetroAdvertisement.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "FM Radio ads",
      image: "Images/services/Advertising/FmRadioAds.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "Audio Ads",
      image: "Images/services/MediaProduction/AudioAds.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "PPC ( Pay Per Click ) Advertising",
      image: "Images/services/Advertising/PPC.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "Newspaper & Magazine Ads",
      image: "Images/services/Advertising/NewspaperAds.png",
    },
    {
      head: "ADVERTISING",
      mainMenu: "Advertising",
      name: "Vehicle Wraps & Bus Signage",
      image: "Images/services/Advertising/VehicleWraps.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "Content Marketing",
      image: "Images/services/Marketing/ContentMarketing.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "Influencer Marketing",
      image: "Images/services/Marketing/InfluencerAdvt.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "Inbound Marketing",
      image: "Images/services/Marketing/InboundMarketing.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "Outbound Marketing",
      image: "Images/services/Marketing/OutboundMArketing.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "B2B Marketing",
      image: "Images/services/Marketing/B2BMarketing.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "Public Relations",
      image: "Images/services/Other/SalesCustomerCare.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "Paid Media",
      image: "Images/services/Marketing/PaidMedia.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "Offline Marketing",
      image: "Images/services/Marketing/OfflineMarketing.png",
    },
    {
      head: "MARKETING",
      mainMenu: "Marketing",
      name: "Affiliate Marketing",
      image: "Images/services/Marketing/AffiliateMarketing.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Market Research",
      image: "Images/services/Other/MarketResearch.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Idea Validation",
      image: "Images/services/BusinessFundamental/IdeaValidation.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Business Model Development",
      image: "Images/services/BusinessFundamental/BusinessModelDevelopment.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Target Audience Analysis",
      image: "Images/services/BusinessFundamental/TargetAudienceAnalsyis.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Market Entry Strategy",
      image: "Images/services/BusinessFundamental/MarketEntry.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Financial Planning",
      image: "Images/services/BusinessFundamental/financial-report.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Startup Consulting",
      image: "Images/services/Other/StartupConsulting.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Business Canvas Model",
      image: "Images/services/BusinessFundamental/BusinessCanvasModel.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Market Size Analysis",
      image: "Images/services/BusinessFundamental/MarketSizeAnalysis.png",
    },
    {
      head: "BUSINESS FUNDAMENTAL SERVICES",
      mainMenu: "Business Fundamental Services",
      name: "Competitor Analysis",
      image: "Images/services/BusinessFundamental/CompetitorsAnalysis.png",
    },
  ];

  const [hyperMainMenuHeadStack, setHyperMainMenuHeadStack] = useState(
    hyperMainMenuHeadStackList
  );
  const [hyperSubMenuStack, setHyperSubMenuStack] = useState(
    hyperSubMenuStackList
  );
  const [hyperMenuStack, setHyperMenuStack] = useState(hyperMenuStackList);

  const [hyperMainMenuHeadStackValue, setHyperMainMenuHeadStackValue] =
    useState("Business Fundamental Services");
  const [hyperSubMenuStackValue, setHyperSubMenuStackValue] = useState(
    "Business Fundamental Services"
  );
  const [hyperMenuStackValue, setHyperMenuStackValue] = useState("");

  const hyperMenuStackValueFunction = (val) => {
    setHyperMenuStackValue(val);
    WindowOpenLink("/projectCreation", "_self");
  };

  return (
    <>
      {LandingPagePopup(dispatch, isVisible)}

      <nav className="navbar paddingPhone0 flexPhoneLeft fixedStyleForMobile bg-body-tertiary navbar-light navBarBGLight">
        <div className="menuButton-mobile">
          <FaBars
            className="barStyle"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
        </div>

        <NavLink className="navbar-brand" to="/">
          <img
            alt=""
            src="/Images/logos/logo-of-BIZOWL--Business-Services.png"
            className="webSection headerImageStyle border border-0 bg-transparent"
          />
        </NavLink>
        <NavLink className="navbar-brand" to="/">
          <img
            alt=""
            src="/Images/logos/logo-of-BIZOWL--Business-Services.png"
            className="mobileSection headerImageStyle border border-0 bg-transparent"
          />
        </NavLink>

        <div className="flex phonePositionRight webPaddingRight6p fontWeight500 hidePhoneView">
          <NavLink className="nav-link navLink" to="/">
            Services
          </NavLink>
          {/* <NavLink className="nav-link navLink" to="/company-name-generator">
            Business Name Generator
          </NavLink> */}
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <div class="nav-link navLink">Tools</div>
              <ul class="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link navLink"
                    to="/company-name-generator"
                  >
                    Business Name Generator
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          {/* <NavLink className="nav-link navLink" to="/aboutUs">
            About us
          </NavLink> */}

          {/* <ul className="navbar-nav text-start">
            <li className="nav-item dropdown">
              <div
                className={
                  isActiveHoroscope
                    ? "active pointer nav-link dropdown-toggle navLink"
                    : "pointer nav-link dropdown-toggle navLink "
                }
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </div>
              <ul className="dropdown-menu hyperMenuSection dropdownItems">
                <div className="hyperMenuSectionFlex">
                  <div className="menuHeadSection headSectionStyle">
                    {hyperMainMenuHeadStack.map((val, index) => {
                      return (
                        <div
                          onMouseOver={() => {
                            setHyperMainMenuHeadStackValue(val.name);
                          }}
                          onClick={() => {
                            setHyperMainMenuHeadStackValue(val.name);
                          }}
                          key={index}
                          className={
                            hyperMainMenuHeadStackValue === val.name
                              ? "activeMenuSection menuHeadSection1"
                              : "menuHeadSection1"
                          }
                        >
                          <img
                            className="menuImages"
                            src={val.image}
                            alt={val.name}
                          />{" "}
                          {val.name}
                        </div>
                      );
                    })}
                  </div>
                  <div className="menuSubHeadSection headSectionStyle">
                    {hyperSubMenuStack.map((val, index) => {
                      if (
                        hyperMainMenuHeadStackValue.toLocaleLowerCase() ===
                        val.head.toLocaleLowerCase()
                      )
                        return (
                          <div
                            onMouseOver={() => {
                              setHyperSubMenuStackValue(val.name);
                            }}
                            onClick={() => {
                              setHyperSubMenuStackValue(val.name);
                            }}
                            key={index}
                            className={
                              hyperSubMenuStackValue === val.name
                                ? "activeMenuSection menuHeadSection1"
                                : "menuHeadSection1"
                            }
                          >
                            <img
                              className="menuImages"
                              src={val.image}
                              alt=""
                            />{" "}
                            {val.name}
                          </div>
                        );
                    })}
                  </div>
                  <div className="menuSubMenuSection headSectionStyle">
                    {hyperMenuStack.map((val, index) => {
                      if (
                        hyperMainMenuHeadStackValue.toLocaleLowerCase() ===
                          val.head.toLocaleLowerCase() &&
                        hyperSubMenuStackValue.toLocaleLowerCase() ===
                          val.mainMenu.toLocaleLowerCase()
                      )
                        return (
                          <div
                            onClick={() => {
                              hyperMenuStackValueFunction(val.name);
                            }}
                            key={index}
                            className={
                              hyperMenuStackValue === val.name
                                ? "activeMenuSection menuHeadSection1"
                                : "menuHeadSection1"
                            }
                          >
                            <img
                              className="menuImages"
                              src={val.image}
                              alt=""
                            />{" "}
                            {val.name}
                          </div>
                        );
                    })}
                  </div>
                </div>
              </ul>
            </li>
          </ul> */}

          <NavLink className="nav-link navLink" to="/resources/blogs">
            Resources
          </NavLink>
          {/* <NavLink className="nav-link navLink" to="/contactUs">
            Contact us
          </NavLink> */}
          <NavLink
            onClick={() => dispatch(setIsVisible(true))}
          >
            Guidance
          </NavLink>
          <a href="https://bizowl-auth.web.app/login">
            <button
              style={{ marginLeft: "20px" }}
              className="btn btn-outline-primary navButtonStyle freeConsultationButton"
            >
              Login
            </button>
          </a>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark navBarBG showPhoneView fullWidth">
        {/**************************************************  Phone View **************************************************/}
        <div
          className="offcanvas offcanvas-start text-bg-dark fullWidth"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <NavLink className="navbar-brand" to="/">
              <img
                alt=""
                src="/Images/logos/logo-of-BIZOWL--Business-Services.png"
                className="fixWidth200 img-thumbnail border border-0 bg-transparent"
              />
            </NavLink>
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body mobileViewHeader">
            <NavLink className="nav-link navLink" to="/">
              Services
            </NavLink>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <div class="nav-link navLink">Tools</div>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink
                      className="nav-link navLink"
                      to="/company-name-generator"
                    >
                      Business Name Generator
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <NavLink className="nav-link navLink" to="/aboutUs">
              About us
            </NavLink> */}

            {/* <ul className="navbar-nav text-start">
              <li className="nav-item dropdown">
                <div
                  className={
                    isActiveHoroscope
                      ? "active pointer nav-link dropdown-toggle navLink"
                      : "pointer nav-link dropdown-toggle navLink "
                  }
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </div>
                <ul className="dropdown-menu hyperMenuSection dropdownItems">
                  <div className="hyperMenuSectionFlex">
                    <div className="menuHeadSection headSectionStyle">
                      {hyperMainMenuHeadStack.map((val, index) => {
                        return (
                          <div
                            onMouseOver={() => {
                              setHyperMainMenuHeadStackValue(val.name);
                            }}
                            onClick={() => {
                              setHyperMainMenuHeadStackValue(val.name);
                            }}
                            key={index}
                            className={
                              hyperMainMenuHeadStackValue === val.name
                                ? "activeMenuSection menuHeadSection1"
                                : "menuHeadSection1"
                            }
                          >
                            <img
                              className="menuImages"
                              src={val.image}
                              alt={val.name}
                            />{" "}
                            {val.name}
                          </div>
                        );
                      })}
                    </div>
                    <div className="menuSubHeadSection headSectionStyle">
                      {hyperSubMenuStack.map((val, index) => {
                        if (
                          hyperMainMenuHeadStackValue.toLocaleLowerCase() ===
                          val.head.toLocaleLowerCase()
                        )
                          return (
                            <div
                              onMouseOver={() => {
                                setHyperSubMenuStackValue(val.name);
                              }}
                              onClick={() => {
                                setHyperSubMenuStackValue(val.name);
                              }}
                              key={index}
                              className={
                                hyperSubMenuStackValue === val.name
                                  ? "activeMenuSection menuHeadSection1"
                                  : "menuHeadSection1"
                              }
                            >
                              <img
                                className="menuImages"
                                src={val.image}
                                alt={val.name}
                              />{" "}
                              {val.name}
                            </div>
                          );
                      })}
                    </div>
                    <div className="menuSubMenuSection headSectionStyle">
                      {hyperMenuStack.map((val, index) => {
                        if (
                          hyperMainMenuHeadStackValue.toLocaleLowerCase() ===
                            val.head.toLocaleLowerCase() &&
                          hyperSubMenuStackValue.toLocaleLowerCase() ===
                            val.mainMenu.toLocaleLowerCase()
                        )
                          return (
                            <div
                              onClick={() => {
                                hyperMenuStackValueFunction(val.name);
                              }}
                              key={index}
                              className={
                                hyperMenuStackValue === val.name
                                  ? "activeMenuSection menuHeadSection1"
                                  : "menuHeadSection1"
                              }
                            >
                              <img
                                className="menuImages"
                                src={val.image}
                                alt={val.name}
                              />{" "}
                              {val.name}
                            </div>
                          );
                      })}
                    </div>
                  </div>
                </ul>
              </li>
            </ul> */}

            <NavLink className="nav-link navLink" to="/blogs">
              Resources
            </NavLink>
            {/* <NavLink className="nav-link navLink" to="/contactUs">
              Contact us
            </NavLink> */}
            <NavLink onClick={() => dispatch(setIsVisible(true))} className="nav-link navLink">
              Guidance
            </NavLink>
            <a href="https://bizowl-auth.web.app">
              <button className="btn btn-outline-primary navButtonStyle marginTop10 freeConsultationButton">
                Login
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
