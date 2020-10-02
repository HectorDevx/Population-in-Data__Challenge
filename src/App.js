import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { About } from "./components/About";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Intro />
      <About />
      <Footer />
    </>
  );
};

export default App;
