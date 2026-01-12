import FAQItem from "../../components/FAQs/faqs";
import HomeBg from "../../assets/home_bg.png";
import OfferBg from "../../assets/offer_bg.png";
import ProcessBg from "../../assets/process_bg.png";
import FAQsBg from "../../assets/faqs_bg.png";
import Button from '../../components/Buttons/button';
import SecondSec from '../../assets/second_section_image.png';
import Automation from '../../assets/technology.png';
import Phone from '../../assets/phone.png';
import Mail from '../../assets/mail.png';
import Location from '../../assets/location.png';
import Target from '../../assets/target.png';
import Scaling from '../../assets/scaling.png';
import Services from "../../components/Services/services";
import HomebakerLogo from '../../assets/homebaker_logo.jpg';
import ResponsivePicture from "../../components/Image/image_process";
import ContactForm from "../../components/Contact/contact";
import MeetingInTable from "../../assets/meeting_in_table.png";
import PeopleInMeeting from "../../assets/people_in_meeting3.png";
import Facebook from "../../assets/facebook.png";
import WhatsApp from "../../assets/whatsapp.png";
import LinkedIn from "../../assets/linkedin.png";

function Home() {
  // For bakground images
  const homeBg = {
    backgroundImage: `url(${HomeBg})`,
    marginTop: "0px",
  };

  const offerBg = {
    backgroundImage: `url(${OfferBg})`,
    marginTop: "0px",
  };

  const peopleInMeeting = {
    backgroundImage: `url(${PeopleInMeeting})`,
    marginTop: "0px",
  };

  const processBg = {
    backgroundImage: `url(${ProcessBg})`,
    marginTop: "0px",
  };

  const faqsBg = {
    backgroundImage: `url(${FAQsBg})`,
    marginTop: "0px",
  };

  return (
    <>
      <main>
        {/* HOME SECTION */}
        <section id="home" style={homeBg} className=" bg-no-repeat bg-cover bg-center h-[95vh] content-center space-y-4 md:space-y-5 lg:space-y-6 ">
          <div className=" space-y-1 md:space-y-2 lg:space-y-3 ">
            <h1 className=" font-bold text-white text-[2rem] md:text-3xl lg:text-4xl body_margin flex flex-col w-fit [text-shadow:0_4px_6px_rgba(1,0,0,0.5)] ">YOUR VISION, <span className="text-[#007EE6]">OUR INNOVATION</span></h1>
            <p className=" p_blue_bg body_margin w-[65%] md:w-[45%] lg:w-[25%] ">At Solverous, we build future-ready solutions that transform how businesses operate, connect, and grow—driving innovation and success.</p>
          </div>
          <div className="flex flex-row body_margin space-x-5 md:space-x-3 ">
            <Button
              title="Explore Our Services"
              type="none"
              buttonCustomStyle=" text-white bg-[#007EE6] hover:bg-[#056CC2] py-3 px-[5%] md:py-2 md:px-4 border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] [box-shadow:0_4px_8px_rgba(1,0,0,0.2)] transition-all ease-in-out"
              btnFunc={() => {
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            />
            <Button
              title="Contact Us"
              type="none"
              buttonCustomStyle=" text-white bg-transparent border border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] py-3 px-[5%] md:py-2 md:px-4 [box-shadow:0_4px_8px_rgba(1,0,0,0.2)] transition-all ease-in-out "
              btnFunc={() => {
                document.getElementById("contact-us")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            />
          </div>
        </section>

        {/* WHY CHOOSE SOLVEROUS SECTION */}
        <section className=" body_margin my-12 md:my-16 flex flex-col md:flex-col lg:flex-row space-x-0 md:space-x-0 lg:space-x-0 xl:space-x-20 2xl:space-x-24 space-y-12 md:space-y-10 lg:space-y-0 items-center ">
          <div className=" w-full md:w-full lg:w-full xl:w-[80%] 2xl:w-[60%] h-full ">
            <img src={SecondSec} alt="People in A Meeting" className='w-full md:w-full ' />
          </div>
          <div className=" space-y-6 md:space-y-5 lg:space-y-3 w-full md:w-full lg:w-full xl:w-[75%] 2xl:w-[75%] text-center md:text-left ">
            <div>
              <h3 className="text-[1.5rem] md:text-3xl lg:text-[2rem] font-bold text-[#004D8C] w-full ">Why Choose <span className="text-[#007EE6]">SOLVEROUS?</span></h3>
              <p className=" p_white_bg w-[96%] md:w-full m-auto md:m-0 ">We focus on real problems, modern technology, and collaborative development to deliver reliable, impactful digital solutions.</p>
            </div>
            <div className=" space-y-8 md:space-y-4">
              {/* FIRST REASON */}
              <div className="reasons_flex reasons_space_between items-center scale_animation w-fit">
                <div className=" reasons_icon_container reasons_icon_size w-[5.2rem] md:w-[10rem] lg:w-[10rem] xl:w-[8.5rem] 2xl:w-[7.5rem] "><img src={Automation} alt="Automation" /></div>
                <div>
                  <h5 className=" h5_title text-[#004D8C] w-full ">Cutting-Edge Technology</h5>
                  <p className=" w-[93%] md:w-[93%] lg:w-[93%] xl:w-[95%] 2xl:w-[86%] p_white_bg reasons_margin ">We leverage the latest advancements in AI, cloud computing, and cybersecurity to provide innovative tech solutions tailored to your needs.</p>
                </div>
              </div>

              {/* SECOND REASON */}
              <div className="reasons_flex reasons_space_between items-center scale_animation w-fit ">
                <div className="reasons_icon_container reasons_icon_size w-[5.2rem] md:w-[13rem] lg:w-[13rem] xl:w-[11.2rem] 2xl:w-[10rem] "><img src={Target} alt="Target" /></div>
                <div>
                  <h5 className=" h5_title text-[#004D8C] w-full ">Client-Centric Approach</h5>
                  <p className=" w-[93%] md:w-[93%] lg:w-[93%] xl:w-[95%] 2xl:w-full p_white_bg reasons_margin ">Your goals and vision are at the center of everything we do. We collaborate closely with you throughout the process to ensure the final solution truly meets your needs and expectations.</p>
                </div>
              </div>

              {/* THIRD REASON */}
              <div className=" reasons_flex reasons_space_between items-center scale_animation ">
                <div className="reasons_icon_container reasons_icon_size w-[5.2rem] md:w-[9.5rem] lg:w-[9.5rem] xl:w-[8.3rem] 2xl:w-[7.5rem] "><img src={Scaling} alt="Scaling" /></div>
                <div >
                  <h5 className=" h5_title text-[#004D8C] w-full ">Scalable & Secure Solutions</h5>
                  <p className=" w-[93%] md:w-[93%] lg:w-[93%] xl:w-[95%] 2xl:w-[90%] p_white_bg reasons_margin ">Our solutions are designed to grow alongside your business, with scalability, security, and stability built in to support long-term success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section id="services" style={offerBg} className=" bg-no-repeat bg-cover bg-center h-[90vh] md:h-[60vh] lg:h-[60vh] xl:h-[115vh] 2xl:h-[75vh] text-center content-center space-y-8 ">
          <div className=" body_margin ">
            <h3 className="text-[1.5rem] md:text-3xl lg:text-[2rem] font-bold text-white ">What We Offer</h3>
            <p className=" p_blue_bg ">A wide range of systems designed to elevate your business operations
            </p>
          </div>
          <Services />
        </section>

        {/* TRUSTED BY */}
        <section id="clients" className=" body_margin flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 space-x-0 md:space-x-20 my-12 ">
          <div className=" w-full md:w-[50%] space-y-2 ">
            <h3 className="text-[1.5rem] md:text-3xl lg:text-[2rem] font-bold text-[#004D8C] ">Trusted <span className="text-[#007EE6]">By</span></h3>
            <p className=" p_white_bg ">We are proud to work with clients who place their trust in Solverous. Through collaboration, innovation, and a commitment to quality, we build lasting partnerships and deliver technology solutions that create real value and long-term impact.
            </p>
          </div>
          <div className=" p-4 bg-white shadow-lg rounded-2xl hover:shadow-[#004d8cb6] transition-all ease-in-out scale_animation hover:[box-shadow:0px_0px_15px_#004d8cb6] ">
            <img src={HomebakerLogo} alt="Homebaker Logo" className="w-44 md:w-36" />
          </div>
        </section>

        {/* HOW WE BRING IDEAS TO LIFE */}
        <section style={processBg} className=" bg-no-repeat bg-cover bg-center h-[240vh] md:h-[40vh] lg:h-[40vh] xl:h-[110vh] 2xl:h-[85vh] text-center items-center content-center space-y-8 ">
          <div className=" body_margin flex flex-col justify-center items-center space-y-2 md:space-y-0 ">
            <h3 className="text-[1.5rem] md:text-3xl lg:text-[2rem] w-[70%] md:w-full font-bold text-white ">How We Bring Ideas to Life</h3>
            <p className=" p_blue_bg w-[90%] md:w-full ">We follow a thoughtful, collaborative process to ensure every solution we deliver is aligned with your vision, goals, and growth.</p>
          </div>

          <div className=" body_margin  relative flex flex-col space-y-[13%] md:space-y-4 ">
            <ResponsivePicture />
            {/* LINE AND ICONS REPRSENTING PROCESS */}
            {/* <div className="absolute flex justify-center top-[2%] md:top-[44%] bottom-0 md:bottom-[64%] bg-slate-500 ">
              <ResponsivePicture />
            </div> */}

            {/* <div className="flex flex-col-reverse md:flex-col space-y-24"> */}
            {/* ABOVE PROCESS */}
            {/* <div className="flex flex-col md:flex-row space-y-[13%] md:space-y-0 space-x-0 md:space-x-[13%] justify-center"> */}
            {/* FIRST ABOVE PROCESS */}
            {/* <div className=" bg-white p-7 w-[80%] md:w-[25%] rounded-xl content-center ">
                  <h5 className=" h5_title text-[#004D8C] text-left ">Strategize & Plan</h5>
                  <p className=" p_white_bg reasons_margin w-[95%] md:w-full text-left ">We craft a tailored strategy — selecting the right technologies, outlining timelines, and defining milestones to ensure transparency and alignment.</p>
                </div> */}
            {/* SECOND ABOVE PROCESS */}
            {/* <div className=" bg-white p-7 w-[80%] md:w-[25%] rounded-xl content-center ">
                  <h5 className=" h5_title text-[#004D8C] text-left ">Test & Refine</h5>
                  <p className=" p_white_bg reasons_margin w-[95%] md:w-full text-left ">Before launch, we rigorously test everything — from performance and security to user experience — ensuring a flawless, reliable outcome.</p>
                </div>
              </div> */}

            {/* BELOW PROCESS */}
            {/* <div className="flex flex-col md:flex-row space-y-[13%] md:space-y-0 space-x-0 md:space-x-[13%] justify-center"> */}
            {/* FIRST BELOW PROCESS */}
            {/* <div className=" bg-white p-7 w-[80%] md:w-[25%] rounded-xl content-center ">
                  <h5 className=" h5_title text-[#004D8C] text-left ">Discover & Define</h5>
                  <p className=" p_white_bg reasons_margin w-[95%] md:w-full text-left ">We start by understanding your business, objectives, and challenges. Through detailed discussions and research, we define the scope and outcomes you need.</p>
                </div> */}
            {/* SECOND BELOW PROCESS */}
            {/* <div className=" bg-white p-7 w-[80%] md:w-[25%] rounded-xl content-center ">
                  <h5 className=" h5_title text-[#004D8C] text-left ">Design & Build</h5>
                  <p className=" p_white_bg reasons_margin w-[95%] md:w-full text-left ">Our team designs intuitive interfaces and develops scalable, high-performance solutions using modern tools and best practices.</p>
                </div> */}
            {/* THIRD BELOW PROCESS */}
            {/* <div className=" bg-white p-7 w-[80%] md:w-[25%] rounded-xl content-center ">
                  <h5 className=" h5_title text-[#004D8C] text-left ">Launch & Optimize</h5>
                  <p className=" p_white_bg reasons_margin w-[95%] md:w-full text-left ">Once deployed, we monitor closely, gather feedback, and continuously improve your solution for maximum impact and long-term success.</p>
                </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </section>

        {/* ABOUT US */}
        <section id="about-us" className=" body_margin text-center content-center space-y-8 md:space-y-10 my-12 md:my-16 ">
          <div className=" flex flex-col justify-center items-center text-center space-y-2 md:space-y-0">
            <h3 className="text-[1.5rem] md:text-3xl lg:text-[2rem] font-bold text-[#004D8C] ">About <span className="text-[#007EE6]">Us</span></h3>
            <p className=" p_white_bg w-[96%] md:w-full lg:w-full xl:w-[67%] 2xl:w-[67%] ">Solverous is a fresh, innovative start-up focused on providing high-quality digital solutions. Although we are in the early stages of our journey, we’re driven by a strong vision to revolutionize web development and tech services.</p>
          </div>

          <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row space-x-0 md:space-x-0 lg:space-x-7 xl:space-x-7 2xl:space-x-7 space-y-10 md:space-y-10 lg:space-y-0 xl:space-y-0 2xl:space-y-0">
            <div className=" w-full md:w-full lg:w-full xl:w-[71%] 2xl:w-[54%] h-full ">
              <img src={MeetingInTable} alt="People in A Meeting" className='w-full md:w-fit rounded-2xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]' />
            </div>

            <div className=" space-y-6 md:space-y-3 w-full text-left ">
              <div className=" space-y-8 md:space-y-4">
                {/* OUR HISTORY */}
                <div className=" about_container_style scale_animation ">
                  <h5 className=" h5_title text-white ">Our History</h5>
                  <p className=" p_blue_bg ">Founded in January 2024. Solverous is a fresh, innovative start-up focused on providing high-quality digital solutions. Although we are in the early stages of our journey, we’re driven by a strong vision to revolutionize web development and tech services.</p>
                </div>

                {/* OUR VISION */}
                <div className=" about_container_style scale_animation ">
                  <h5 className=" h5_title text-white ">Our Vision</h5>
                  <p className=" p_blue_bg ">Our goal is to become a leading provider of innovative web and tech solutions globally. We strive to build a dynamic and inclusive company that fosters creativity and drives success. By shaping the future of technology and digital experiences, we aim to support businesses of all sizes.</p>
                </div>

                {/* OUR MISSION */}
                <div className="about_container_style scale_animation ">
                  <h5 className=" h5_title text-white ">Our Mission</h5>
                  <p className=" p_blue_bg ">We empower businesses by providing innovative and high-quality digital solutions. Our goal is to help clients achieve their objectives through cutting-edge technology. Additionally, we foster a collaborative and growth-oriented environment that supports both experienced professionals and eager learners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7TH SECTION */}
        <section style={peopleInMeeting} className=" bg-no-repeat bg-cover bg-center h-[50vh] md:h-[30vh] lg:h-[50vh] xl:h-[50vh] 2xl:h-[50vh] text-center content-center space-y-8 ">
          <div className=" flex flex-col justify-center items-center text-center space-y-4 md:space-y-4">
            <h3 className="text-[1.5rem] md:text-3xl lg:text-[2rem] font-bold text-white flex flex-col ">Transforming Ideas Into <span className="text-[#0889f1]">Digital Solutions</span></h3>
            <p className=" p_blue_bg w-[75%] md:w-[55%] lg:w-[32%] xl:w-[32%] 2xl:w-[32%] ">We follow a thoughtful, collaborative process to ensure every solution we deliver is aligned with your vision, goals, and growth.</p>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" style={faqsBg} className=" flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-center bg-no-repeat bg-cover bg-center h-[115vh] md:h-[63vh] lg:h-[90vh] xl:h-[92vh] 2xl:h-[55vh] space-y-3 md:space-y-10 lg:space-y-0 ">
          <div className=" mr-[2.063rem] ml-[2.063rem] md:ml-[1.5rem] lg:ml-[7.4rem] mt-[3.5rem] md:mt-8 lg:mt-0 w-[84%] md:w-[71%] lg:w-fit space-y-6 md:space-y-4 justify-center items-start h-[32%] md:h-fit lg:h-[77%] ">
            <div className=" w-full md:w-full space-y-2 ">
              <h3 className="text-[1.5rem] md:text-3xl lg:text-[2rem] font-bold text-white ">Frequently <span className="text-[#0889f1]">Asked Questions</span></h3>
              <p className=" p_blue_bg w-[95%] md:w-[90%] lg:w-[95%] ">We follow a thoughtful, collaborative process to ensure every solution we deliver is aligned with your vision, goals, and growth.</p>
            </div>
            <Button
              title="Contact Us"
              type="none"
              buttonCustomStyle=" text-white bg-[#007EE6] hover:bg-[#056CC2] py-3 px-[5%] md:py-2 border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] transition-all ease-in-out [box-shadow:0_4px_8px_rgba(1,0,0,0.2)] "
              btnFunc={() => {
                document.getElementById("contact-us")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            />
          </div>
          <div className=" mr-[2.063rem] ml-[2.063rem] md:ml-[7rem] lg:ml-[2.063rem] md:mr-[7.438rem] w-[84%] md:w-[70%] justify-center items-start h-[77%]">
            <FAQItem />
          </div>
        </section>

        {/* CONTACTS SECTION */}
        <section id="contact-us" className=" body_margin flex flex-col md:flex-row justify-center items-center my-12 ">
          <div className="w-full md:w-[90%] h-full flex flex-col md:flex-row space-x-0 md:space-x-16 items-center space-y-6 md:space-y-0">
            <ContactForm />
            <div className="w-full space-y-6">
              <div className=" ">
                <h3 className="text-[1.5rem] md:text-3xl lg:text-[2rem] font-bold text-[#004D8C] ">How Can <span className="text-[#007EE6]">We Help?</span></h3>
                <p className=" p_white_bg ">Have a question or need help? Reach to our dedicated support team. We’re here to help with any inquires you may have.</p>
              </div>

              <div className=" flex flex-col space-y-4 ">
                {/* PHONE */}
                <div className="contact_icons_container ">
                  <div className=" gradient_bg reasons_icon_container contact_icons "><img src={Phone} alt="Phone" /></div>
                  <p className=" w-[93%] md:w-[95%] p_white_bg reasons_margin ">+63 921 808 7458</p>
                </div>

                {/* EMAIL */}
                <div className="contact_icons_container">
                  <a href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWsttGvFFcMCqMQKdwjzndSwrgjdNPKnWBzcnshffGttnvDTdnThLScQzTxLQpkSgwdSBjXCl" target="_blank" rel="noopener noreferrer" className=" gradient_bg reasons_icon_container contact_icons active:scale-95 transition-all ease-in-out "><img src={Mail} alt="Mail" /></a>
                  <p className=" w-[93%] md:w-[95%] p_white_bg reasons_margin ">solveroustech@gmail.com</p>
                </div>

                {/* LOCATION */}
                <div className="contact_icons_container">
                  <a href="https://maps.app.goo.gl/eGSJF9aUpXrBs7ur5" target="_blank" rel="noopener noreferrer" className=" gradient_bg reasons_icon_container contact_icons active:scale-95 transition-all ease-in-out "><img src={Location} alt="Location" /></a>
                  <p className=" w-[93%] md:w-[95%] p_white_bg reasons_margin ">Antipolo City, 1870 Rizal, Philippines</p>
                </div>
              </div>
              <div className="bg-[#007EE6] h-[0.1rem] w-full"></div>
              <div className=" items-center flex flex-row w-[100%] justify-end space-x-4 ">
                {/* FACEBOOK */}
                <a href="https://www.facebook.com/profile.php?id=61573101443685" target="_blank" rel="noopener noreferrer" className=" gradient_bg socmed_container "><img src={Facebook} alt="Facebook" /></a>
                {/* WHATSAPP */}
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className=" gradient_bg socmed_container "><img src={WhatsApp} alt="WhatsApp" /></a>
                {/* LINKEDIN */}
                <a href="https://www.linkedin.com/company/solverous" target="_blank" rel="noopener noreferrer" className=" gradient_bg socmed_container "><img src={LinkedIn} alt="LinkedIn" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;