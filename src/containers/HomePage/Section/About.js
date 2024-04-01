import React, { Component } from "react";
import { connect } from "react-redux";
import "./HealthFacility.scss";

import Slider from "react-slick";
// Import css files

class HealthFacility extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="container">
          <div className="section-about-header">
            Truyền thông nói về Booking Medical
          </div>
          <div className="section-about-content ">
            <div className="content-left col-6">
              <iframe
                width="587"
                height="330"
                src="https://www.youtube.com/embed/FyDQljKtWnI"
                title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                style={{ borderRadius: "10px" }}
              ></iframe>
            </div>
            <div className="content-right col-6">
              <div className="right-body">
                <a className="body-child">
                  <div className="child-customize">
                    <div className="img-customize" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthFacility);
