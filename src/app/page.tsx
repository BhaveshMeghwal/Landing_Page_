import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import MeetOurFounder from "../components/MeetOurFounder"
import ContactUs from "../components/ContactUs"
import Solutions from "../components/Solutions"
import Blogs from "../components/Blogs"
import WhyChooseUs from "../components/WhyChooseUs"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Solutions/>
    
    <Services/>
    <Blogs/>
    <About/>
    
    <MeetOurFounder/>
<WhyChooseUs/>
    <ContactUs/>
    <Footer/>
    
    </>
  );
}
