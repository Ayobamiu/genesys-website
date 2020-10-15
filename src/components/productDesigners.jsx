import React, { Component } from "react";
import arrow_up from "../images/landing/arrow_up.png";
import pic_1 from "../images/software/pic_1.png";
import pic_2 from "../images/product-designer/pic_2.png";

class ProductDesigners extends Component {
  state = {};
  render() {
    return (
      <div className="learnable-software">
        <section className="learnable-software-section-learnable-software-developer">
          <div className="learnable-software-section-learnable-software-developer--text">
            <h1 className="learnable-software-section-learnable-software-developer--text--head">
              The Learnable Product Designer
            </h1>
            <p className="learnable-software-section-learnable-software-developer--text--para">
              At Genesys, you'll be exposed to every discipline in our creative
              process – UX, UI, interaction design, and copywriting. You’ll be
              part of a dynamic team that's made up of like-minded, talented
              people. You'll work hard with them to create things that will
              amaze everyone everywhere.
            </p>
            <p className="learnable-software-section-learnable-software-developer--text--para">
              In addition to your team projects, you’ll be lending a hand to the
              creative team. Participating in brainstorm sessions, building
              winning pitches, preparing assets, and design scriptures for
              productions, you'll be in the thick of it all.
            </p>
            <p className="learnable-software-section-learnable-software-developer--text--para">
              Oh, and you’ll make amazing friends while you're at it!
            </p>
          </div>
          <div className="learnable-software-section-learnable-software-developer--media">
            <img
              className="learnable-software-section-learnable-software-developer--media--image learnable-software-section-learnable-software-developer--media--image--orange"
              src={pic_1}
              alt=""
            />
          </div>
        </section>
        <section className="learnable-software-section-someone-to-count-on">
          <h1 className="learnable-software-section-someone-to-count-on--text learnable-software-section-someone-to-count-on--text--orange">
            “ The greats weren t great because at birth they could paint. The
            greats were great because they painted a lot.” <br /> - Macklemore
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
            motivated, and social.
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Understand how to use the Figma design software
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Be able to create initial design layouts with confidence and
            know-how to effectively communicate concepts to everyone on your
            team.
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Have a basic understanding of design principles and theories To have
            creative courage. This is a tough industry, only the brave and
            sturdy remain.
          </p>
          <p className="learnable-software-section-we-expect-you-to--para">
            Be prepared to defend your decisions and take constructive
            criticism.
          </p>
          <small className="learnable-software-section-we-expect-you-to--small">
            {" "}
            <br />
            To us, beauty without substance has no value. At Genesys, design
            thinking and execution are equally important, so we’re constantly on
            the lookout for not only the how but also the why.
          </small>
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

export default ProductDesigners;
