import React from "react";
import Navbar from "../Navbar";

const ServerNavbar = ({ navLinksData }) => {
  return (
    <>
      <nav
        aria-hidden="true"
        style={{ display: "none", visibility: "hidden" }}
        className="seo-nav hidden lg:flex items-center text-sm font-medium space-x-6 md:space-x-8 lg:space-x-10 uppercase"
      >
        {navLinksData &&
          navLinksData?.map(({ title, url, id }) => (
            <a key={id} href={url} className="seo-nav-link">
              {title}
            </a>
          ))}
      </nav>

      <Navbar navLinks={navLinksData} />
    </>
  );
};

export default ServerNavbar;
