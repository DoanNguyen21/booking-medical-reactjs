import React, { Component } from "react";
import { connect } from "react-redux";
import "./Foryou.scss";

class Foryou extends Component {
  render() {
    return (
      <div className="foryou-main">
        <div className="container">
          <div className="foryou-content">
            <div className="foryou-text">
              <span>Dành cho bạn</span>
            </div>
            <div className="foryou-item">
              <div className="item-content">
                <div className="item">
                  <a>
                    <div className="item-img">
                      <img src="https://cdn.bookingcare.vn/fo/w384/2023/11/01/141017-csyt.png" />
                    </div>
                    <span className="foryou-span">Cơ sở y tế</span>
                  </a>
                </div>
                <div className="item">
                  <a>
                    <div className="item-img">
                      <img src="https://cdn.bookingcare.vn/fo/w384/2023/11/01/140234-bac-si.png" />
                    </div>
                    <span className="foryou-span">Bác sĩ</span>
                  </a>
                </div>
                <div className="item">
                  <a>
                    <div className="item-img">
                      <img src="https://cdn.bookingcare.vn/fo/w384/2023/11/01/140537-chuyen-khoa.png" />
                    </div>
                    <span className="foryou-span">Chuyên khoa</span>
                  </a>
                </div>
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
    language: state.language,
  };
};

const mapDispatchToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Foryou);
