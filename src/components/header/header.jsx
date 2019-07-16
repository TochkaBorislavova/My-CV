import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
        <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Bilyana Borislavova</h1>
            <h3>I am a highly-motivated and ambitious person who is always keen on obtaining new skills and enhancing already existing ones. 
                I am also constantly eager to accept various challenges for both self-growth and career development in order to keep improving myself every day.
                Considering that I am passionate about travelling, my goal is to become a full-stack software developer with flexible working hours so that I can travel the world and produce quality software at the same time.
            </h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/bilqna.borislavova.9" target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://github.com/TochkaBorislavova" target="_blank"><i class="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/bilyana-borislavova-1ab688168/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/toch.borislavova/" target="_blank"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
  }
}
