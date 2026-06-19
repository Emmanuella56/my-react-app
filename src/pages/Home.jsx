import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service"
import WhyChooseUs from "../components/WhyChooseUs";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <WhyChooseUs />
    </>
  );
}

export default Home;
