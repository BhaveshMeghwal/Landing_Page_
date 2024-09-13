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

import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  // weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={urbanist.className}>
      <Navbar />
      <Hero />
      <Solutions />

      <Services />
      <Blogs />
      <About />

      <MeetOurFounder />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
