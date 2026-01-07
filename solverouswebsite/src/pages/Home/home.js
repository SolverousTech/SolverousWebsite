import Navbar from "../../components/Navbar/navbar";
import HomeBg from "../../assets/home_bg.png";

function Home() {
  const myStyle = {
    backgroundImage: `url(${HomeBg})`,
    height: "100vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Navbar />
      <main>
        <section style={myStyle} className=""></section>
      </main>
    </>
  );
}

export default Home;