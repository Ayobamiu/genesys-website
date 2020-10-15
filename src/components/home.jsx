import React, { Component } from "react";
import pic_1 from "../images/learnable/pic_1.png";
import pic_2 from "../images/learnable/pic_2.png";
import pic_3 from "../images/learnable/pic_3.png";
import pic_4 from "../images/learnable/pic_4.png";
import pic_5 from "../images/learnable/pic_5.png";
import rec_2_1 from "../images/learnable/rec_2_1.png";
import rec_2_2 from "../images/learnable/rec_2_2.png";
import rec_2_3 from "../images/learnable/rec_2_3.png";
import rec_2_4 from "../images/learnable/rec_2_4.png";
import rec_2_5 from "../images/learnable/rec_2_5.png";
import rec_2_6 from "../images/learnable/rec_2_6.png";
import journal_2 from "../images/journal/pic_2.png";
import journal_3 from "../images/journal/pic_3.png";
import journal_4 from "../images/journal/pic_4.png";
import journal_5 from "../images/journal/pic_5.png";
import mention_1 from "../images/journal/mention_1.png";
import mention_2 from "../images/journal/mention_2.png";
import mention_3 from "../images/journal/mention_3.png";
import mention_4 from "../images/journal/mention_4.png";
import mention_5 from "../images/journal/mention_5.png";
import arrow_down from "../images/learnable/arrow-down.png";
import arrow_up from "../images/landing/arrow_up.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="learnable-home">
        <section className="section-learnable-coming-soon">
          <div className="section-learnable-coming-soon-one">
            <h1 className="section-learnable-coming-soon-one__heading">
              Coming soon: Learnable ‘20
            </h1>
            <p className="section-learnable-coming-soon-one__paragraph">
              We've started taking in applications for the next batch of
              learnable interns. Applications are on till the 21st of Febuary
            </p>
          </div>
          <div className="section-learnable-coming-soon-two">
            <p className="section-learnable-coming-soon-one__paragraph">
              Click link to download...
            </p>
            <a className="section-learnable-coming-soon-two__link" href="#">
              Learnable ‘20 Brochure
            </a>
          </div>
        </section>
        <section className="learnable-home-section-everything-is-learnable-one">
          <div className="learnable-home-section-everything-is-learnable-one--text">
            <div className="learnable-home-section-everything-is-learnable-one--text-big">
              Everything is Learnable
            </div>

            <p className="learnable-home-section-everything-is-learnable-one--text-small">
              Learnable is the perfect product development internship program
              brought to you by Genesys.
            </p>
          </div>
          <div className="learnable-home-section-everything-is-learnable-one--media">
            <div className="learnable-home-section-everything-is-learnable-one--media__arrow_down">
              <img src={arrow_down} alt="" />
            </div>
            <div className="learnable-home-section-everything-is-learnable-one--media__big_pic">
              <img src={pic_1} alt="" />
              <div className="learnable-home-section-everything-is-learnable-one--media__big_pic-video-control">
                <i className="fa fa-play"></i>
                <small>Discover the Learnable Experience</small>
              </div>
            </div>
            <div className="learnable-home-section-everything-is-learnable-one--media__green-circle">
              <a
                className="learnable-home-section-everything-is-learnable-one--media__green-circle__link"
                href="#"
              >
                Development &#8250;
              </a>
              <p className="learnable-home-section-everything-is-learnable-one--media__green-circle__para">
                What to expect
              </p>
            </div>
            <div className="learnable-home-section-everything-is-learnable-one--media__blue-circle">
              <a
                className="learnable-home-section-everything-is-learnable-one--media__blue-circle__link"
                href="#"
              >
                Product Design &#8250;
              </a>
              <p className="learnable-home-section-everything-is-learnable-one--media__blue-circle__para">
                What to expect
              </p>
            </div>
          </div>
          <div className="learnable-home-section-everything-is-learnable-one__metrics">
            <div className="learnable-home-section-everything-is-learnable-one__metric">
              <h1 className="learnable-home-section-everything-is-learnable-one__metric--head">
                305
              </h1>
              <p className="learnable-home-section-everything-is-learnable-one__metric--para">
                Young Software Developers Trained
              </p>
            </div>
            <div className="learnable-home-section-everything-is-learnable-one__metric">
              <h1 className="learnable-home-section-everything-is-learnable-one__metric--head">
                2100
              </h1>
              <p className="learnable-home-section-everything-is-learnable-one__metric--para">
                Tech Enthusiasts
              </p>
            </div>
            <div className="learnable-home-section-everything-is-learnable-one__metric">
              <h1 className="learnable-home-section-everything-is-learnable-one__metric--head">
                8
              </h1>
              <p className="learnable-home-section-everything-is-learnable-one__metric--para">
                StartUps Incubated
              </p>
            </div>
            <div className="learnable-home-section-everything-is-learnable-one__metric">
              <h1 className="learnable-home-section-everything-is-learnable-one__metric--head">
                250
              </h1>
              <p className="learnable-home-section-everything-is-learnable-one__metric--para">
                Small Businesses supported
              </p>
            </div>
          </div>
        </section>
        <section className="learnable-home-section-we-make-people-great">
          <div className="learnable-home-section-we-make-people-great--text">
            <h1 className="learnable-home-section-we-make-people-great--text--head">
              We Make People Great
            </h1>
            <p className="learnable-home-section-we-make-people-great--text--para">
              As part of our calculated efforts to contribute to the emerging
              knowledge and skills driven economy of Nigeria, Learnable is a
              6-month product development training program with an emphasis on
              software programming and product design. It is for outstanding
              young individuals who are passionate about building a career in
              the software industry.{" "}
            </p>
            <p className="learnable-home-section-we-make-people-great--text--para">
              We primarily educate and groom software developers and designers,
              preparing them for the industry.
            </p>
          </div>
          <div className="learnable-home-section-we-make-people-great--media">
            <img
              className="learnable-home-section-we-make-people-great--media--image"
              src={pic_2}
              alt=""
            />
          </div>
        </section>
        <section className="learnable-home-section-unusual-experience">
          <div className="learnable-home-section-unusual-experience--media">
            <img src={pic_3} alt="" width="100%" />
          </div>
          <div className="learnable-home-section-unusual-experience--text">
            <h1>An Unusual Learning Experience</h1>
            <p>
              At Genesys, we believe in the learning processes as much as we
              believe in the results. By applying a combination of active and
              social learning methodologies, we create an environment that
              involves the learner in the learning process while providing
              avenues for collaboration and peer to peer mentorship.
            </p>
            <p>
              Our methods over the years have helped us discover ways to take
              education out of the classroom. We introduce our interns to
              learning by experimentation and problem solving. To us, every task
              is an opportunity to learn.
            </p>
            <a href="#">See team</a>
          </div>
        </section>
        <section className="learnable-home-section-build-software">
          <div className="learnable-home-section-build-software__text">
            <small className="learnable-home-section-build-software__text--small">
              For Developers
            </small>
            <h1 className="learnable-home-section-build-software__text--big">
              Learn to Build Software the Right Way
            </h1>
            <p className="learnable-home-section-build-software__text--para">
              We love to build stuff. Really awesome stuff. That s why we have
              developed a learning program that will empower you to create
              amazing software the right way.
            </p>
            <p className="learnable-home-section-build-software__text--para">
              We believe in learning through experimentation. Our aim is to
              nurture and grow bright young minds from the get go because that s
              how our industry will thrive.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div className="learnable-home-section-build-software__boxes">
            <div className="learnable-home-section-build-software__box learnable-home-section-build-software__box-blue">
              <h1 className="learnable-home-section-build-software__box--text">
                Program with JavaScript
              </h1>
            </div>
            <div className="learnable-home-section-build-software__box learnable-home-section-build-software__box-green">
              <h1 className="learnable-home-section-build-software__box--text">
                Version Control with Git
              </h1>
            </div>
            <div className="learnable-home-section-build-software__box learnable-home-section-build-software__box-yellow">
              <h1 className="learnable-home-section-build-software__box--text">
                Web Development with React
              </h1>
            </div>
            <div className="learnable-home-section-build-software__box learnable-home-section-build-software__box-brown">
              <h1 className="learnable-home-section-build-software__box--text">
                Building APIs with NodeJS
              </h1>
            </div>
            <div className="learnable-home-section-build-software__box learnable-home-section-build-software__box-black">
              <h1 className="learnable-home-section-build-software__box--text">
                Managing Data with MongoDB
              </h1>
            </div>
            <div className="learnable-home-section-build-software__box learnable-home-section-build-software__box-orange">
              <h1 className="learnable-home-section-build-software__box--text">
                Deploying with Heroku
              </h1>
            </div>
          </div>
        </section>
        <section className="learnable-home-section-design-different">
          <div className="learnable-home-section-design-different__boxes">
            <div className="learnable-home-section-design-different__box learnable-home-section-design-different__box-blue">
              <h1 className="learnable-home-section-design-different__box--text">
                Design User Interfaces
              </h1>
            </div>
            <div className="learnable-home-section-design-different__box learnable-home-section-design-different__box-orange">
              <h1 className="learnable-home-section-design-different__box--text">
                Craft User Experiences
              </h1>
            </div>
            <div className="learnable-home-section-design-different__box learnable-home-section-design-different__box-yellow">
              <h1 className="learnable-home-section-design-different__box--text">
                Apply Design Thinking
              </h1>
            </div>
            <div className="learnable-home-section-design-different__box learnable-home-section-design-different__box-black">
              <h1 className="learnable-home-section-design-different__box--text">
                Build Information Architecture
              </h1>
            </div>
            <div className="learnable-home-section-design-different__box learnable-home-section-design-different__box-brown">
              <h1 className="learnable-home-section-design-different__box--text">
                Copy write for Projects
              </h1>
            </div>
            <div className="learnable-home-section-design-different__box learnable-home-section-design-different__box-green">
              <h1 className="learnable-home-section-design-different__box--text">
                Brand Products
              </h1>
            </div>
          </div>
          <div className="learnable-home-section-design-different__text">
            <small className="learnable-home-section-design-different__text--small">
              For Designers
            </small>
            <h1 className="learnable-home-section-design-different__text--big">
              Design Different
            </h1>
            <p className="learnable-home-section-design-different__text--para">
              We love to make things work perfectly. That s why our design
              learning path exposes you to the science of user oriented design.
            </p>
            <p className="learnable-home-section-design-different__text--para">
              Design is at the heart of everything we do at Genesys. Right from
              the start of the program, you ll get your hands dirty as you get
              practically involved in the world s most modern design concepts.
              At Genesys, we re building designers who put the users first.
            </p>
            <a href="#">Learn more</a>
          </div>
        </section>

        <section className="learnable-home-section-who-is-eligible">
          <div className="learnable-home-section-who-is-eligible--text">
            <h1>Who is Eligible?</h1>
            <p>
              To be a participant of lernable, you need to be a young and
              passionate person interested in launching a super tech career. You
              will need to have foundational knowledge in whatever learning path
              you are applying for and be available for the six month duration
              of the program.
            </p>
            <p>
              To become a part of the Genesys family, you must express some of
              the qualities we consider important. You are someone that takes
              responsibilities and initiatives. You will also express the
              ability to produce quality stuff in good time with high
              consistency.{" "}
            </p>
          </div>
          <div className="learnable-home-section-who-is-eligible--media">
            <img src={pic_4} alt="" width="100%" />
          </div>
        </section>

        <section className="learnable-home-section-our-culture">
          <div className="learnable-home-section-our-culture--media">
            <img src={pic_3} alt="" width="100%" />
          </div>
          <div className="learnable-home-section-our-culture--text">
            <h1>Our culture</h1>
            <p>
              Our culture are the unspoken things that make us who we are at
              Genesys. To become one of us, you need to be like the rest of us.
              We believe that excellence is a culture, and we are committed to a
              philosophy of consistent improvement in everything we do. We are
              passionate, candid and we trust in the power of collaboration.
            </p>
          </div>
        </section>

        <section className="learnable-home-section-learning-can-be-fun">
          <div className="learnable-home-section-learning-can-be-fun--text">
            <h1>Learning can be fun…</h1>
            <p>
              We believe learning should be a fun experience. For this reason,
              we don t do all the learning in the classroom.
            </p>
            <p>
              The Learnable experience can not be complete without the bag of
              fun times which you ll have. To us, every task is an opportunity
              to have some fun. But we do well to throw in a good number of
              activities to add to this. You will find yourself partaking in a
              lot of healthy activities such as cooking, sports, music,
              hangouts, and even random dates.
            </p>
            <p>Trust us when we say we know how to have fun.</p>
          </div>

          <div className="learnable-home-section-learning-can-be-fun__boxes">
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-one"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-two"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-three"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-four"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-five"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-six"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-seven"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-eight"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-nine"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-ten"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-eleven"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-twelve"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-thirteen"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-fourteen"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-fiften"></div>
            <div className="learnable-home-section-learning-can-be-fun__box learnable-home-section-learning-can-be-fun__box-sixteen"></div>
          </div>
        </section>
        <section className="learnable-home-section-learn-from-experts">
          <div className="learnable-home-section-learn-from-experts--media">
            <div className="learnable-home-section-learn-from-experts--media--profile">
              <div className="learnable-home-section-learn-from-experts--media--profile__image">
                <img
                  src={rec_2_1}
                  alt=""
                  className="learnable-home-section-learn-from-experts--media--profile__image--img"
                />
              </div>
              <div className="learnable-home-section-learn-from-experts--media--profile__text">
                <h1 className="learnable-home-section-learn-from-experts--media--profile__text--head">
                  Nnamdi
                </h1>
                <p className="learnable-home-section-learn-from-experts--media--profile__text--para">
                  Managing Director
                </p>
              </div>
            </div>
            <div className="learnable-home-section-learn-from-experts--media--profile">
              <div className="learnable-home-section-learn-from-experts--media--profile__image">
                <img
                  src={rec_2_2}
                  alt=""
                  className="learnable-home-section-learn-from-experts--media--profile__image--img"
                />
              </div>
              <div className="learnable-home-section-learn-from-experts--media--profile__text">
                <h1 className="learnable-home-section-learn-from-experts--media--profile__text--head">
                  Ositadinma
                </h1>
                <p className="learnable-home-section-learn-from-experts--media--profile__text--para">
                  Learnable Coordinator
                </p>
              </div>
            </div>
            <div className="learnable-home-section-learn-from-experts--media--profile">
              <div className="learnable-home-section-learn-from-experts--media--profile__image">
                <img
                  src={rec_2_3}
                  alt=""
                  className="learnable-home-section-learn-from-experts--media--profile__image--img"
                />
              </div>
              <div className="learnable-home-section-learn-from-experts--media--profile__text">
                <h1 className="learnable-home-section-learn-from-experts--media--profile__text--head">
                  Idowu
                </h1>
                <p className="learnable-home-section-learn-from-experts--media--profile__text--para">
                  Scrum Proffessional
                </p>
              </div>
            </div>
            <div className="learnable-home-section-learn-from-experts--media--profile">
              <div className="learnable-home-section-learn-from-experts--media--profile__image">
                <img
                  src={rec_2_4}
                  alt=""
                  className="learnable-home-section-learn-from-experts--media--profile__image--img"
                />
              </div>
              <div className="learnable-home-section-learn-from-experts--media--profile__text">
                <h1 className="learnable-home-section-learn-from-experts--media--profile__text--head">
                  Ezra
                </h1>
                <p className="learnable-home-section-learn-from-experts--media--profile__text--para">
                  Ass. Learnable Coordinator
                </p>
              </div>
            </div>
            <div className="learnable-home-section-learn-from-experts--media--profile">
              <div className="learnable-home-section-learn-from-experts--media--profile__image">
                <img
                  src={rec_2_5}
                  alt=""
                  className="learnable-home-section-learn-from-experts--media--profile__image--img"
                />
              </div>
              <div className="learnable-home-section-learn-from-experts--media--profile__text">
                <h1 className="learnable-home-section-learn-from-experts--media--profile__text--head">
                  David
                </h1>
                <p className="learnable-home-section-learn-from-experts--media--profile__text--para">
                  Design Lead
                </p>
              </div>
            </div>
            <div className="learnable-home-section-learn-from-experts--media--profile">
              <div className="learnable-home-section-learn-from-experts--media--profile__image">
                <img
                  src={rec_2_6}
                  alt=""
                  className="learnable-home-section-learn-from-experts--media--profile__image--img"
                />
              </div>
              <div className="learnable-home-section-learn-from-experts--media--profile__text">
                <h1 className="learnable-home-section-learn-from-experts--media--profile__text--head">
                  Emmanuel
                </h1>
                <p className="learnable-home-section-learn-from-experts--media--profile__text--para">
                  Software Lead
                </p>
              </div>
            </div>
          </div>
          <div className="learnable-home-section-learn-from-experts--text">
            <h1 className="learnable-home-section-learn-from-experts--text--head">
              Learn from the Experts
            </h1>
            <p className="learnable-home-section-learn-from-experts--text--para">
              As a learnable intern, you will be learning from the best software
              developers and product designers our industry has to offer. You
              will spend the first 3 months in the classroom with industry
              experts who have a wealth of experience from developing amazing
              products for various customers in our industry.
            </p>
          </div>
        </section>
        <section className="learnable-home-section-learning-outside-class">
          <div className="learnable-home-section-learning-outside-class--text">
            <h1>Learning doesn t always have to be in the classroom</h1>
            <p>
              We have designed other learning activities that aren t classroom
              based. You will learn how to be a better person, how to have good
              conversations, how to work better with people and most
              importantly, how to lead other people. Hey! We ll even teach you
              how to run a business during the Learnable Business Sessions.
            </p>
          </div>

          <div className="learnable-home-section-learning-outside-class__boxes">
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-one"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-two"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-three"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-four"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-five"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-six"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-seven"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-eight"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-nine"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-ten"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-eleven"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-twelve"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-thirteen"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-fourteen"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-fiften"></div>
            <div className="learnable-home-section-learning-outside-class__box learnable-home-section-learning-outside-class__box-sixteen"></div>
          </div>
        </section>

        <section className="learnable-home-section-apply-your-knowledge">
          <div className="learnable-home-section-apply-your-knowledge--media">
            <img src={pic_5} alt="" width="100%" />
          </div>
          <div className="learnable-home-section-apply-your-knowledge--text">
            <h1>Apply Your Knowledge</h1>
            <p>
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
            <a href="#"> get started</a>
          </div>
        </section>

        <section className="learnable-home-section-faqs">
          <h1 className="learnable-home-section-faqs--head">FAQ</h1>

          <div className="learnable-home-section-faqs__faqs">
            <div className="learnable-home-section-faqs__faq">
              <a href="#" className="learnable-home-section-faqs__faq--link">
                How many people can attend a course?
              </a>
              <p className="learnable-home-section-faqs__faq--icon">&#8248;</p>
            </div>
            <div className="learnable-home-section-faqs__faq">
              <a href="#" className="learnable-home-section-faqs__faq--link">
                What s the learning experience like?
              </a>
              <p className="learnable-home-section-faqs__faq--icon">&#8248;</p>
            </div>
            <div className="learnable-home-section-faqs__faq">
              <a href="#" className="learnable-home-section-faqs__faq--link">
                Who are the coaches?
              </a>
              <p className="learnable-home-section-faqs__faq--icon">&#8248;</p>
            </div>
            <div className="learnable-home-section-faqs__faq">
              <a href="#" className="learnable-home-section-faqs__faq--link">
                How far in advance should we book?
              </a>
              <p className="learnable-home-section-faqs__faq--icon">&#8248;</p>
            </div>
            <div className="learnable-home-section-faqs__faq">
              <a href="#" className="learnable-home-section-faqs__faq--link">
                Can you customize your courses?
              </a>
              <p className="learnable-home-section-faqs__faq--icon">&#8248;</p>
            </div>
            <a href="#" className="learnable-home-section-faqs__faq--see-all">
              SEE ALL
            </a>
          </div>
        </section>

        <section className="learnable-home-section-journal">
          <h1 className="learnable-home-section-journal--head">Journal</h1>
          <a href="#" className="learnable-home-section-journal--see--all">
            view all
          </a>
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
        </section>

        <section className="learnable-home-section-mentioned-in">
          <p className="learnable-home-section-mentioned-in--text">
            Mentioned in
          </p>
          <img
            className="learnable-home-section-mentioned-in--image"
            src={mention_1}
            alt=""
          />
          <img
            className="learnable-home-section-mentioned-in--image"
            src={mention_2}
            alt=""
          />
          <img
            className="learnable-home-section-mentioned-in--image"
            src={mention_3}
            alt=""
          />
          <img
            className="learnable-home-section-mentioned-in--image"
            src={mention_4}
            alt=""
          />
          <img
            className="learnable-home-section-mentioned-in--image"
            src={mention_5}
            alt=""
          />
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

export default Home;
