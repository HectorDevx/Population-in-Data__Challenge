import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Country } from "./components/Country";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Intro />
      <Country />
      <About />
      <Footer />
    </>
  );
};

export default App;
