import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import Differentiators from "./components/Differentiators";
import Doctors from "./components/Doctors";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsBar />
      <Services />
      <Differentiators />
      <Doctors />
      <Testimonial />
      <CTA />
    </main>
  );
}
