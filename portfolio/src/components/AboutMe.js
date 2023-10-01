import React from 'react';
import avatar from '../assets/avatar.png';

function AboutMe() {
  return (
    <section className="about-me">
      <img src={avatar} alt="avatar" className="folio-avatar" />
      <p>
        Hello!! I'm Liam Robertson, a passionate and enthusiastic full-stack JavaScript developer. I'm studying Computer Science at the University of North Carolina at Greensboro and finishing up a coding bootcamp with the University of Minnesota. I'm a quick learner, and I love to learn new things. I'm always looking for new opportunities to grow and expand my knowledge. I'm currently looking for a full-time position as a software developer.
      </p>
    </section>
  );
}

export default AboutMe;