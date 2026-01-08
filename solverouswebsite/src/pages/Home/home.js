import Navbar from "../../components/Navbar/navbar";
import HomeBg from "../../assets/home_bg.png";
import OfferBg from "../../assets/offer_bg.png";
import ProcessBg from "../../assets/process_bg.png";
import Button from '../../components/Buttons/button';
import SecondSec from '../../assets/second_section_image.png';
import Automation from '../../assets/first_reason.png';
import Target from '../../assets/second_reason.png';
import Scaling from '../../assets/third_reason.png';
import Services from "../../components/Services/services";
import HomebakerLogo from '../../assets/homebaker_logo.jpg';
import ResponsivePicture from "../../components/Image/image_process";
import MeetingInTable from "../../assets/meeting_in_table.png";

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

  const processBg = {
    backgroundImage: `url(${ProcessBg})`,
    marginTop: "0px",
  };

  return (
    <>
      <Navbar />
      <main>
        {/* HOME SECTION */}
        <section style={homeBg} className=" bg-no-repeat bg-cover bg-center h-[95vh] content-center space-y-8 md:space-y-3 ">
          <div className=" space-y-1 ">
            <h1 className=" font-bold text-white text-[2.5rem] md:text-4xl body_margin flex flex-col w-fit [text-shadow:0_4px_6px_rgba(1,0,0,0.5)] ">YOUR VISION, <span className="text-[#007EE6]">OUR INNOVATION</span></h1>
            <p className=" p_blue_bg body_margin md:w-[35%] ">At Solverous, we build future-ready solutions that transform how businesses operate, connect, and grow—driving innovation and success.</p>
          </div>
          <div className="flex flex-row body_margin space-x-5 md:space-x-3 ">
            <Button title="Explore Our Services" type="none" buttonCustomStyle=" text-white bg-[#007EE6] hover:bg-[#056CC2] py-3 px-[5%] md:py-2 md:px-4 border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] [box-shadow:0_4px_8px_rgba(1,0,0,0.2)] " />
            <Button title="Contact Us" type="none" buttonCustomStyle=" text-white bg-transparent border border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] py-3 px-[5%] md:py-2 md:px-4 [box-shadow:0_4px_8px_rgba(1,0,0,0.2)] " />
          </div>
        </section>

        {/* WHY CHOOSE SOLVEROUS SECTION */}
        <section className=" body_margin my-12 md:my-16 flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-12 md:space-y-0 items-center ">
          <div className=" w-full md:w-[70%] h-full ">
            <img src={SecondSec} alt="People in A Meeting" className='w-full md:w-[90%] ' />
          </div>
          <div className=" space-y-6 md:space-y-3 w-full text-center md:text-left ">
            <div>
              <h3 className="text-[2rem] md:text-3xl font-bold text-[#004D8C] ">Why Choose <span className="text-[#007EE6]">SOLVEROUS?</span></h3>
              <p className=" p_white_bg w-[96%] md:w-[80%] m-auto md:m-0 ">We focus on real problems, modern technology, and collaborative development to deliver reliable, impactful digital solutions.</p>
            </div>
            <div className=" space-y-8 md:space-y-4">
              {/* FIRST REASON */}
              <div className="reasons_flex reasons_space_between items-center ">
                <div className=" reasons_icon_container w-[6.2rem] md:w-[6.5rem] h-24 md:h-16 "><img src={Automation} alt="Automation Icon" /></div>
                <div>
                  <h5 className=" h5_title text-[#004D8C] ">Cutting-Edge Technology</h5>
                  <p className=" w-[93%] md:w-[75%] p_white_bg reasons_margin ">We leverage the latest advancements in AI, cloud computing, and cybersecurity to provide innovative tech solutions tailored to your needs.</p>
                </div>
              </div>

              {/* SECOND REASON */}
              <div className="reasons_flex reasons_space_between items-center ">
                <div className="reasons_icon_container w-[6.2rem] md:w-[8.5rem] h-24 md:h-16 "><img src={Target} alt="Target Icon" /></div>
                <div>
                  <h5 className=" h5_title text-[#004D8C] ">Client-Centric Approach</h5>
                  <p className=" w-[95%] md:w-[75%] p_white_bg reasons_margin ">Your goals and vision are at the center of everything we do. We collaborate closely with you throughout the process to ensure the final solution truly meets your needs and expectations.</p>
                </div>
              </div>

              {/* THIRD REASON */}
              <div className=" reasons_flex reasons_space_between items-center ">
                <div className="reasons_icon_container w-[6.2rem] h-24 md:h-16 "><img src={Scaling} alt="Scaling Icon" /></div>
                <div >
                  <h5 className=" h5_title text-[#004D8C] ">Scalable & Secure Solutions</h5>
                  <p className=" p_white_bg reasons_margin w-[95%] md:w-[75%] ">Our solutions are designed to grow alongside your business, with scalability, security, and stability built in to support long-term success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section style={offerBg} className=" bg-no-repeat bg-cover bg-center h-[95vh] md:h-[115vh] text-center content-center space-y-8 ">
          <div className=" body_margin ">
            <h3 className="text-[2rem] md:text-3xl font-bold text-white ">What We Offer</h3>
            <p className=" p_blue_bg ">A wide range of systems designed to elevate your business operations
            </p>
          </div>
          <Services />
        </section>

        {/* TRUSTED BY */}
        <section className=" body_margin flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 space-x-0 md:space-x-20 my-12 ">
          <div className=" w-full md:w-[50%] space-y-2 ">
            <h3 className="text-[2rem] md:text-3xl font-bold text-[#004D8C] ">Trusted <span className="text-[#007EE6]">By</span></h3>
            <p className=" p_white_bg ">We are proud to work with clients who place their trust in Solverous. Through collaboration, innovation, and a commitment to quality, we build lasting partnerships and deliver technology solutions that create real value and long-term impact.
            </p>
          </div>
          <div className=" p-4 bg-white shadow-lg rounded-2xl ">
            <img src={HomebakerLogo} alt="Homebaker Logo" className="w-44 md:w-36" />
          </div>
        </section>

        {/* HOW WE BRING IDEAS TO LIFE */}
        <section style={processBg} className=" bg-no-repeat bg-cover bg-center h-[225vh] md:h-[110vh] text-center items-center content-center space-y-8 ">
          <div className=" body_margin flex flex-col justify-center items-center space-y-2 md:space-y-0 ">
            <h3 className="text-[2rem] md:text-3xl w-[70%] md:w-full font-bold text-white ">How We Bring Ideas to Life</h3>
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
        <section className=" body_margin text-center content-center space-y-8 md:space-y-10 my-12 md:my-16 ">
          <div className=" flex flex-col justify-center items-center text-center space-y-2 md:space-y-0">
            <h3 className="text-[2rem] md:text-3xl font-bold text-[#004D8C] ">About <span className="text-[#007EE6]">Us</span></h3>
            <p className=" p_white_bg w-[96%] md:w-[67%] ">Solverous is a fresh, innovative start-up focused on providing high-quality digital solutions. Although we are in the early stages of our journey, we’re driven by a strong vision to revolutionize web development and tech services.</p>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-7 space-y-10 md:space-y-0">
            <div className=" w-full md:w-[71%] h-full ">
              <img src={MeetingInTable} alt="People in A Meeting" className='w-full md:w-fit rounded-2xl [box-shadow:4px_4px_13px_rgba(1,0,0,0.5)]' />
            </div>

            <div className=" space-y-6 md:space-y-3 w-full text-left ">
              <div className=" space-y-8 md:space-y-4">
                {/* OUR HISTORY */}
                <div className=" about_container_style ">
                  <h5 className=" h5_title text-white ">Our History</h5>
                  <p className=" p_blue_bg ">Founded in January 2024. Solverous is a fresh, innovative start-up focused on providing high-quality digital solutions. Although we are in the early stages of our journey, we’re driven by a strong vision to revolutionize web development and tech services.</p>
                </div>
                
                {/* OUR VISION */}
                <div className=" about_container_style ">
                  <h5 className=" h5_title text-white ">Our Vision</h5>
                  <p className=" p_blue_bg ">Our goal is to become a leading provider of innovative web and tech solutions globally. We strive to build a dynamic and inclusive company that fosters creativity and drives success. By shaping the future of technology and digital experiences, we aim to support businesses of all sizes.</p>
                </div>

                {/* OUR MISSION */}
                <div className="about_container_style ">
                  <h5 className=" h5_title text-white ">Our Mission</h5>
                  <p className=" p_blue_bg ">We empower businesses by providing innovative and high-quality digital solutions. Our goal is to help clients achieve their objectives through cutting-edge technology. Additionally, we foster a collaborative and growth-oriented environment that supports both experienced professionals and eager learners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;