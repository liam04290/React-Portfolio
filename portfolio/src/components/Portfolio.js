import React from 'react';
import Project from './Project';
import Wimg from '../assets/Weather.png';
import Simg from '../assets/WDS.png';
import NAimg from '../assets/Note.png'
import Eimg from '../assets/EDB.png';

function Portfolio() {
    const projects = [
        { 
            title: 'Weather Dashboard',
            skills: 'Server-Side APIs',
            imageSrc: {Wimg}, 
            deployedLink: 'https://liam04290.github.io/Weather-App/', 
            repoLink: 'https://github.com/liam04290/Weather-App'
        },
        { 
            title: 'Work Day Scheduler',
            skills: '3rd Party APIs, Local Storage',
            imageSrc: {Simg}, 
            deployedLink: 'https://liam04290.github.io/Work-Day-Scheduler/', 
            repoLink: 'https://github.com/liam04290/Work-Day-Scheduler'
        },
        { 
            title: 'Notes App',
            skills: 'Express.js, Node.js',
            imageSrc: {NAimg}, 
            deployedLink: 'https://mighty-meadow-68985-6ddd65db757c.herokuapp.com/', 
            repoLink: 'https://github.com/liam04290/Notes-App'
        },
        { 
            title: 'Employee Databse Management System',
            skills: 'SQL, Node.js',
            imageSrc: {Eimg}, 
            deployedLink: 'https://drive.google.com/file/d/1c39HzBRXkIXc5y9EyRrGICaYQiMOUV8_/view', 
            repoLink: 'https://github.com/liam04290/Employee-Database-Manager'
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
