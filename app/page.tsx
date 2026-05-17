import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import Differentiators from "./components/Differentiators";
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
      <Testimonial />
      <CTA />
    </main>
  );
}
