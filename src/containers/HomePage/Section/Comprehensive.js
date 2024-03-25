import React, { Component } from "react";
import { connect } from "react-redux";
import "./Comprehensive.scss";

class Comprehensive extends Component {
  render() {
    return (
      <div className="comprehensive-main">
        <div className="container">
          <div className="comprehensive-content">
            <div className="comprehensive-text">
              <span>Dịch vụ toàn diện</span>
            </div>
            <div className="comprehensive-options ">
              <a href="#">
                <div className="options-item ">
                  <img
                    width={"100%"}
                    src="https://bookingcare.vn/_next/static/media/ic_background_grid_item.b108f491.png"
                  />
                  <div className="item-child">
                    <div className="item-logo">
                      <div className="child-logo">
                        <img
                          width={"56px"}
                          height={"56px"}
                          src="https://cdn.bookingcare.vn/fo/w128/2023/06/07/161905-iconkham-chuyen-khoa.png"
                        />
                      </div>
                    </div>
                    <div className="child-span">
                      <span>Khám Chuyên khoa</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="options-item">
                  <img
                    width={"100%"}
                    src="https://bookingcare.vn/_next/static/media/ic_background_grid_item.b108f491.png"
                  />
                  <div className="item-child">
                    <div className="item-logo">
                      <div className="child-logo">
                        <img
                          width={"56px"}
                          height={"56px"}
                          src="https://cdn.bookingcare.vn/fo/w128/2023/06/07/161817-iconkham-tu-xa.png"
                        />
                      </div>
                    </div>
                    <div className="child-span">
                      <span>Khám từ xa</span>
                    </div>
                  </div>
                </div>
              </a>
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

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comprehensive);
