import React from "react"
import Container from "./Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import FadeInWhenVisible from "./FadeInWhenVisible";

function Footer() {
  return (
    <section className="footer-section">
      <Container>
        <div className="footer-section__footer-container">
        <FadeInWhenVisible>
          <div className="footer-section__footer-container__top">
            <div>
              <h1>
                <span> We make creative </span>
                <br />
                <strong>brands</strong>
                <span> only.</span>
              </h1>
            </div>

            <div>
              <h4>Contact Info</h4>

              <p>
                {/* <i class="fa fa-phone mr-2 footer-icon"></i> */}
                <a href="tel:+99 080 070 4224">
                  <span className="icon">
                    <FontAwesomeIcon icon={icon({ name: "phone" })} />
                  </span>

                  <span> +99 080 070 4224</span>
                </a>
              </p>

              <p>
                <a href="mailto:hello@company.com">
                  <span className="icon">
                    <FontAwesomeIcon icon={icon({ name: "envelope" })} />
                  </span>
                  <span> hello@company.com</span>
                </a>
              </p>
            </div>

            <div>
              <h4>Our Studio</h4>
              <p>
                <span className="icon">
                  <FontAwesomeIcon icon={icon({ name: "home" })} />
                </span>
                <span> Av. Lúcio Costa - Barra da </span>
                <br />
                Tijuca, Rio de Janeiro - RJ,
                <br /> Brazil
              </p>
            </div>
          </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible transitionDelay={0.1}>
          <div className="footer-section__footer-container__bottom">
            <div>
              <p>
                Copyright © 2020 Your Company
                <br />
                <a href="https://templatemo.com">Design: TemplateMo</a>
              </p>
            </div>

            <div>
              <ul>
                <li>
                  <a href="#">Stories</a>
                </li>
                <li>
                  <a href="#">Work with us</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={icon({ name: "envelope" })} />
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={icon({ name: "phone" })} />
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={icon({ name: "home" })} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          </FadeInWhenVisible>
        </div>
      </Container>
    </section>
  )
}

export default Footer
