import React, { Component } from 'react';

class SupportersSectionBrands extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-5 offset-lg-1 supporters-bike">
          <img
            className="logo-save"
            src="../../images/3men.png"
            alt="3 men"
          />
        </div>
        <div className="col-lg-3 offset-lg-1 supporters-btn-logo">
          <button className="cubex-logo">
            <img src="../../images/logo/CubexLogo.svg" alt="CubeX Logo"/>
          </button>
          <button className="cubits-logo">
            <img src="../../images/logo/CubitsLogo.svg" alt="Cubits Logo"/>
          </button>
        </div>
      </div>
    );
  }
}

export default SupportersSectionBrands;
