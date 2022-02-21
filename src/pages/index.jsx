import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Advantages from "../components/home/advantages";
import AllFeatures from "../components/home/allFeatures";
import Compatibility from "../components/home/compatibility";
import Faq from "../components/home/faq";
import Gettingstarted from "../components/home/gettingstarted";
import Hero from "../components/home/hero";
import Requirements from "../components/home/requirements";

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <Advantages />
      <AllFeatures />
      <Gettingstarted />
      <Compatibility />
      <Requirements />
      <Faq />
      <Footer />
    </main>
  );
}

export default Index;
