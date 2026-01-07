import Navbar from "../../components/Navbar/navbar";
import HomeBg from "../../assets/home_bg.png";
import Button from '../../components/Buttons/button';

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
          <p className="  text-white text-xl md:text-[0.93rem] ml-[2.063rem] md:ml-32 w-[85%] md:w-[35%] ">At Solverous, we build future-ready solutions that transform how businesses operate, connect, and grow—driving innovation and success.</p>
          <div className="flex flex-row ml-[2.063rem] md:ml-32 space-y-4 md:space-y-3 space-x-5 md:space-x-4 ">
            <Button title="Explore Services" type="none" buttonCustomStyle=" text-white bg-[#007EE6] hover:bg-[#056CC2] py-4 px-[5%] md:py-2 md:px-4 " />
            <Button title="Contact Us" type="none" buttonCustomStyle=" text-white bg-transparent border border-[#007EE6] hover:bg-white hover:border-white hover:text-[#007EE6] py-4 px-[5%] md:py-2 md:px-4 "/>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home;