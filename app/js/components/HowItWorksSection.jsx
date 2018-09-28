import React, { Component } from 'react';

import HowItWorksContent from './HowItWorksContent';

class HowItWorks extends Component {
  render() {
    return (
      <div className="how-works-section">
        <div className="how-works-section__title">
          <div className="background-text">
            <p className="background-text__title">How It Works</p>
          </div>
          <div className="section-title">
            <p className="section-title__text">How It Works</p>
          </div>
        </div>
        <HowItWorksContent />
      </div>
    );
  }
}

export default HowItWorks;
