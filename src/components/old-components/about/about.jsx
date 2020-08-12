import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              My name is <strong>Bilyana Borislavova</strong> and I am studying <strong>Software Engineering</strong> at <strong>Software University</strong>. <br />
                  I am currently working as a <strong>Resource Designer</strong> at <strong>SoftUni</strong> where I have had the opportunity to become part of the incredible <strong>Training Management Team</strong>. <br />
                  Ever since I got accepted at the <strong>SoftUni Trainee Program</strong>, I have been given various tasks such as <strong>creating materials</strong> and <strong>workshops</strong> for different <strong>programming courses</strong> that have developed my <strong>creative skills</strong>.
                  Along with that, I have had the chance to work both on <strong>individual</strong> and <strong>team projects</strong> which have helped me <strong>enhance</strong> my <strong>communication</strong> and <strong>coding skills</strong>.  <br />

            </p>
          </div>
          <div className="nine columns main-col">
            <h2>Contact Me</h2>
            <p>
              E-mail: <strong>happy.bozanko@gmail.com</strong> <br />
                  Phone: <strong>0882514092</strong>
            </p>
          </div>
        </div>
      </section>
    )
  }
}