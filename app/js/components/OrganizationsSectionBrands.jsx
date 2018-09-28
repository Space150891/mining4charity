import React, { Component } from 'react';

class OrganizationsSectionBrands extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-3 organizations-logo">
          <img
            className="logo-save"
            src="../../images/logo/SavethechildrenLogo.svg"
            alt="Save the Children Logo"
            width="90"
          />
        </div>
        <div className="col-lg-3 organizations-logo">
          <img
            className="logo-ybs"
            src="../../images/logo/ybslogo.svg"
            alt="YBS Logo"
            width="90"
          />
        </div>
        <div className="col-lg-3 organizations-logo">
          <img
            className="logo-green"
            src="../../images/logo/Greenpeace-Logo.svg"
            alt="Green Peace Logo"
            width="150"
          />
        </div>
        <div className="col-lg-3 organizations-logo">
          <img
            className="logo-abla"
            src="../../images/logo/AblaPortugallogo.svg"
            alt="Alba Portugal Logo"/>
        </div>
        <img
          className=""
          src="../../images/LineSupporters.svg"
          alt="Line"
          width="186"
        />
      </div>
    );
  }
}

export default OrganizationsSectionBrands;
