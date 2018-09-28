import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class HelpUsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputLinkClicked: false,
      value: 'OIHJUhnihabwebc9abecb2vfa',
      copied: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSecondInput = this.handleAddSecondInput.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleAddSecondInput() {
    this.setState({
      inputLinkClicked: true,
    });
  }
  render() {
    return (
      <div className="help-us-section">
        <div className="help-us-section__title">
          <div className="background-text">
            <p className="background-text__title">Help us grow</p>
          </div>
          <div className="section-title">
            <p className="section-title__text">Help us grow</p>
          </div>
        </div>
        <div className="row help-us-section__subtitle">
          <div className="col-lg-10 offset-lg-1">Mining4Charity is a stricty non profit initiative and is funded only via donations. To support development
          of the Mining4Charity-project, you can make a donation by sending cryptocurrency to any of the following wallet
            addresses:
          </div>
        </div>
        <div className="help-us-section__content">
          <div className="row coins-row">
            <div className="col-lg-4">
              <div className="coin-block">
                <img
                  src="../../images/coins/Bitcoin.svg"
                  alt="Coin icon"/>
                <p className="coin-block__title">Bitcoin</p>
                <button className="coin-block__button" onClick={this.handleAddSecondInput}>Wallet</button>
                {
                  this.state.inputLinkClicked ?
                    <div className="group-element">
                      <input
                        type="text"
                        className="w-code"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                      <CopyToClipboard
                        text={this.state.value}
                        onCopy={() => this.setState({copied: true})}>
                        <span className="copy-code"> <img src="../../images/Copybt.png" alt="Copy"/></span>
                      </CopyToClipboard>
                    </div>
                    :
                    this.state.inputLinkClicked = false
                }
              </div>
            </div>
            <div className="col-lg-4">
              <div className="coin-block">
                <img
                  src="../../images/coins/BitcoinCash.svg"
                  alt="Coin icon"/>
                <p className="coin-block__title">Bitcoin Cash</p>
                <button className="coin-block__button">Wallet</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="coin-block">
                <img
                  src="../../images/coins/Litecoin.svg"
                  alt="Coin icon"/>
                <p className="coin-block__title">Litecoin</p>
                <button className="coin-block__button">Wallet</button>
              </div>
            </div>
          </div>
          <div className="row coins-row-2">
            <div className="col-lg-4">
              <div className="coin-block">
                <img
                  src="../../images/coins/Ethereum.svg"
                  alt="Coin icon"/>
                <p className="coin-block__title">Ethereum</p>
                <button className="coin-block__button">Wallet</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="coin-block">
                <img
                  src="../../images/coins/Monero.svg"
                  alt="Coin icon"/>
                <p className="coin-block__title">Monero</p>
                <button className="coin-block__button">Wallet</button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="coin-block">
                <img
                  src="../../images/coins/Ripple.svg"
                  alt="Coin icon"/>
                <p className="coin-block__title">Ripple</p>
                <button className="coin-block__button">Wallet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpUsSection;
