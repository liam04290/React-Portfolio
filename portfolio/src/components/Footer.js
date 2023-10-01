import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="linkedin.com/in/liamrobertson4u" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="github.com/liam04290" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
