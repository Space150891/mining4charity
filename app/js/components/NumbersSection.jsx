import React, { Component } from 'react';

class NumbersSection extends Component {
  render() {
    return (
      <div className="numbers-section">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="numbers-section__visit">
              <h2>156.426 <span>Visits counter</span></h2>
              <img
                src="../../images/Line.svg"
                alt="Line"/>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="numbers-section__donate">
              <h2>200 USD <span>Donated so far</span></h2>
              <img
                src="../../images/Line.svg"
                alt="Line"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NumbersSection;
