import React from 'react';
import './Projects.css';
import Project from '../Project/Project';
import Sprout from '../../Images/Sprout.png';
import SpacedRep from '../../Images/SpacedRep.png';
import BandBridge from '../../Images/BandBridge.png';



class Projects extends React.Component {


  render() {

    const projectSections = projectArr.map((project, i) => {
      return (
        <Project 
          key={i}
          title={project.title} 
          description={project.description}
          tech={project.tech}
          liveLink={project.liveLink}
          github={project.github}
          projectImage={project.projectImage}
          imageAlt={project.imageAlt}
          />
        )
    });

    return (
      <div className='projects-container'>
        <h2 id='projects'>Projects</h2>
        {projectSections}
      </div>
    )
  }
}

export default Projects;

const projectArr = [
  {
    title: 'Sprout',
    description: 'Sprout is a formative assessment tool used to help teachers deliver specific, goal-oriented, and timely feedback in the classroom.',
    tech: 'React, Node, Express, CSS, HTML5, JavaScript, Socket.io, PostgreSQL.',
    liveLink: 'https://sprout-app.now.sh/',
    github: 'https://github.com/thinkful-ei-emu/ZOMGPOW-Client',
    projectImage: Sprout,
    imageAlt: 'Sprout application',
  },
  {
    title: 'BandBridge',
    description: 'BandBridge is an application that connects users who want to play music or start musical projects with others who share their musical interests.',
    tech: 'React, Node, Express, CSS, HTML5, JavaScript, PostgreSQL.',
    liveLink: 'https://band-bridge.ygnick.now.sh/',
    github: 'https://github.com/thinkful-ei-emu/nick-capstone1-client',
    projectImage: BandBridge,
    imageAlt: 'BandBridge application',
  },
  {
    title: 'Spaced Repitition',
    description: 'Spaced repition is an application that uses the concept of spaced repition to help users learn a new language by showing them questions they answered incorrectly more frequently.',
    tech: 'React, Node, Express, CSS, HTML5, JavaScript, PostgreSQL.',
    liveLink: 'https://nickandrewspacedrepetition.ygnick.now.sh/register',
    github: 'https://github.com/thinkful-ei-emu/nick-andrew-spaced-repetition-client',
    projectImage: SpacedRep,
    imageAlt: 'Spaced repition application',
  }
]