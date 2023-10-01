import React from 'react';
import Project from './Project';

function Portfolio() {
    const projects = [
        { 
            title: 'Project 1',
            skills: 'Skill 1, Skill 2',
            imageSrc: 'image.jpg', 
            deployedLink: '', 
            repoLink: ''
        },
        { 
            title: 'Project 2',
            skills: 'Skill 3, Skill 4',
            imageSrc: 'image.jpg', 
            deployedLink: '', 
            repoLink: ''
        },
        { 
            title: 'Project 3',
            skills: 'Skill 5, Skill 6',
            imageSrc: 'image.jpg', 
            deployedLink: '', 
            repoLink: ''
        },
        { 
            title: 'Project 4',
            skills: 'Skill 7, Skill 8',
            imageSrc: 'image.jpg', 
            deployedLink: '', 
            repoLink: ''
        },
    ];

    return (
        <section className="portfolio">
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
}

export default Portfolio;
