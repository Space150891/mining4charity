import React, { Component } from 'react';

import MissionSectionImage from './MissionSectionImage';

class MissionSection extends Component {
  render() {
    return (
      <div className="mission-section">
        <div className="mission-section__title">
          <div className="background-text">
            <p className="background-text__title">Our mission</p>
          </div>
          <div className="section-title">
            <p className="section-title__text">Our mission</p>
          </div>
        </div>
        <div className="mission-section__content">
          <div className="row">
            <div className="col-lg-4">
              <MissionSectionImage />
            </div>
            <div className="col-lg-7 offset-lg-1 mission-section__content-text">
              <div className="new-horizon">
                <h3>A New Horizon</h3>
                <p>Mining4charity is STRICTLY a non profit initative. Mining4charity's mission is to use transparent blockchain
                  technology to allow people to actively support charity efforts throughout the world. We have all seen that
                  the online community is quick to spread support through hashtags and like buttons, support that not necessarily
                  carry over into the monetary support critically needed by humanitarian NGOs. Mining4Charity aim to bridge the gap
                  between online support and real world charity with cryptocurrency mining.</p>
              </div>
              <div className="our-aim">
                <h3>Our aim</h3>
                <p>Our aim is to support disaster relief, education in developing countries and environmental research.
                  Initially we will support ongoing efforts by established charities as it gives us the ability to help
                  people from day one as well as giving the community a guarantee that the money they mined through Mining4Charity
                  end up where it is needed.</p>
              </div>
              <div className="donate-cpu">
                <h3>Donating CPU power</h3>
                <p>Mining4charity uses donated computer power/CPU power to do mining and 100% of the proceeds generated is
                  donated to charities. Simplified, participants are donating computer power to charities through Mining4Charity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MissionSection;
