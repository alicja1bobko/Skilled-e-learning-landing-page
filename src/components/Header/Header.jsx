import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <section className="container header-container">
        <p class="d-flex justify-content-between align-items-center mt-3">
          <span class="me-3 logo">skilled</span>
          <button type="button" className="header-btn">
            Get Started
          </button>
        </p>
      </section>
    </>
  );
};

export default Header;
