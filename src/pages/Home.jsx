import About from "../components/About";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Service"
import WhyChooseUs from "../components/WhyChooseUs";
import Project from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer"


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <WhyChooseUs />
      <Project />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
