import React, { Component } from "react";
import arrow_down from "../images/learnable/arrow-down.png";
import pic_1 from "../images/landing/pic_1.png";
import pic_2 from "../images/landing/pic_2.png";
import pic_3 from "../images/landing/pic_3.png";
import pic_4 from "../images/landing/pic_4.png";
import pic_5 from "../images/landing/pic_5.png";
import rec_1 from "../images/landing/rec_1.png";
import rec_2 from "../images/landing/rec_2.png";
import rec_3 from "../images/landing/rec_3.png";
import arrow_up from "../images/landing/arrow_up.png";
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
        <section className="landing__section-startzone">
          <div className="landing__section-startzone--media">
            <img src={pic_4} alt="" width="100%" />
          </div>
          <div className="landing__section-startzone--text">
            <h1>StartZone</h1>
            <p>
              The business environment is harsh for early stage businesses. We
              can help you rise above it all.
            </p>
            <a href="#">Here's how</a>
          </div>
        </section>
        <section className="landing__section-other-things-we-do">
          <div className="landing__section-other-things-we-do__media-plus-text">
            <div className="landing__section-other-things-we-do__media-plus-text__first-half">
              <img src={rec_1} alt="" />
              <p>Genesys Ignite</p>
            </div>
            <div className="landing__section-other-things-we-do__media-plus-text__second-half">
              <div className="landing__section-other-things-we-do__media-plus-second-half-one">
                <img src={rec_2} alt="" />
                <p>CodeVille</p>
              </div>
              <div className="landing__section-other-things-we-do__media-plus-second-half-two">
                <img src={rec_3} alt="" />
                <p>Pink summer of code</p>
              </div>
            </div>
          </div>
          <div className="landing__section-other-things-we-do__text">
            <h1>Other things we do</h1>
          </div>
        </section>
        <section className="landing__section-best-team-in-the-world">
          <div className="landing__section-best-team-in-the-world--media">
            <img src={pic_5} alt="" width="100%" />
          </div>
          <div className="landing__section-best-team-in-the-world--text">
            <h1>The best team in the world</h1>
            <p>
              We work with the most amazing people our industry has to offer.
              They are really passionate about making a difference
            </p>
            <a href="#">See team</a>
          </div>
        </section>
        <section className="landing__section-stay-up-to-date ">
          <div className="landing__section-stay-up-to-date__arrow-up">
            <img src={arrow_up} alt="" />
          </div>
          <div className="landing__section-stay-up-to-date__text landing__section-stay-up-to-date--green">
            <h1 className="landing__section-stay-up-to-date__text--heading">
              Stay up to date on what we are doing and new learning
              opportunities
            </h1>
            <div className="landing__section-stay-up-to-date__text--middle">
              <input
              className='landing__section-stay-up-to-date__text--middle-input'
                type="email"
                name="email"
                id="email"
                placeholder="YOUR EMAIL"
              />
              <p>View Privacy Policy</p>
            </div>
            <button className="landing__section-stay-up-to-date__text--button">
              subscribe
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Landing;
