import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper non-mobile">
        <div className="max-width flex footer ">
          <div className="logo-sec flex flex-col">
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png"
              alt="cred-logo"
              className="cred-logo"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
              alt="security"
              className="security-logo"
            />
            <div className="sec-heading">complete security. no asterisks.</div>
            <div className="sec-para">
              CRED encrypts all data and transactions to ensure a completely
              secure experience for our members.
            </div>
          </div>
          <div className="col-gap">
            <div className="products-sec section">
              <div className="sec-heading">products</div>
              <div className="sec-para">
                CRED pay <br /> credit score check
              </div>
            </div>
            <div className="resources-sec  section">
              <div className="sec-heading">resources</div>
              <div className="sec-para">
                articles <br /> tech blogs <br /> calculators <br /> credit card
                payment guide <br /> credit score guide <br /> Dreampurse
                (HipBar) wallet <br />
                refund form
              </div>
            </div>
          </div>
          <div>
            <div className="cred-sec section">
              <div className="sec-heading">CRED</div>
              <div className="sec-para">
                about <br /> careers <br /> IPL <br /> customer care
              </div>
            </div>
            <div className="policy-sec section">
              <div className="sec-heading">policy</div>
              <div className="sec-para">
                security <br /> investor relations <br /> transaction & user
                verification <br /> google API disclosure <br /> UPI faq &
                grievances <br /> equal opportunity policy
              </div>
            </div>
          </div>
        </div>
        <div className="bottom flex max-width">
          <div className="copyright sec-para">
            copyright © 2020-23 Dreamplug Technologies Pvt Ltd.
          </div>

          <div className="terms sec-para">
            privacy policy | terms and conditions | returns and refund
          </div>
        </div>
      </div>
      <div className="only-mobile flex absolute-center footer-text">
        Made with 🔥 by SK
      </div>
    </>
  );
};

export default Footer;
