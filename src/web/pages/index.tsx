import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { HowItWorks } from "../components/HowItWorks";
import { Approach } from "../components/Approach";
import { Areas } from "../components/Areas";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Approach />
      <Areas />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
