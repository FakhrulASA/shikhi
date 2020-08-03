import React, { Component } from "react";
import Navbar from "./navbar";
import Banner from "./banner";
import Footer from "./footer";
import Slider from "./slider";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
        <Banner />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
