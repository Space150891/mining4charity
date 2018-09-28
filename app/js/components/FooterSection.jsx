import React, { Component } from 'react';

class FooterSection extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container footer-section">
          <div className="row footer-section__high">
            <div className="col-lg-3 mail-text">
              <p>For any questions, partnership, offers, support or
                to simply to say hello, please send us an email.</p>
            </div>
            <div className="col-lg-6">
              <nav className="navbar footer-navbar">
                <a className="nav-link" href="#">How it works</a>
                <a className="nav-link" href="#">Our mission</a>
                <a className="nav-link" href="#">Donate</a>
                <a className="nav-link" href="#">Our Supporters</a>
                <a className="nav-link" href="#">Contact</a>
              </nav>
            </div>
            <div className="col-lg-3 mining-footer-text">
              <p>Mining4Charity is a non profit charity organisation with the aim
                to bridge the gap between online support and real world charity.</p>
            </div>
          </div>
          <div className="row footer-section__low">
            <div className="col-lg-4 mail">
              <img
                src="../../images/@%20(1).svg"
                alt="mail"/>
              <a href="mailto:contact@mining4charity.com">contact@mining4charity.com</a>
            </div>
            <div className="col-lg-4 copyright">
              <p>© 2018 Mining4Charity</p>
            </div>
            <div className="col-lg-4 companies-sm-logo">
              <img
                src="../../images/logo/CubexLogoSM.svg"
                alt="CubeX Logo Small"/>
              <img
                src="../../images/logo/CubitsLogoSM.svg"
                alt="Cubits Logo Small"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSection;
