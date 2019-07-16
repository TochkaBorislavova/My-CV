import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/bilqna.borislavova.9" target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://github.com/TochkaBorislavova" target="_blank"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/bilyana-borislavova-1ab688168/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/toch.borislavova/"><i className="fa fa-instagram" /></a></li>
            </ul>
            {/* <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                      <span>Jonathan Doe</span><br />
                      <span>1600 Amphitheatre Parkway<br />
                        Mountain View, CA 94043 US
                      </span><br />
                      <span>(123)456-7890</span><br />
                      <span>anyone@website.com</span>
                    </p>
                  </div>
            </div>  */}
            <ul className="copyright">
              <li>© Copyright 2014 CeeVee</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
        );
    }
}