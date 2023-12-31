import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Features from "./Components/Features";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Header />
        <Features />
        <Offer />
        <About />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
