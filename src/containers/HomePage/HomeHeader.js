import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import "./Section/Banner.scss";
import "../../styles/styles.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";

import { changeLanguageApp } from "../../store/actions";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    // fire redux events : actions
  };
  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="container">
            <div className="home-header-content  ">
              <div className="left-content ">
                <i className="fas fa-bars"></i>
                <div className="header-logo"></div>
              </div>
              <div className="center-content">
                <div className="child-content">
                  <div>
                    <a href="#">
                      <span>
                        {" "}
                        <FormattedMessage id="home-header.all" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="child-content">
                  <div>
                    <a href="#">
                      <span>
                        {" "}
                        <FormattedMessage id="home-header.athome" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="child-content">
                  <div>
                    <a href="#">
                      <span>
                        <FormattedMessage id="home-header.atinstitute" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="child-content">
                  <div>
                    <a href="#">
                      <span>
                        <FormattedMessage id="home-header.livestrong" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="input-search">
                  <a href="#" className="button-search">
                    <i className="fas fa-search"></i>
                    <span>
                      <FormattedMessage id="home-header.findadoctor" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="right-content">
                <div className="appoinment">
                  <i className="far fa-clock"></i>
                  <span>
                    <FormattedMessage id="home-header.appointmentschedule" />
                  </span>
                </div>
                <div className="support">
                  <i className="far fa-question-circle"></i>
                  <span>
                    <FormattedMessage id="home-header.support" />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
