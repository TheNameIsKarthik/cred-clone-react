import React from "react";
import "./aboutCred.css";

const AboutCred = () => {
  return (
    <div className="about-cred-wrapper">
      <div className="max-width flex flex-col about-cred">
        <div className="about-section flex flex-col sec">
          <div className="sec-heading">about CRED</div>
          <div className="sec-para">
            CRED is a members only credit card bill payment platform that
            rewards its members for clearing their credit card bills on time.
            CRED members get access to exclusive rewards and experiences from
            premier brands upon clearing their credit card bills on CRED.
          </div>
        </div>
        <div className="reward-section flex flex-col sec">
          <div className="sec-heading">how does CRED reward their users?</div>
          <div className="sec-para">
            CRED partners with the best premier and luxury brands to bring you
            an unmatched experience at the end of every credit card bill payment
            cycle.
          </div>
        </div>
        <div className="earn-section flex flex-col sec">
          <div className="sec-heading">how to earn rewards on CRED?</div>
          <div className="sec-para">
            members can earn rewards in two different ways. CRED coins & gems.{" "}
            <br />
            CRED Coin Rewards: <br /> - when you pay your credit card bill on
            CRED, for every rupee cleared on your bill you earn a CRED coin.{" "}
            <br /> - you can then use earned CRED coins to claim exclusive
            rewards from different brands. <br /> CRED Gem Rewards: <br /> - for
            every person that you refer to CRED who makes a bill payment, you
            earn 10 gems.
          </div>
        </div>
        <div className="member-section flex flex-col sec">
          <div className="sec-heading">what do you get as a CRED Member?</div>
          <div className="sec-para">
            as a CRED member, you instantly make your credit card payment
            experience hassle-free by unlocking several perks only available to
            CRED members. <br /> - seamless bill payment experience through
            modes like upi, net banking and debit cards <br /> - timely credit
            card bill payment reminders <br /> - automate your credit card bill
            payments <br /> - expose hidden charges on your credit card with
            cred protect <br /> - get real-time alerts on duplicate transactions
            on your credit card <br /> - manage multiple credit cards on a
            single portal <br /> - keep a realtime check on your credit score
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCred;
