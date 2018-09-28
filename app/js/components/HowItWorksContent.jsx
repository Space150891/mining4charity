import React, { Component } from 'react';

class HowItWorksContent extends Component {
  render() {
    return (
      <div className="how-works-section__content">
        <div className="row">
          <div className="col-lg-4">
            <div className="blot rocket-block">
              <img
                src="../../images/startup.svg"
                alt="rocket icon"/>
              <p>Visitor to Mining4charity.com starts the donation of CPU power that is used
                to mine for cryptocurrencies via a ‘start’ button on the website.</p>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="blot cpu-block">
              <img
                src="../../images/cpu.svg"
                alt="cpu icon"/>
              <p>The mining is done through a javascript that uses the CPU power of the donators
                computer or smartphone to mine for cryptocurrency. All mining is directly<br /> via the webbrowser. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 offset-lg-2">
            <div className="blot refresh-block">
              <img
                src="../../images/refresh.svg"
                alt="refresh icon"/>
              <p>Generated coins get allocated to a specific wallet and once every month
                there is a exchange from crypto to FIAT, that gets donated to the supported
                charity organisations.</p>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="blot org-block">
              <img
                src="../../images/organisations.svg"
                alt="organizations icon"/>
              <p>Supported charity organisations receive the donations. The whole process will be publicly
                visible and reports will be available for supporters<br /> to take part of.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorksContent;
