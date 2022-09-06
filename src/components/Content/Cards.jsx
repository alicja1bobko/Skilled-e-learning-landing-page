/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonRunning,
  faImage,
  faCamera,
  faSackDollar,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  return (
    <>
      <div className="cards-wrapper">
        <div className="container cards">
          {/* card 1 */}
          <div class="card border-0 card--links" id="first-card">
            <div class="card-body">
              <h5 class="card-title">Check out our most popular courses!</h5>
            </div>
          </div>

          {/* card 2 */}
          <div class="card border-0 card--links">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Animation</h5>
              <p class="card-text">
                Learn the latest animation techniques to create stunning motion
                design and captivate your audience.
              </p>
              <a href="#" class="card-link">
                Get started
              </a>
              <span style={{ fontSize: 18 }}>
                <FontAwesomeIcon icon={faPersonRunning} />
              </span>
            </div>
          </div>

          {/* card 3 */}
          <div class="card border-0 card--links">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Design</h5>
              <p class="card-text">
                Create beautiful, usable interfaces to help shape the future of
                how the web works.
              </p>
              <a href="#" class="card-link">
                Get started
              </a>
              <span>
                <FontAwesomeIcon icon={faImage} />
              </span>
            </div>
          </div>

          {/* card 4 */}
          <div class="card border-0 card--links">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Photography</h5>
              <p class="card-text">
                Explore critical fundamentals like lighting, composition, and
                focus to capture exceptional photos.
              </p>
              <a href="#" class="card-link">
                Get started
              </a>
              <span>
                <FontAwesomeIcon icon={faCamera} />
              </span>
            </div>
          </div>

          {/* card 5 */}
          <div class="card border-0 card--links">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Crypto</h5>
              <p class="card-text">
                All you need to know to get started investing in crypto. Go from
                beginner to advanced with this 54 hour course.
              </p>
              <a href="#" class="card-link">
                Get started
              </a>
              <span>
                <FontAwesomeIcon icon={faSackDollar} />
              </span>
            </div>
          </div>

          {/* card 6 */}
          <div class="card border-0 card--links">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">Business</h5>
              <p class="card-text">
                A step-by-step playbook to help you start, scale, and sustain
                your business without outside investment.
              </p>
              <a href="#" class="card-link">
                Get started
              </a>
              <span>
                <FontAwesomeIcon icon={faSuitcase} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
