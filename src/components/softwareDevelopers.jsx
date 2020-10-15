import React, { Component } from "react";
import arrow_up from "../images/landing/arrow_up.png";
import pic_1 from "../images/software/pic_1.png";
import pic_2 from "../images/software/pic_2.png";

class SoftwareDevelopers extends Component {
  state = {};
  render() {
    return (
      <div className="learnable-software">
        <section className="learnable-software-section-learnable-software-developer">
          <div className="learnable-software-section-learnable-software-developer--text">
            <h1 className="learnable-software-section-learnable-software-developer--text--head">
              The Learnable Software Developer
            </h1>
            <p className="learnable-software-section-learnable-software-developer--text--para">
              Creativity means a lot to us. So we look for people who can think
              both logistically and artistically, and who know that limits are
              made to be pushed. We value skill and aptitude, but we honor those
              who care about working with their team to add the Genesys flavour
              to every project.
            </p>
            <p className="learnable-software-section-learnable-software-developer--text--para">
              As a developer, being part of the team exposes you to a range of
              diverse, like-minded talented people who are sure to make the
              experience fun for you. You’ll get a shot at building amazing
              things, developing yourself, learning on the job, while exchanging
              healthy jokes and having random hangouts once in a while.
            </p>
          </div>
          <div className="learnable-software-section-learnable-software-developer--media">
            <img
              className="learnable-software-section-learnable-software-developer--media--image learnable-software-section-learnable-software-developer--media--image--green"
              src={pic_1}
              alt=""
            />
          </div>
        </section>
        <section className="learnable-software-section-someone-to-count-on">
          <h1 className="learnable-software-section-someone-to-count-on--text learnable-software-section-someone-to-count-on--text--green">
            “You are someone people can count on. Every day, you come in ready
            to make great things happen.”
          </h1>
        </section>
        <section className="learnable-software-computer-section-image">
          <img
            src={pic_2}
            alt=""
            className="learnable-software-computer-section-image--image"
          />
        </section>
        <section className="learnable-software-section-we-expect-you-to">
          <h1 className="learnable-software-section-we-expect-you-to--head">
            We expect you to…
          </h1>
          <p className="learnable-software-section-we-expect-you-to--para">
            Play nice with other people.
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Be an actively engaging person. That means you are present,
            motivated, and social. You know how to communicate effectively with
            your teammates.
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Love to code. You understand the basics of programming and
            object-oriented design and development.
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Have an eye for detail. Your keen observation helps you catch
            discrepancies and fix them quickly.
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Be innately curious. Your love for technology is insatiable, so
            you’re always researching and experimenting. Learning new technical
            skills while on the job is something you look forward to.
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Appreciate good design. You want to make something that doesn t just
            work flawlessly but looks amazing.
          </p>
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

export default SoftwareDevelopers;
