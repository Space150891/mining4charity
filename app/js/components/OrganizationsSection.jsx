import React, { Component } from 'react';

import OrganizationsSectionBrands from './OrganizationsSectionBrands';

class OrganizationsSection extends Component {
  render() {
    return (
      <div className="organizations-section">
        <div className="organizations-section__title">
          <div className="background-text">
            <p className="background-text__title">Supported charity organizations</p>
          </div>
          <div className="section-title">
            <p className="section-title__text">Supported charity organizations</p>
          </div>
        </div>
        <OrganizationsSectionBrands />
      </div>
    );
  }
}

export default OrganizationsSection;
