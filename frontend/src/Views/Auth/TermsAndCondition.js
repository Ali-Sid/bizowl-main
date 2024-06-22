import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import "../../Styles/AuthStyles/homepageStyle.scss";
import "../../Styles/Fixed/staticStyle.scss";
import "../../Styles/Fixed/fixedDesign.scss";
import { BsArrowBarLeft, BsArrowBarRight, BsChatRight, BsChevronBarRight, BsChevronRight, BsFillStarFill, BsSearch } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';
import { RxCaretLeft, RxCaretRight, RxPinRight } from 'react-icons/rx';
import { AskBigCard, BlogsBigCard, BlogsSmallCard, ContactUsDesign, HowCard, HowCardCircle, HowCardRound, IndustriesBigCard, IndustriesSmallCard, OurServicesCard, SubHeader, TestimonialDesign, WhyBestCard, WhyUsCard } from '../../Components/Design/fixedDesigns';
import { useState } from 'react';
import Faq from "react-faq-component";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsSlide, WindowOpenLink } from '../../Components/Extra/extraFunction';
import { NavLink } from 'react-router-dom';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';

const TermsAndCondition = () => {

  return (
    <>
      <NavBar />
      <div className='homepageContainer'>

        {SubHeader('Terms & Condition', 'termsAndCondition', 'home', 'home')}

        <div className='padding50 fontSize13 justifyText textCapitalize'>

          <span className='bold'>Welcome to Bizowl</span>, a marketplace and aggregating place for B2B digital services. Please read these terms and conditions carefully before using our platform.
          <br />
          Acceptance of Terms By accessing or using the Bizowl platform, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you may not access or use the Bizowl platform.
          <br />
          <br />
          <span className='bold'> Eligibility To use the Bizowl platform</span>, you must be at least 18 years old and capable of entering into a legally binding agreement. By using the Bizowl platform, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement.
          <br />
          <br />
          Description of the Platform The Bizowl platform is a marketplace and aggregating place for B2B digital services. Our platform allows businesses to browse, compare and purchase various digital services from our registered service providers. We do not provide the digital services ourselves but merely facilitate the transaction between the buyer and the service provider.
          <br />
          <br />
          User will tell us their requirements and then we will give the final and best quotation from our partner to user. This will be done through the website or either manually then user can select the desired partner and then user will get the project on promising date.
          <br />
          <br />
          User will get A to Z service.
          <br />
          <br />
          User can handover everything to us and tell us their budget and everything then we will do the whole heavy lifting for you as per your needs.
          <br />
          <br />
          <br />
          <span className='bold'> Registration and Account Creation</span> To use certain features of the Bizowl platform, you may be required to register and create an account. You agree to provide accurate and complete information when registering and creating an account, and to keep your account information up to date at all times. You are solely responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account.
          <br />
          <br />
          <br />
          <span className='bold'> Service Providers</span> The service providers listed on the Bizowl platform are independent contractors and are not employees or agents of Bizowl. Bizowl will ensure the quality, reliability, suitability or availability of any service provider or their services. You are solely responsible for evaluating and selecting the service provider and the services that best meet your needs. Our partners are verified and it is our duty that whoever is using our platform they meet our standards.
          <br />
          We will sure that our user get the proper support from our partners when necessary.
          <br />
          <br />
          <br />
          <span className='bold'> Payments</span> for services purchased through the Bizowl platform are processed through our third-party payment processing service. You agree to pay for all services purchased through the Bizowl platform and We will the front face and we will issue the all the bills from our end. This is to ensure that your payment are safe. In this payments are safe if they go through a escrow system.
          <br />
          User have to payment in one fo, usually we will give you the option to pay in breakups.
          <br />
          We accept payments in all online mode.
          <br />
          All prices will be exclusive of GST, user have to pay additional 18% GST amount.
          <br />
          <br />
          <br />
          <span className='bold'> Communication </span>  We do not recommend our user or neither partners to do a deal without involving Bizowl. If found doing that we will black list user and partner both and if user have done this and then come to bizowl for any kind of assistance, Bizowl will not be responsible for that.
          <br />
          <br />
          Project – We will make sure that your project get delivered on time. Bizowl will always be available on each step. User have to make the advance payment before we start working on any project.
          <br />
          <br />
          If user does not want any branding on their final project delivery they can let us know about that, we will make sure our partner do not provide any branding.
          <br />
          <br />
          <br />

          <div className='title4'> TERMS OF USE </div>
          <br />
          <br />

          <span className='bold'> AGREEMENT TO OUR LEGAL TERMS</span>
          <br />

          We are Bizowl a brand of White Sense Pvt Ltd ("Company," "we," "us," "our").
          <br />
          <br />
          We operate the website https://bizzowl.com (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          <br />
          <br />
          You can contact us by phone at <span onClick={() => { WindowOpenLink('tel:+919354651433', '_self') }} className="colorPrimary touchable">(+91) 9354651433</span>, email at <span onClick={() => { WindowOpenLink('mailto:contact@bizzowl.com', '_self') }} className="touchable colorPrimary"> contact@bizzowl.com</span>, or by mail to Dwarka, New Delhi, Delhi, India, New Delhi, 110077, India.
          <br />
          <br />
          These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and White Sense Pvt Ltd, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          <br />
          <br />
          Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
          <br />
          <br />

          <span className='bold'> We recommend that you print a copy of these Legal Terms for your records.</span>

          <br />
          <br />

          <div className='title4'>TABLE OF CONTENTS </div>

          <ol>
            <li> <a className='touchable' href='#OUR_SERVICES'>OUR SERVICES</a></li>
            <li> <a className='touchable' href='#INTELLECTUAL_PROPERTY_RIGHTS'>INTELLECTUAL PROPERTY RIGHTS</a></li>
            <li> <a className='touchable' href='#USER_REPRESENTATIONS'>USER REPRESENTATIONS</a></li>
            <li> <a className='touchable' href='#PURCHASES_AND_PAYMENT'>PURCHASES AND PAYMENT</a></li>
            <li> <a className='touchable' href='#PROHIBITED_ACTIVITIES'>PROHIBITED ACTIVITIES</a></li>
            <li> <a className='touchable' href='#USER_GENERATED_CONTRIBUTIONS'>USER GENERATED CONTRIBUTIONS</a></li>
            <li> <a className='touchable' href='#CONTRIBUTION_LICENSE'>CONTRIBUTION LICENSE</a></li>
            <li> <a className='touchable' href='#SERVICES_MANAGEMENT'>SERVICES MANAGEMENT</a></li>
            <li> <a className='touchable' href='#TERM_AND_TERMINATION'>TERM AND TERMINATION</a></li>
            <li> <a className='touchable' href='#MODIFICATIONS_AND_INTERRUPTIONS'>MODIFICATIONS AND INTERRUPTIONS</a></li>
            <li> <a className='touchable' href='#DISPUTE_RESOLUTION'>DISPUTE RESOLUTION</a></li>
            <li> <a className='touchable' href='#CORRECTIONS'>CORRECTIONS</a></li>
            <li> <a className='touchable' href='#DISCLAIMER'>DISCLAIMER</a></li>
            <li> <a className='touchable' href='#LIMITATIONS_OF_LIABILITY'>LIMITATIONS OF LIABILITY</a></li>
            <li> <a className='touchable' href='#INDEMNIFICATION'>INDEMNIFICATION</a></li>
            <li> <a className='touchable' href='#USER_DATA'>USER DATA</a></li>
            <li> <a className='touchable' href='#ELECTRONIC_COMMUNICATIONS_TRANSACTIONS_AND_SIGNATURES'>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
            <li> <a className='touchable' href='#MISCELLANEOUS'>MISCELLANEOUS</a></li>
            <li> <a className='touchable' href='#CONTACT_US'>CONTACT US</a></li>
          </ol>

          <br />
          <br />

          <div className='title4' id='OUR_SERVICES'>OUR SERVICES </div>
          The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          <br />
          <br />

          <div className='title4' id='INTELLECTUAL_PROPERTY_RIGHTS'>INTELLECTUAL PROPERTY RIGHTS</div>

          Our intellectual property
          <br />

          We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
          <br />
          <br />

          Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
          <br />
          <br />

          The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
          <br />
          <br />

          Your use of our Services
          <br />
          <br />

          Subject to your compliance with these Legal Terms, including the <span className='bold'> "PROHIBITED ACTIVITIES" </span> section below, we grant you a non-exclusive, non-transferable, revocable license to:
          <br />
          <br />
          access the Services; and
          <br />
          <br />
          download or print a copy of any portion of the Content to which you have properly gained access.
          <br />
          <br />
          solely for your personal, non-commercial use or internal business purpose.
          <br />
          <br />

          Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          <br />
          <br />

          If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <span onClick={() => { WindowOpenLink('mailto:contact@bizzowl.com', '_self') }} className="touchable colorPrimary"> contact@bizzowl.com</span>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
          <br />
          <br />

          We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
          <br />
          <br />

          Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
          <br />
          <br />

          Your submissions
          <br />
          <br />

          Please review this section and the <span className='bold'> "PROHIBITED ACTIVITIES" </span> section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
          <br />
          <br />

          Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
          <br />
          <br />

          You are responsible for what you post or upload: By sending us Submissions through any part of the Services you:
          <br />
          <br />
          confirm that you have read and agree with our <span className='bold'> "PROHIBITED ACTIVITIES" </span> and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
          <br />
          <br />
          to the extent permissible by applicable law, waive any and all moral rights to any such Submission;
          <br />
          <br />
          warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and
          <br />
          <br />
          warrant and represent that your Submissions do not constitute confidential information.
          <br />
          <br />
          You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.
          <br />
          <br />
          <br />

          <div className='title4' id='USER_REPRESENTATIONS'>USER REPRESENTATIONS</div>

          By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
          <br />
          <br />

          If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).

          <br />
          <br />
          <br />

          <div className='title4' id='PURCHASES_AND_PAYMENT'>PURCHASES AND PAYMENT</div>

          <span className='bold'> We accept the following forms of payment:</span>

          You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time.
          <br />
          <br />

          You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
          <br />
          <br />

          We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
          <br />
          <br />
          <br />

          <div className='title4' id='PROHIBITED_ACTIVITIES'>PROHIBITED ACTIVITIES</div>

          You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          <br />
          <br />

          <span className='bold'> As a user of the Services, you agree not to:</span>
          <br />
          Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
          <br />
          <br />
          Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
          <br />
          <br />
          Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.
          <br />
          <br />
          Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
          <br />
          <br />
          Use any information obtained from the Services in order to harass, abuse, or harm another person.
          <br />
          <br />
          Make improper use of our support services or submit false reports of abuse or misconduct.
          <br />
          <br />
          Use the Services in a manner inconsistent with any applicable laws or regulations.
          <br />
          <br />
          Engage in unauthorized framing of or linking to the Services.
          <br />
          <br />
          Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
          <br />
          <br />
          Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
          <br />
          <br />
          Delete the copyright or other proprietary rights notice from any Content.
          <br />
          <br />
          Attempt to impersonate another user or person or use the username of another user.
          <br />
          <br />
          Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").
          <br />
          <br />
          Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.
          <br />
          <br />
          Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.
          <br />
          <br />
          Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.
          <br />
          <br />
          Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
          <br />
          <br />
          Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.
          <br />
          <br />
          Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.
          <br />
          <br />
          Use a buying agent or purchasing agent to make purchases on the Services.
          <br />
          <br />
          Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
          <br />
          <br />
          Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.
          <br />
          <br />
          <br />

          <div className='title4' id='USER_GENERATED_CONTRIBUTIONS'>USER GENERATED CONTRIBUTIONS</div>
          The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that:
          <br />
          <br />
          <br />

          <div className='title4' id='CONTRIBUTION_LICENSE'>CONTRIBUTION LICENSE</div>


          You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
          <br />
          <br />

          By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
          <br />
          <br />

          We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
          <br />
          <br />


          <div className='title4' id='SERVICES_MANAGEMENT'>SERVICES MANAGEMENT</div>

          <span className='bold'> We reserve the right, but not the obligation, to: </span>
          <ol>
            <li>
              monitor the Services for violations of these Legal Terms;
            </li>
            <li>
              take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities;
            </li>
            <li>
              in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;
            </li>
            <li>
              (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and
            </li>
            <li>
              otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
            </li>

          </ol>

          <br />
          <br />
          <br />

          <div className='title4' id='TERM_AND_TERMINATION'>TERM AND TERMINATION</div>

          These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
          <br />
          <br />

          If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
          <br />
          <br />
          <br />

          <div className='title4' id='MODIFICATIONS_AND_INTERRUPTIONS'>MODIFICATIONS AND INTERRUPTIONS</div>

          We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
          <br />
          <br />

          We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
          <br />
          <br />
          <br />

          <div className='title4' id='DISPUTE_RESOLUTION'>DISPUTE RESOLUTION</div>

          The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law,
          <ol>
            <li>
              no arbitration shall be joined with any other proceeding;
            </li>
            <li>
              there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and
            </li>
            <li>
              there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
            </li>
          </ol>
          <br />
          <br />

          Exceptions to Informal Negotiations and Arbitration
          <br />
          <br />

          The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration:
          <ol>
            <li>any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; </li>
            <li>any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and </li>
            <li>any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</li>
          </ol>

          <br />
          <br />
          <br />


          <div className='title4' id='CORRECTIONS'>CORRECTIONS</div>

          There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
          <br />
          <br />
          <br />

          <div className='title4' id='DISCLAIMER'>DISCLAIMER</div>

          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
          <ol>
            <li>ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,</li>
            <li>PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES,</li>
            <li>ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,</li>
            <li>ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES,</li>
            <li>ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR</li>
            <li>ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</li>
          </ol>

          <br />
          <br />
          <br />

          <div className='title4' id='LIMITATIONS_OF_LIABILITY'>LIMITATIONS OF LIABILITY</div>

          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR . CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.

          <br />
          <br />
          <br />

          <div className='title4' id='INDEMNIFICATION'>INDEMNIFICATION</div>

          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of:
          <ol>
            <li>use of the Services; </li>
            <li> breach of these Legal Terms; </li>
            <li>any breach of your representations and warranties set forth in these Legal Terms; </li>
            <li>your violation of the rights of a third party, including but not limited to intellectual property rights; </li>
            <li>any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</li>
          </ol>

          <br />
          <br />
          <br />

          <div className='title4' id='USER_DATA'>USER DATA</div>

          We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.

          <br />
          <br />
          <br />

          <div className='title4' id='ELECTRONIC_COMMUNICATIONS_TRANSACTIONS_AND_SIGNATURES'>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</div>

          Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.

          <br />
          <br />
          <br />

          <div className='title4' id='MISCELLANEOUS'>MISCELLANEOUS</div>

          These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.

          <br />
          <br />
          <br />

          <div className='title4' id='CONTACT_US'>CONTACT US</div>

          In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services,
          <br />
          <span className='bold'> please contact us at:</span>
          <br />
          <br />

          <span className='bold'>White Sense Pvt Ltd
            <br />
            Dwarka, New Delhi, Delhi, India
            <br />
            New Delhi - 110077, India
            <br />
            Phone: <span onClick={() => { WindowOpenLink('tel:+919354651433', '_self') }} className="colorPrimary touchable">(+91) 9354651433</span>
            <br />
            <span onClick={() => { WindowOpenLink('mailto:contact@bizzowl.com', '_self') }} className="touchable colorPrimary"> contact@bizzowl.com</span>
            <br />
          </span>


        </div>


        <div className='askUsAnythingSec'>
          <AskBigCard />
        </div>

        <div className='contactUs'>
          {ContactUsDesign()}
        </div>


      </div>
      <Footer />
    </>
  )
}
export default TermsAndCondition;