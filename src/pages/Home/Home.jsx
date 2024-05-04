import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { useProductContext } from "../../context/ContextProvider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Filter from "../../components/Filter/Filter";
import ProductCart from "../../components/ProductCart/ProoductCart";
const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Filter />
        <ProductCart />
      </Layout>
    </>
  );
};

export default Home;
