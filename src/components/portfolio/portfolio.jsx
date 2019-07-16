import React, {Component} from "react";

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
            <div className="row">
              <div className="twelve columns collapsed">
                <h1>Projects I have taken part in:</h1>
                {/* portfolio-wrapper */}
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-01" title>
                        <img alt src="images/portfolio/coffee.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Projects SoftUni</h5>
                            <p>Web Development</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> 
                   <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-02" title>
                        <img alt src="images/portfolio/console.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Contract Automation Tool</h5>
                            <p>Desktop Application</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div>
                  {/*<div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-03" title>
                        <img alt src="images/portfolio/judah.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Judah</h5>
                            <p>Webdesign</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> 
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-04" title>
                        <img alt src="images/portfolio/into-the-light.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Into The Light</h5>
                            <p>Photography</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div> 
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-05" title>
                        <img alt src="images/portfolio/farmerboy.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Farmer Boy</h5>
                            <p>Branding</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-06" title>
                        <img alt src="images/portfolio/girl.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Girl</h5>
                            <p>Photography</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-07" title>
                        <img alt src="images/portfolio/origami.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Origami</h5>
                            <p>Illustrration</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="#modal-08" title>
                        <img alt src="images/portfolio/retrocam.jpg" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>Retrocam</h5>
                            <p>Web Development</p>
                          </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                      </a>
                    </div>
                  </div>  */}
                </div> {/* portfolio-wrapper end */}
              </div> {/* twelve columns end */}
              {/* Modal Popup
              --------------------------------------------------------------- */}
              <div id="modal-01" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt />
                <div className="description-box">
                  <h4>SoftUni Projects</h4>
                  <p>A platform for projects.</p>
                  <p>Front-end is developed with React.</p>
                  <span className="categories"><i className="fa fa-tag" />Web Development</span>
                </div>
                <div className="link-box">
                  <a href="https://github.com/AlenPaunov/projects-softuni" target="_blank">Github Repository</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-01 End */}
              <div id="modal-02" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
                <div className="description-box">
                  <h4>Contract Automation Tool</h4>
                  <p>A tool that generates documents from Excel file and Word template.</p>
                  <p>Made with ExpressJS and Electron.</p>
                  <span className="categories"><i className="fa fa-tag" />Desktop Application</span>
                </div>
                <div className="link-box">
                  <a href="https://github.com/TochkaBorislavova/Contract-Automation-Tool-Exe">GitHub Repository</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>{/* modal-02 End */}
              {/* <div id="modal-03" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
                <div className="description-box">
                  <h4>Judah</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding</span>
                </div>
                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              <div id="modal-04" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt />
                <div className="description-box">
                  <h4>Into the Light</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Photography</span>
                </div>
                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              <div id="modal-05" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt />
                <div className="description-box">
                  <h4>Farmer Boy</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
                </div>
                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              <div id="modal-06" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
                <div className="description-box">
                  <h4>Girl</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Photography</span>
                </div>
                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              <div id="modal-07" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
                <div className="description-box">
                  <h4>Origami</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
                </div>
                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
              <div id="modal-08" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
                <div className="description-box">
                  <h4>Retrocam</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
                </div>
                <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
                </div>
              </div> */}
            </div> {/* row End */}
          </section>
        );
    }
}