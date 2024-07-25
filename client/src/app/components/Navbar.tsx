import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <section className="Navbar">
      <h1 className="primary-heading">SocaiLBoxD</h1>

      <div className="Navbar__nav-links">
        <button className="primary-btn">Login</button>
        <button className="primary-btn">Register</button>
      </div>
    </section>
  );
};

export default Navbar;
