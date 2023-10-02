import React from 'react';
import ghicon from '../assets/gh-icon.png';
import liicon from '../assets/li-icon.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">

        <a href="https://www.linkedin.com/in/liamrobertson4u" target="_blank" rel="noopener noreferrer">
          <img src={liicon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/liam04290" target="_blank" rel="noopener noreferrer">
          <img src={ghicon} alt="GitHub" />
        </a>

      </div>
    </footer>
  );
}

export default Footer;
