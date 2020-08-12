import React, { Component } from "react";
import SocialMediaLinks from "../social-media/social-media-links";
import Link from "../links/link";

const Footer = () => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <SocialMediaLinks className="social-links" />
        <ul className="copyright">
          <li>© Copyright 2014 CeeVee</li>
          <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
        </ul>
      </div>
      <div id="go-top">
        <Link
          className="smoothscroll"
          href="#home"
          title="Back to Top"
        >
          <i className="icon-up-open" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
