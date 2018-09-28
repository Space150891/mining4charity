import React, { Component } from 'react';


import  HeaderSection  from './HeaderSection';
import  MiningSection  from './MiningSection';
import  NumbersSection  from './NumbersSection';
import  HowItWorks  from './HowItWorksSection';
import  OrganizationsSection  from './OrganizationsSection';
import  MissionSection  from './MissionSection';
import  HelpUsSection from './HelpUsSection';
import  SupportersSection from './SupportersSection';
import  FooterSection from './FooterSection';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <HeaderSection />
          <MiningSection />
          <NumbersSection />
          <HowItWorks />
          <OrganizationsSection />
          <MissionSection />
          <HelpUsSection />
          <SupportersSection />
        </div>
        <FooterSection />
      </div>

    );
  }
}

export default App;
