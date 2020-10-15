import React, { Component } from "react";
import arrow_up from "../images/landing/arrow_up.png";
import journal_2 from "../images/journal/pic_2.png";
import journal_3 from "../images/journal/pic_3.png";
import journal_4 from "../images/journal/pic_4.png";
import journal_5 from "../images/journal/pic_5.png";
import pic_1 from "../images/journal/pic_1.png";
import profile_pic from "../images/journal/profile_pic.png";

class Journal extends Component {
  state = {};
  render() {
    return (
      <div className="learnable-journal">
        <section className="learnable-journal-section-one">
          <h1 className="learnable-journal-section-one--head">Journal</h1>
          <button className="learnable-journal-section-one--button">
            CATEGORIES
          </button>
        </section>
        <section className="learnable-journal-section-learn-like-a-pro">
          <div className="learnable-journal-section-learn-like-a-pro--media">
            <img
              src={pic_1}
              alt=""
              className="learnable-journal-section-learn-like-a-pro--media--image"
            />
          </div>
          <div className="learnable-journal-section-learn-like-a-pro--text">
            <a
              href="#"
              className="learnable-journal-section-learn-like-a-pro--text--link"
            >
              Inspiration
            </a>
            <h1 className="learnable-journal-section-learn-like-a-pro--text--head">
              Learn Design Thinking like a Pro and Build Projects that People
              will care about
            </h1>
            <p className="learnable-journal-section-learn-like-a-pro--text--para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              sapien arcu vitae orci at molestie. Pharetra quisque donec
              accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et,
              hendrerit viverra risus. Vulputate euismod commodo donec tincidunt
              et, aliquam. Eget scelerisque netus habitant dui porttitor cursus.
              Ipsum sem ut tortor ac ullamcorper. Lacus.
            </p>
            <div className="learnable-journal-section-learn-like-a-pro--text--profile">
              <img
                src={profile_pic}
                alt=" "
                className="learnable-journal-section-learn-like-a-pro--text--profile--image"
              />
              <small className="learnable-journal-section-learn-like-a-pro--text--profile--small">
                David Mong, Apr 9, 2020
              </small>
            </div>
          </div>
        </section>

        <section className="learnable-journal-section-journals">
          <div className="learnable-home-section-journal--journals">
            <div className="learnable-home-section-journal--journal">
              <img
                src={journal_2}
                alt=""
                className="learnable-home-section-journal--journal--image"
              />
              <a
                href="#"
                className="learnable-home-section-journal--journal--link"
              >
                INSPIRATION
              </a>
              <h1 className="learnable-home-section-journal--journal--head">
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h1>
              <small className="learnable-home-section-journal--journal--date">
                David Mong, Apr 9, 2020
              </small>
            </div>
            <div className="learnable-home-section-journal--journal">
              <img
                src={journal_3}
                alt=""
                className="learnable-home-section-journal--journal--image"
              />
              <a
                href="#"
                className="learnable-home-section-journal--journal--link"
              >
                INSPIRATION
              </a>
              <h1 className="learnable-home-section-journal--journal--head">
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h1>
              <small className="learnable-home-section-journal--journal--date">
                David Mong, Apr 9, 2020
              </small>
            </div>
            <div className="learnable-home-section-journal--journal">
              <img
                src={journal_4}
                alt=""
                className="learnable-home-section-journal--journal--image"
              />
              <a
                href="#"
                className="learnable-home-section-journal--journal--link"
              >
                INSPIRATION
              </a>
              <h1 className="learnable-home-section-journal--journal--head">
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h1>
              <small className="learnable-home-section-journal--journal--date">
                David Mong, Apr 9, 2020
              </small>
            </div>
            <div className="learnable-home-section-journal--journal">
              <img
                src={journal_5}
                alt=""
                className="learnable-home-section-journal--journal--image"
              />
              <a
                href="#"
                className="learnable-home-section-journal--journal--link"
              >
                INSPIRATION
              </a>
              <h1 className="learnable-home-section-journal--journal--head">
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h1>
              <small className="learnable-home-section-journal--journal--date">
                David Mong, Apr 9, 2020
              </small>
            </div>
          </div>

          <div className="learnable-home-section-journal--journals">
            <div className="learnable-home-section-journal--journal">
              <img
                src={journal_2}
                alt=""
                className="learnable-home-section-journal--journal--image"
              />
              <a
                href="#"
                className="learnable-home-section-journal--journal--link"
              >
                INSPIRATION
              </a>
              <h1 className="learnable-home-section-journal--journal--head">
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h1>
              <small className="learnable-home-section-journal--journal--date">
                David Mong, Apr 9, 2020
              </small>
            </div>
            <div className="learnable-home-section-journal--journal">
              <img
                src={journal_3}
                alt=""
                className="learnable-home-section-journal--journal--image"
              />
              <a
                href="#"
                className="learnable-home-section-journal--journal--link"
              >
                INSPIRATION
              </a>
              <h1 className="learnable-home-section-journal--journal--head">
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h1>
              <small className="learnable-home-section-journal--journal--date">
                David Mong, Apr 9, 2020
              </small>
            </div>
            <div className="learnable-home-section-journal--journal">
              <img
                src={journal_4}
                alt=""
                className="learnable-home-section-journal--journal--image"
              />
              <a
                href="#"
                className="learnable-home-section-journal--journal--link"
              >
                INSPIRATION
              </a>
              <h1 className="learnable-home-section-journal--journal--head">
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h1>
              <small className="learnable-home-section-journal--journal--date">
                David Mong, Apr 9, 2020
              </small>
            </div>
            <div className="learnable-home-section-journal--journal">
              <img
                src={journal_5}
                alt=""
                className="learnable-home-section-journal--journal--image"
              />
              <a
                href="#"
                className="learnable-home-section-journal--journal--link"
              >
                INSPIRATION
              </a>
              <h1 className="learnable-home-section-journal--journal--head">
                Learn Design Thinking like a Pro and Build Projects that People
                will care about
              </h1>
              <small className="learnable-home-section-journal--journal--date">
                David Mong, Apr 9, 2020
              </small>
            </div>
          </div>
          <button className="learnable-journal-section-journals-load-more-button">
            load more
          </button>
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
            <p className='landing__section-stay-up-to-date__text--hidden'>View Privacy Policy</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Journal;
