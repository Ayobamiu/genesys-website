import React, { Component } from "react";
import arrow_up from "../images/landing/arrow_up.png";
import pic_1 from "../images/apply knowledge/pic_1.png";
import pic_2 from "../images/apply knowledge/pic_2.png";
class Apply extends Component {
  state = {};
  render() {
    return (
      <div className="learnable-apply">
        <section className="learnable-apply-section-apply-your-knowledge">
          <div className="learnable-apply-section-apply-your-knowledge--text">
            <h1 className="learnable-apply-section-apply-your-knowledge--text--head">
              Apply Your Knowledge
            </h1>
            <p className="learnable-apply-section-apply-your-knowledge--text--para">
              Before you re done with Learnable, you will apply everything you
              ve learned. You ll be part of a team made up of 2 designers and 4
              developers. You ll get to work alongside the Genesys team on
              projects and we ll teach you how the sauce is made. By combining
              technology, design, and great ideas, your team will have the
              unique opportunity to collaborate with the Genesys team to bring
              your own concept to life, from the first pen sketches to the final
              functioning product. You ll then get to show off your special
              project to everyone.
            </p>
          </div>
          <div className="learnable-apply-section-apply-your-knowledge--media">
            <img
              src={pic_1}
              alt=""
              className="learnable-apply-section-apply-your-knowledge--media--image"
            />
          </div>
        </section>
        <section className="learnable-apply-section-image">
          <img
            src={pic_2}
            alt=""
            className="learnable-apply-section-image--image"
          />
        </section>
        <section className="learnable-apply-section-texts">
          <div className="learnable-apply-section-text--text">
            <h1 className="learnable-apply-section-text--text--head">
              How To Get In
            </h1>
            <p className="learnable-apply-section-text--text--para">
              We are very deliberate with our selection process. We are on a
              quest to find amazing people who are passionate about learning and
              growing their careers in the software industry. To this end, we
              have designed our selection process to help us get such people.
            </p>
          </div>
          <div className="learnable-apply-section-text--text">
            <h1 className="learnable-apply-section-text--text--head">
              Online Application
            </h1>
            <p className="learnable-apply-section-text--text--para">
              Introduce yourself to us by filling out our application form. When
              you re done filling out the form, proceed to download our prep
              curriculum that contains everything you need to prepare for the
              physical and technical assessment.
            </p>
            <a href="#" className="learnable-apply-section-text--text--link">
              Apply here
            </a>
          </div>
          <div className="learnable-apply-section-text--text">
            <h1 className="learnable-apply-section-text--text--head">
              Phone Call Interviews
            </h1>
            <p className="learnable-apply-section-text--text--para">
              We will reach out to you to discuss possible opportunities,
              ascertain where you fit in with us, and answer any questions you
              might have about the program. It s supposed to be a chat, getting
              nervous defeats the aim.
            </p>
          </div>
          <div className="learnable-apply-section-text--text">
            <h1 className="learnable-apply-section-text--text--head">
              Final Assessment
            </h1>
            <p className="learnable-apply-section-text--text--para">
              At this stage, we ll get to meet you in person for the first time.
              You ll be invited to the hub for a physical assessment that
              includes a technical assessment, a psychometric test and a face to
              face chat with our team.
            </p>
          </div>
          <div className="learnable-apply-section-text--text">
            <h1 className="learnable-apply-section-text--text--head">Get In</h1>
            <p className="learnable-apply-section-text--text--para">
              If you make it to this stage, you can pack your bags and head down
              to the beautiful city of Enugu. We will join you on your journey
              to build that career of your dreams and provide all the help,
              support and love that we can muster along the way!
            </p>
          </div>
        </section>
        <section className="landing__section-stay-up-to-date">
          <div className="landing__section-stay-up-to-date__arrow-up">
            <img src={arrow_up} alt="" />
          </div>
          <div className="landing__section-stay-up-to-date__text landing__section-stay-up-to-date--yellow">
            <h1 className="landing__section-stay-up-to-date__text--heading">
              Stay up to date on what we are doing and new learning
              opportunities
            </h1>
            <div className="landing__section-stay-up-to-date__text--middle">
              <input
                className="landing__section-stay-up-to-date__text--middle-input"
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
      </div>
    );
  }
}

export default Apply;
