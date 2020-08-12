import React from 'react';
import Link from '../links/link';

const completedCourses = [
    {
        title: 'Programming Basics with C#',
        href: 'https://softuni.bg/certificates/details/22885/dc86dea0',
    },
    {
        title: 'Programming Fundamentals with C#',
        href: 'https://softuni.bg/certificates/details/58725/093002af',
    },
    {
        title: 'Software Technologies',
        href: 'https://softuni.bg/certificates/details/54176/206829b0',
    },
    {
        title: 'JavaScript Fundamentals',
        href: 'https://softuni.bg/certificates/details/55114/aec6bcc0',
    },
    {
        title: 'JavaScript Advanced',
        href: 'https://softuni.bg/certificates/details/56201/c46a84b8',
    },
    {
        title: 'JavaScript Applications',
        href: 'https://softuni.bg/certificates/details/57325/1bd036de',
    },
    {
        title: 'C# Advanced',
        href: 'https://softuni.bg/certificates/details/58157/48e2c206',
    },
    {
        title: 'C# OOP Basics',
        href: 'https://softuni.bg/certificates/details/59826/4c61927b',
    },
    {
        title: 'C# OOP Advanced',
        href: 'https://softuni.bg/certificates/details/61311/9a4efda1',
    },
    {
        title: 'ExpressJS Fundamentals',
        href: 'https://softuni.bg/certificates/details/62964/d0c12b7b',
    },
    {
        title: 'ReactJS Fundamentals',
        href: 'https://softuni.bg/certificates/details/66542/2630aaf4',
    },
    {
        title: 'Angular Fundamentals',
        href: 'https://softuni.bg/certificates/details/65867/a76d284a',
    },
    {
        title: 'HTML &amp; CSS',
        href: 'https://softuni.bg/certificates/details/68415/a30bfd9a',
    },
]

const EducationCourses = () => (
    <div className="completed-courses-field">
        <h5>
            Completed courses:
        </h5>
        <ul>
            {
                completedCourses.map(({ title, href }) => (
                    <li key={title}>
                        <Link
                          href={href}
                          title={title}
                        />
                    </li>
                ))
            }
        </ul>
    </div>
);

export default EducationCourses;
