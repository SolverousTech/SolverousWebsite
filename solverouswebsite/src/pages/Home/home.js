import Navbar from "../../components/Navbar/navbar";
import HomeBg from "../../assets/home_bg.png";
import Button from '../../components/Buttons/button';
import SecondSec from '../../assets/second_section_image.png';
import Automation from '../../assets/first_reason.png';
import Target from '../../assets/second_reason.png';
import Scaling from '../../assets/third_reason.png';

function Home() {
  const myStyle = {
    backgroundImage: `url(${HomeBg})`,
    height: "95vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Navbar />
      <main>
        {/* HOME SECTION */}
        <section style={myStyle} className=" content-center space-y-2 md:space-y-3 ">
          <h1 className=" font-bold text-white text-[2.5rem] md:text-4xl ml-[2.063rem] md:ml-32 flex flex-col w-fit ">YOUR VISION, <span className="text-[#007EE6]">OUR INNOVATION</span></h1>
          <p className=" text-white text-xl md:text-[0.93rem] ml-[2.063rem] md:ml-32 w-[85%] md:w-[35%] ">At Solverous, we build future-ready solutions that transform how businesses operate, connect, and grow—driving innovation and success.</p>
          <div className="flex flex-row ml-[2.063rem] md:ml-32 space-y-4 md:space-y-3 space-x-5 md:space-x-4 ">
            <Button title="Explore Services" type="none" buttonCustomStyle=" text-white bg-[#007EE6] hover:bg-[#056CC2] py-4 px-[5%] md:py-2 md:px-4 " />
            <Button title="Contact Us" type="none" buttonCustomStyle=" text-white bg-transparent border border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] py-4 px-[5%] md:py-2 md:px-4 " />
          </div>
        </section>
        <section className="my-[1rem] ml-[2.063rem] md:my-16 md:ml-[7.438rem] mr-[2.063rem] md:mr-[0rem] flex flex-row space-x-6 items-center">
          <div className=" w-[70%] h-full">
            <img src={SecondSec} alt="People in A Meeting" className='w-[17%] md:w-[90%]' />
          </div>
          <div className="space-y-3">
            <h3 className="text-[1.5rem] md:text-3xl font-bold text-[#004D8C]">Why Choose <span className="text-[#007EE6]">SOLVEROUS?</span></h3>
            <p className="w-[85%] md:w-[65%] text-[#004D8C]">We focus on real problems, modern technology, and collaborative development to deliver reliable, impactful digital solutions.</p>
            <div className="space-y-7">
              {/* FIRST REASON */}
              <div className="flex flex-row space-x-2 items-center">
                <div className="bg-[#007EE6] w-24 h-16 rounded-full flex justify-center items-center "><img src={Automation} alt="Automation Icon" /></div>
                <div>
                  <h5 className=" font-bold text-xl text-[#004D8C] ">Cutting-Edge Technology</h5>
                  <p className="w-[85%] md:w-[75%] text-[#004D8C]">We leverage the latest advancements in AI, cloud computing, and cybersecurity to provide innovative tech solutions tailored to your needs.</p>
                </div>
              </div>

              {/* SECOND REASON */}
              <div className="flex flex-row space-x-2 items-center">
                <div className="bg-[#007EE6] w-32 h-16 rounded-full flex justify-center items-center  "><img src={Target} alt="Target Icon" /></div>
                <div>
                  <h5 className=" font-bold text-xl text-[#004D8C] ">Client-Centric Approach</h5>
                  <p className="w-[85%] md:w-[75%] text-[#004D8C]">Your goals and vision are at the center of everything we do. We collaborate closely with you throughout the process to ensure the final solution truly meets your needs and expectations.</p>
                </div>
              </div>

              {/* THIRD REASON */}
              <div className="flex flex-row space-x-2 items-center">
                <div className="bg-[#007EE6] w-24 h-16 rounded-full flex justify-center items-center"><img src={Scaling} alt="Scaling Icon" /></div>
                <div>
                  <h5 className=" font-bold text-xl text-[#004D8C] ">Scalable & Secure Solutions</h5>
                  <p className="w-[85%] md:w-[75%] text-[#004D8C]">Our solutions are designed to grow alongside your business, with scalability, security, and stability built in to support long-term success.</p>
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