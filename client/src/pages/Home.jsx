import React from "react";
import Hero from "../components/Hero";
import WhyTouristo from "../components/WhyTouristo";
import OurTeam from "../components/OurTeam";
import Section3 from "../components/Section3";
import Stats from "../components/Stats";
import Reviews from "../components/Reviews";
import PublicNavBar from "../components/PublicNavBar";
function Home() {
  return (
    <div>
      <PublicNavBar />
      <Hero />
      <WhyTouristo />
      <OurTeam />
      <Section3 />
      <Stats />
      <Reviews />
    </div>
  );
}

export default Home;
