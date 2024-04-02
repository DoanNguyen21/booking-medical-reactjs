import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
// Import css files

class HandBook extends Component {
  render() {
    return (
      <div className="section-share section-handbook">
        <div className="container">
          <div className="section-container">
            <div className="section-header">
              <span className="title-section">Cẩm nang</span>
              <button className="btn-section">Xem thêm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className="section-customize section-handbook">
                  <a href="#" className="a-customize section-handbook">
                    <div className="bg-image section-handbook" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Nhổ răng khôn ở đâu? Review 5 nha khoa uy tín ở Đồng Nai
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-handbook">
                  <a href="#" className="a-customize section-handbook">
                    <div className="bg-image section-handbook" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Bệnh viện Hữu nghị Việt Đức 2
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-handbook">
                  <a href="#" className="a-customize section-handbook">
                    <div className="bg-image section-handbook" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Bệnh viện Hữu nghị Việt Đức 3
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-handbook">
                  <a href="#" className="a-customize section-handbook">
                    <div className="bg-image section-handbook" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Bệnh viện Hữu nghị Việt Đức 4
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-handbook">
                  <a href="#" className="a-customize section-handbook">
                    <div className="bg-image section-handbook" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Bệnh viện Hữu nghị Việt Đức 5
                      </span>
                    </div>
                  </a>
                </div>
                <div className="section-customize section-handbook">
                  <a href="#" className="a-customize section-handbook">
                    <div className="bg-image section-handbook" />
                    <div className="span-customize">
                      <span className="section-span-footer">
                        Bệnh viện Hữu nghị Việt Đức 6
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
