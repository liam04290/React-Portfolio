import React from 'react';

function Resume() {
    const proficiencies = [
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'Node',
        'Express',
        'MongoDB',
        'MySQL',
        'Sequelize',
        'Mongoose',
        'GraphQL',
        'Apollo',
        'jQuery',
    ];

    return (
        <section className="resume">
            <h2>Proficiencies</h2>
            <ul>
                {proficiencies.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
        </section>
    );
}

export default Resume;
