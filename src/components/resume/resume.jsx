import React from "react";
import ResumeEducation from "./resume-education";
import ResumeWork from "./resume-work";
import ResumeSkills from "./resume-skills";

const Resume = () => (
  <section id="resume">
    <ResumeEducation />
    <ResumeWork />
    <ResumeSkills />
  </section>
);

export default Resume;
