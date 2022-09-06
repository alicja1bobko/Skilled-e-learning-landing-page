import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-auto">
      <div class="container p-4 pb-0">
        <section>
          <p class="d-flex justify-content-between align-items-center">
            <span class="me-3 logo text-white">skilled</span>
            <button type="button" className="footer-btn">
              Get Started
            </button>
          </p>
        </section>
      </div>

      <div className="text-center p-3">
        © 2022 Copyright: &nbsp;
        <a className="text-white" href="https://www.frontendmentor.io/">
          https://www.frontendmentor.io/
        </a>
      </div>
    </footer>
  );
};

export default Footer;
