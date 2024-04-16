import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
// Import css files

class HealthFacility extends Component {
  render() {
    return (
      <div className="section-share section-healthfacility">
        <div className="container">
          <div className="section-container">
            <div className="section-header">
              <span className="title-section">Cơ sở y tế</span>
              <button className="btn-section">Xem thêm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-customize section-healthfacility">
                  {/* <a href="#" className="a-customize section-healthfacility"> */}
                  <div className="bg-image section-healthfacility" />
                  <div className="span-customize">
                    <span className="section-span-footer">
                      Bệnh viện Hữu nghị Việt Đức 1
                    </span>
                  </div>
                  {/* </a> */}
                </div>
                <div className="section-customize">
                  {/* <a href="#" className="a-customize section-healthfacility"> */}
                  <div className="bg-image section-healthfacility" />
                  <div className="span-customize">
                    <span className="section-span-footer">
                      Bệnh viện Hữu nghị Việt Đức 2
                    </span>
                  </div>
                  {/* </a> */}
                </div>
                <div className="section-customize">
                  {/* <a href="#" className="a-customize section-healthfacility"> */}
                  <div className="bg-image section-healthfacility" />
                  <div className="span-customize">
                    <span className="section-span-footer">
                      Bệnh viện Hữu nghị Việt Đức 3
                    </span>
                  </div>
                  {/* </a> */}
                </div>
                <div className="section-customize">
                  {/* <a href="#" className="a-customize section-healthfacility"> */}
                  <div className="bg-image section-healthfacility" />
                  <div className="span-customize">
                    <span className="section-span-footer">
                      Bệnh viện Hữu nghị Việt Đức 4
                    </span>
                  </div>
                  {/* </a> */}
                </div>
                <div className="section-customize">
                  {/* <a href="#" className="a-customize section-healthfacility"> */}
                  <div className="bg-image section-healthfacility" />
                  <div className="span-customize">
                    <span className="section-span-footer">
                      Bệnh viện Hữu nghị Việt Đức 5
                    </span>
                  </div>
                  {/* </a> */}
                </div>
                <div className="section-customize">
                  {/* <a href="#" className="a-customize section-healthfacility"> */}
                  <div className="bg-image section-healthfacility" />
                  <div className="span-customize">
                    <span className="section-span-footer">
                      Bệnh viện Hữu nghị Việt Đức 6
                    </span>
                  </div>
                  {/* </a> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthFacility);
