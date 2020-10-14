import React, { Component } from "react";

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
            <p>Click link to download...</p>
            <a className="section-learnable-coming-soon-two__link" href="#">
              Learnable ‘20 Brochure
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
