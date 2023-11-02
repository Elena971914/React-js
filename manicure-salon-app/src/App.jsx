import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Appointment from "./components/Appointment";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div>
      {/* <Loader /> */}
      <div className="full_bg">
        <Header />
        <Slider />
      </div>

      <Appointment />
      <Services />
      <Pricing />
      <Blog />
      <About />
      <Customers />
      <Footer />
    </div>
  )
}

export default App;
