import React, { useState } from 'react';

function Project({ title, skills, imageSrc, deployedLink, repoLink }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`project-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={imageSrc} alt={title} />
            <h3>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h3>
            <p>{skills}</p>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <img src="github_logo.png" alt="GitHub" className="github-logo" />
            </a>
        </div>
    );
}

export default Project;
