import React from "react";
import AboutCred from "../components/AboutCred";
import AppRating from "../components/AppRating";
import BrandsLove from "../components/BrandsLove";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import Experience from "../components/Experience";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeek from "../components/WindowPeek";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <Experience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <AboutCred />
      <Footer />
    </>
  );
};

export default HomePage;
