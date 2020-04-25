import React from "react";
import SocialMediaLinks from "../social-media/social-media-links";

const Header = () => (
  <header id="home">
    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">Bilyana Borislavova</h1>
        <h3>I am a highly-motivated and ambitious person who is always keen on obtaining new skills and enhancing already existing ones.
        I am also constantly eager to accept various challenges for both self-growth and career development in order to keep improving myself every day.
        Considering that I am passionate about travelling, my goal is to become a full-stack software developer with flexible working hours so that I can travel the world and produce quality software at the same time.
            </h3>
        <hr />
        <SocialMediaLinks className="social" />
      </div>
    </div>
    <p className="scrolldown">
      <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
    </p>
  </header>
);

export default Header;
