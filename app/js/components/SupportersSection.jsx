import React, { Component } from 'react';

import SupportersSectionBrands from './SupportersSectionBrands';

class SupportersSection extends Component {
  render() {
    return (
      <div className="supporters-section">
        <div className="supporters-section__title">
          <div className="background-text">
            <p className="background-text__title">Our Supporters</p>
          </div>
          <div className="section-title">
            <p className="section-title__text">Our Supporters</p>
          </div>
        </div>
        <div>
          <SupportersSectionBrands />
        </div>
      </div>
    );
  }
}

export default SupportersSection;
