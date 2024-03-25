import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";

import Slider from "react-slick";
// Import css files

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

class Specialty extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToCroll: 1,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="section-specialty">
        <div className="container">
          <div className="specialty-container">
            <div className="specialty-header">
              <span className="title-section">Chuyên khoa</span>
              <button className="btn-section">Xem thêm</button>
            </div>
            <div className="specialty-body">
              <Slider {...settings}>
                <div className="specialty-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image" />
                    <div className="span-customize">
                      <span className="specialty-span-footer">
                        Cơ xương khớp 1
                      </span>
                    </div>
                  </a>
                </div>
                <div className="specialty-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image" />
                    <div className="span-customize">
                      <span className="specialty-span-footer">
                        Cơ xương khớp 2
                      </span>
                    </div>
                  </a>
                </div>
                <div className="specialty-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image" />
                    <div className="span-customize">
                      <span className="specialty-span-footer">
                        Cơ xương khớp 3
                      </span>
                    </div>
                  </a>
                </div>
                <div className="specialty-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image" />
                    <div className="span-customize">
                      <span className="specialty-span-footer">
                        Cơ xương khớp 4
                      </span>
                    </div>
                  </a>
                </div>
                <div className="specialty-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image" />
                    <div className="span-customize">
                      <span className="specialty-span-footer">
                        Cơ xương khớp 5
                      </span>
                    </div>
                  </a>
                </div>
                <div className="specialty-customize">
                  <a href="#" className="a-customize">
                    <div className="bg-image" />
                    <div className="span-customize">
                      <span className="specialty-span-footer">
                        Cơ xương khớp 6
                      </span>
                    </div>
                  </a>
                </div>
              </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
