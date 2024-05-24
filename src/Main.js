import React from "react";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainSlides from "./Components/MainSlides";

import 'bootstrap/dist/css/bootstrap.min.css'

function Main() {
  return (
    <div>
        <Header />
            <MainSlides></MainSlides>
        <Footer/>
    </div>

  );
}

export default Main;
