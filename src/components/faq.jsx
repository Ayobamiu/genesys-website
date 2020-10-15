import React, { Component } from "react";
import arrow_up from "../images/landing/arrow_up.png";
import pic_1 from "../images/faq/pic_1.png";

class Faq extends Component {
  state = {};
  render() {
    return (
      <section className="learnable-faq-section-faqs">
        <div className="learnable-faq-section-faqs--flex">
          <h1 className="learnable-faq-section-faqs--flex--head">FAQ</h1>
          <img
            src={pic_1}
            alt=""
            className="learnable-faq-section-faqs--flex--image"
          />
        </div>

        <div className="learnable-faq-section-faqs__faqs">
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              How many people can attend a course?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              What s the learning experience like?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              Who are the coaches?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              How far in advance should we book?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              Can you customize your courses?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              How many people can attend a course?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              What s the learning experience like?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              Who are the coaches?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              How far in advance should we book?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
          <div className="learnable-faq-section-faqs__faq">
            <a href="#" className="learnable-faq-section-faqs__faq--link">
              Can you customize your courses?
            </a>
            <p className="learnable-faq-section-faqs__faq--icon">&#8248;</p>
          </div>
        </div>
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
      </section>
    );
  }
}

export default Faq;
