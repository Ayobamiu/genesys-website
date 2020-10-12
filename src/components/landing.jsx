import React, { Component } from "react";
import arrow_down from "../images/learnable/arrow-down.png";
import pic_1 from "../images/landing/pic_1.png";
import pic_2 from "../images/landing/pic_2.png";
import pic_3 from "../images/landing/pic_3.png";
import video_control from "../images/landing/video_control.png";

class Landing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="landing__section-one">
          <div className="landing__section-one--text">
            <div className="landing__section-one--text-big">
              Genesys provides opportunities for young Nigerian techies and
              opportunities to grow and innovate.
            </div>
            <div className="landing__section-one--text-small">
              We understand that opportunities are scarce in these parts. We are
              either creating or exposing our people to these opportunities.
            </div>
          </div>
          <div className="landing__section-one--media">
            <div className="landing__section-one--media__arrow_down">
              <img src={arrow_down} alt="" />
            </div>
            <div className="landing__section-one--media__big_pic">
              <img src={pic_1} alt="" />
              <div className="landing__section-one--media__big_pic-video-control">
                <i className="fa fa-play"></i>
                <small>#weAreGenesys</small>
              </div>
            </div>
          </div>
        </section>
        <section className="landing__section-learnable">
          <div className="landing__section-learnable--media">
            <img src={pic_2} alt="" width="100%" />
          </div>
          <div className="landing__section-learnable--text">
            <h1>Learnable</h1>
            <p>
              Every year, young Nigerians are launching new careers in the
              technology industry. Find out how Genesys is helping them do it.
            </p>
            <a href="#">Learn more</a>
          </div>
        </section>
        <section className="landing__section-agora">
          <div className="landing__section-agora--text">
            <h1>Agora</h1>
            <p>
              We are reimagining the workplace and how people work. Find out how
              our co working spaces can help you enjoy the work that you do.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div className="landing__section-agora--media">
            <img src={pic_3} alt="" width="100%" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Landing;
