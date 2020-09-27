import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <h3>Hello World</h3>
      <Footer />
    </>
  );
};

export default App;
