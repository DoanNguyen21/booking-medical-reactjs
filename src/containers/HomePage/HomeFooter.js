import React, { Component } from "react";
import { connect } from "react-redux";
// import "./HomeFooter.scss";

import Slider from "react-slick";
// Import css files

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; 2024 Nguyễn Lê Duy Đoan. More information.
          <a target="_blank" href="https://github.com/DoanNguyen21">
            {" "}
            &#8594; click here &#8592;
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
