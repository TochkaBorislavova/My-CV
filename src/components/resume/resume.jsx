import React, {Component} from "react";

export default class Resume extends Component {
    render() {
        return(
            <section id="resume">
            {/* Education
          ----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Software University</h3>
                    <p className="info">Software Engineering <span>•</span> <em className="date">2017 - Present</em></p>
                    <div className="diplomas-field">
                      <i class="fa fa-crown"><h5>Diplomas:</h5></i>
                      <ul>
                        <li>
                          <a href="https://softuni.bg/certificates/details/66733/b14e4f2f" target="_blank">JavaScript Web Developer</a>
                          <img src="https://i.ibb.co/WfrFV2k/diploma.png" alt=""/>
                        </li>
                      </ul>
                    </div>
                    <div className="completed-courses-field">
                    <h5>Completed courses:</h5>
                    <ul>
                      <li><a href="https://softuni.bg/certificates/details/22885/dc86dea0" target="_blank">Programming Basics with C#</a></li>
                      <li><a href="https://softuni.bg/certificates/details/58725/093002af" target="_blank">Programming Fundamentals with C#</a></li>
                      <li><a href="https://softuni.bg/certificates/details/54176/206829b0" target="_blank">Software Technologies</a></li>
                      <li><a href="https://softuni.bg/certificates/details/55114/aec6bcc0" target="_blank">JavaScript Fundamentals</a></li>
                      <li><a href="https://softuni.bg/certificates/details/56201/c46a84b8" target="_blank">JavaScript Advanced</a></li>
                      <li><a href="https://softuni.bg/certificates/details/57325/1bd036de" target="_blank">JavaScript Applications</a></li>
                      <li><a href="https://softuni.bg/certificates/details/58157/48e2c206" target="_blank">C# Advanced</a></li>
                      <li><a href="https://softuni.bg/certificates/details/59826/4c61927b" target="_blank">C# OOP Basics</a></li>
                      <li><a href="https://softuni.bg/certificates/details/61311/9a4efda1" target="_blank">C# OOP Advanced</a></li>
                      <li><a href="https://softuni.bg/certificates/details/62964/d0c12b7b" target="_blank">ExpressJS Fundamentals</a></li>
                      <li><a href="https://softuni.bg/certificates/details/66542/2630aaf4" target="_blank">ReactJS Fundamentals</a></li>
                      <li><a href="https://softuni.bg/certificates/details/65867/a76d284a" target="_blank">Angular Fundamentals</a></li>
                      <li><a href="https://softuni.bg/certificates/details/68415/a30bfd9a" target="_blank">HTML &amp; CSS</a></li>
                    </ul>
                    </div>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
          ----------------------------------------------- */}
            <div className="row work">
              <div className="three columns header-col">
                <h1><span>Work</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Software University Trainee</h3>
                    <p className="info">Resource Designer <span>•</span> <em className="date">2019 - Present</em></p>
                    <p></p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
          ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Skills</span></h1>
              </div>
              <div className="nine columns main-col">
                <p></p>
                <div className="bars">
                  <ul className="skills">
                    <li><span className="bar-expand photoshop" /><em>JavaScript</em></li>
                    <li><span className="bar-expand illustrator" /><em>React</em></li>
                    <li><span className="bar-expand wordpress" /><em>Angular</em></li>
                    <li><span className="bar-expand illustrator" /><em>Express</em></li>
                    <li><span className="bar-expand html5" /><em>HTML5</em></li>
                    <li><span className="bar-expand css" /><em>Css</em></li>
                    <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                    <li><span className="bar-expand css" /><em>C#</em></li>  
                  </ul>
                </div>
              </div> 
            </div> 
          </section> 
        );
    }
}