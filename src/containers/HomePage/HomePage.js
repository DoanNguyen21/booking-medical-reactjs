import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Banner from "./Section/Banner";
import Comprehensive from "./Section/Comprehensive";
import Foryou from "./Section/Foryou";
import Specialty from "./Section/Specialty";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Banner />
        <Foryou />
        <Comprehensive />
        <Specialty />
        <div style={{ height: "200px" }}></div>
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
