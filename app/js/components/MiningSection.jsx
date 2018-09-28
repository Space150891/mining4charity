import React, { Component } from 'react';

import MiningSectionImage from './MiningSectionImage';

class MiningSection extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="mining-section">
            <div className="mining-section__title">
              <h1>MINING-<span>4</span>-CHARITY</h1>
              <img
                className="blue-line"
                src="../../images/Line.svg"
                alt="Line"/>
            </div>
            <div className="mining-section__counter">
              <h3>Make a difference with your computer.</h3>
              <p>00:00:00</p>
            </div>
            <div className="mining-section__range">
              <h4>How much power would you like to donate?</h4>
              <p>50%</p>
            </div>
            <div className="mining-section__button">
              <button type="submit" className="btn btn-lg">Stop Mining</button>
            </div>
          </div>
        </div>
        <MiningSectionImage />
      </div>
    );
  }
}

export default MiningSection;
