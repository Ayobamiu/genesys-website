import React, { Component } from "react";
import footer from "../images/landing/footer.png";

class Footer extends Component {
  state = {};
  render() { 
    return (
      <div className="footer">
        <div className="footer-flex-section">
          <div className="footer-flex-section-one">
            <a
              className="footer-flex-section-one__link footer-flex-section__link"
              href="#"
            >
              {" "}
              Build Software
            </a>
            <a
              className="footer-flex-section-one__link footer-flex-section__link"
              href="#"
            >
              Design Different
            </a>
            <a
              className="footer-flex-section-one__link footer-flex-section__link"
              href="#"
            >
              Apply Your Knowledge
            </a>
            <a
              className="footer-flex-section-one__link footer-flex-section__link"
              href="#"
            >
              FAQ
            </a>
          </div>
          <div className="footer-flex-section-two">
            <p className="footer-flex-section-two--paragraph footer-flex-section__paragraph">
              Our Local Campus center: Kilometer 7, Enugu/Port Harcourt,
              Expressway, Centenary City, Enugu. Nigeria
            </p>
            <a className="footer-flex-section__link" href="#">
              Get in touch
            </a>
          </div>
          <div className="footer-flex-section-three">
            <img
              src={footer}
              alt=""
              className="footer-flex-section-three__image"
            />

            <div className="footer-flex-section-three-text">
              <p className="footer-flex-section__paragraph">
                Learnable is proud to be a collaborative effort of all the arms
                of our product team
              </p>
              <a className="footer-flex-section__link" href="#">
                Head to DevStudio
              </a>
            </div>
          </div>
        </div>
        <div className="footer-links-section">
          <i className="fab fa-twitter fa-2x footer-links-section__link"></i>
          <i className="fab fa-facebook fa-2x footer-links-section__link"></i>
          <i className="fab fa-linkedin fa-2x footer-links-section__link"></i>
          <i className="fab fa-instagram fa-2x footer-links-section__link"></i>
          <i className="fab fa-youtube fa-2x footer-links-section__link"></i>
          <i className="fab fa-vimeo fa-2x footer-links-section__link"></i>
        </div>
        <div className="footer-copyrights-section">
          <p className="footer-copyrights-section-one">&copy; Genesys 2020 </p>{" "}
          <p className="footer-copyrights-section-two">Privacy Statement</p>
        </div>
      </div>
    );
  }
}

export default Footer;
