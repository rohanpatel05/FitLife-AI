import React from "react";
import { Footer, HeroScreen, HomeDietSection, HomeReviewsSection, HomeWorkoutSection } from "../../components"

function Landing() {
  return (
  <>
    <HeroScreen />
    <HomeDietSection />
    <HomeWorkoutSection />
    <HomeReviewsSection />
    <Footer />
  </>
);
}

export default Landing;
