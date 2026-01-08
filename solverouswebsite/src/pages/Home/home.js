import { useRef } from "react";
import Navbar from "../../components/Navbar/navbar";
import HomeBg from "../../assets/home_bg.png";
import OfferBg from "../../assets/offer_bg.png";
import Button from '../../components/Buttons/button';
import SecondSec from '../../assets/second_section_image.png';
import Automation from '../../assets/first_reason.png';
import Target from '../../assets/second_reason.png';
import Scaling from '../../assets/third_reason.png';
import Services from "../../components/Services/services";

function Home() {
  // For bakground images
  const homeBg = {
    backgroundImage: `url(${HomeBg})`,
    height: "95vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const offerBg = {
    backgroundImage: `url(${OfferBg})`,
    height: "110vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // For scroll
  const listRef = useRef(null);

  const scroll = (direction) => {
    if (!listRef.current) return;

    const scrollAmount = 400; // adjust as needed
    listRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* HOME SECTION */}
        <section style={homeBg} className=" content-center space-y-8 md:space-y-3 ">
          <div className=" space-y-1 ">
            <h1 className=" font-bold text-white text-[2.5rem] md:text-4xl body_margin flex flex-col w-fit ">YOUR VISION, <span className="text-[#007EE6]">OUR INNOVATION</span></h1>
            <p className=" p_blue_bg body_margin md:w-[35%] ">At Solverous, we build future-ready solutions that transform how businesses operate, connect, and grow—driving innovation and success.</p>
          </div>
          <div className="flex flex-row body_margin space-x-5 md:space-x-3 ">
            <Button title="Explore Our Services" type="none" buttonCustomStyle=" text-white bg-[#007EE6] hover:bg-[#056CC2] py-3 px-[5%] md:py-2 md:px-4 border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] " />
            <Button title="Contact Us" type="none" buttonCustomStyle=" text-white bg-transparent border border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] py-3 px-[5%] md:py-2 md:px-4 " />
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
        <section style={offerBg} className=" text-center content-center space-y-8 ">
          <div className=" body_margin ">
            <h3 className="text-[2rem] md:text-3xl font-bold text-white ">What We Offer</h3>
            <p className=" p_blue_bg ">A wide range of systems designed to elevate your business operations
            </p>
          </div>

          <Services/>
        </section>
      </main>
    </>
  );
}

export default Home;