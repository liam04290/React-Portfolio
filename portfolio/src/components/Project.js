import React, { useState } from 'react';
import ghLogo from '../assets/gh-icon.png';

function Project({ title, skills, imageSrc, deployedLink, repoLink }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`project-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="project-content">
                <img src={imageSrc} alt={title} />
                <h3>
                    <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h3>
                <p>{skills}</p>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    <img src={ghLogo} alt="GitHub" className="github-logo" />
                </a>
            </div>
        </div>
    );
}

export default Project;
