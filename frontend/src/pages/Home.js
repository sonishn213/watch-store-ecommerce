import React, { useEffect } from "react";

import HeroSection from "../component/sections/HeroSection";

import Product1Section from "../component/sections/Product1Section";
import Product2Section from "../component/sections/Product2Section";
import Product3Section from "../component/sections/Product3Section";
import SomeWordsSection from "../component/sections/SomeWordsSection";

const Home = () => {
  return (
    <main className="">
      <HeroSection />

      <Product1Section />
      <Product2Section />
      <Product3Section />
      <SomeWordsSection />
    </main>
  );
};

export default Home;
