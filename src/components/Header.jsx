import React from "react";

const Header = () => {
  return (
    <>
      <section className="container w-100">
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
