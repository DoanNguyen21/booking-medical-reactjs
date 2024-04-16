import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeaderPatient.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { withRouter } from "react-router";

import { changeLanguageApp } from "../../store/actions";

class HomeHeaderPatient extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    // fire redux events : actions
  };

  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push(`/home`);
    }
  };
  render() {
    let language = this.props.language;

    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="container">
            <div className="home-header-content">
              <div className="left-content ">
                <i className="fas fa-bars"></i>
                <div
                  className="header-logo"
                  onClick={() => this.returnToHome()}
                ></div>
              </div>
              <div className="center-content">
                <div className="layout-content">
                  <div className="child-content">
                    <span className="title-first">Chuyên khoa</span>

                    <span className="title-second">
                      Tìm bác sĩ theo chuyên khoa
                    </span>
                  </div>
                  <div className="child-content">
                    <span className="title-first">Cơ sở y tế</span>

                    <span className="title-second">
                      Chọn bệnh viện phòng khám
                    </span>
                  </div>
                  <div className="child-content">
                    <span className="title-first">Bác sĩ</span>

                    <span className="title-second">Chọn bác sĩ giỏi</span>
                  </div>
                  <div className="child-content">
                    <span className="title-first">Gói khám</span>

                    <span className="title-second">
                      Khám sức khỏe tổng quát
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-content">
                <div className="appoinment">
                  <i className="far fa-clock"></i>
                  <span>
                    <FormattedMessage id="homeheader.appointmentschedule" />
                  </span>
                </div>
                <div className="support">
                  <i className="far fa-question-circle"></i>
                  <span>
                    <FormattedMessage id="homeheader.support" />
                  </span>
                </div>
                <div
                  className={
                    language === LANGUAGES.VI
                      ? "language-vi active"
                      : "language-vi"
                  }
                >
                  <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                    VN
                  </span>
                </div>
                <div
                  className={
                    language === LANGUAGES.EN
                      ? "language-en active"
                      : "language-en"
                  }
                >
                  <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                    EN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeaderPatient)
);
