import './portfolio.scss';

import React from "react";
import PortfolioItem from "./portfolio-item";

const portfolioProjects = [
  {
    name: 'SoftUni Interactive',
    type: 'Web Development',
    image: 'images/portfolio/coffee.jpg',
    alt: 'SoftUni Interavticce',
  },
  {
    name: 'SoftUni Interactive',
    type: 'Web Development',
    image: 'images/portfolio/coffee.jpg',
    alt: 'SoftUni Interavticce',
  }
]

const Portfolio = () => (
  <section id="portfolio" className="portfolio-section-wrapper">
    {
      portfolioProjects.map(project => (
        <PortfolioItem
          key={project.name}
          {...project}
        />
      ))
    }
  </section>
);

export default Portfolio;
