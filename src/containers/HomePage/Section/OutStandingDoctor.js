import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="container">
          <div className="section-container">
            <div className="section-header">
              <span className="title-section">Bác sĩ nổi bật</span>
              <button className="btn-section">Xem thêm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-customize section-outstanding-doctor">
                  <a
                    href="#"
                    className="a-customize section-outstanding-doctor"
                  >
                    <div className="outer-bg section-outstanding-doctor">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>

                    <div className="span-customize section-outstanding-doctor">
                      <span className="section-span-footer">
                        Giáo sư, Tiến sĩ Hà Văn Quyết
                      </span>
                      <div className="span-specialty-outstanding-doctor">
                        Cơ xương khớp
                      </div>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-outstanding-doctor">
                  <a
                    href="#"
                    className="a-customize section-outstanding-doctor"
                  >
                    <div className="outer-bg section-outstanding-doctor">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="span-customize section-outstanding-doctor">
                      <span className="section-span-footer">
                        Giáo sư, Tiến sĩ Hà Văn Quyết
                      </span>
                      <div className="span-specialty-outstanding-doctor">
                        Cơ xương khớp
                      </div>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-outstanding-doctor">
                  <a
                    href="#"
                    className="a-customize section-outstanding-doctor"
                  >
                    <div className="outer-bg section-outstanding-doctor">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="span-customize section-outstanding-doctor">
                      <span className="section-span-footer">
                        Giáo sư, Tiến sĩ Hà Văn Quyết
                      </span>
                      <div className="span-specialty-outstanding-doctor">
                        Cơ xương khớp
                      </div>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-outstanding-doctor">
                  <a
                    href="#"
                    className="a-customize section-outstanding-doctor"
                  >
                    <div className="outer-bg section-outstanding-doctor">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>
                    <div className="span-customize section-outstanding-doctor">
                      <span className="section-span-footer">
                        Giáo sư, Tiến sĩ Hà Văn Quyết
                      </span>
                      <div className="span-specialty-outstanding-doctor">
                        Cơ xương khớp
                      </div>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-outstanding-doctor">
                  <a
                    href="#"
                    className="a-customize section-outstanding-doctor"
                  >
                    <div className="outer-bg section-outstanding-doctor">
                      <div className="bg-image section-outstanding-doctor" />
                    </div>

                    <div className="span-customize section-outstanding-doctor">
                      <span className="section-span-footer">
                        Giáo sư, Tiến sĩ Hà Văn Quyết
                      </span>
                      <div className="span-specialty-outstanding-doctor">
                        Cơ xương khớp
                      </div>
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
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
