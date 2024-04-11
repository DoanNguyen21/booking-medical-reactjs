import React, { Component } from "react";
import { connect } from "react-redux";

import "./HomePage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeHeader from "./HomeHeader";
import Banner from "./Section/Banner";
import Comprehensive from "./Section/Comprehensive";
import Foryou from "./Section/Foryou";
import HealthFacility from "./Section/HealthFacility";
import Specialty from "./Section/Specialty";
import OutStandingDoctor from "./Section/OutStandingDoctor";
import About from "./Section/About";
import HomeFooter from "./HomeFooter";
import HandBook from "./Section/HandBook";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "grid" }}
      onClick={onClick}
    >
      <i
        style={{
          color: "#34929E",
          fontSize: "20px",
        }}
        class="fas fa-chevron-right"
      ></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "grid" }}
      onClick={onClick}
    >
      <i
        style={{
          color: "#34929E",
          fontSize: "20px",
        }}
        class="fas fa-chevron-left"
      ></i>
    </div>
  );
}

class HomePage extends Component {
  // handleAfterChange = (index, dontAnimate) => {
  //   console.log("channel:", index);
  // };
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToCroll: 1,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    let settings_Doctor = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToCroll: 1,
      // slickGoTo: this.handleAfterChange,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    let settings_Handbook = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToCroll: 1,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div>
        <HomeHeader />
        <Banner />
        <Foryou />
        <Comprehensive />
        <Specialty settings={settings} />
        <HealthFacility settings={settings} />
        <OutStandingDoctor settings={settings_Doctor} />
        <HandBook settings={settings_Handbook} />
        <About />
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
