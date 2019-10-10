import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Project(props) {


  return (
    <section className='project'>
      <h3 className='project-header'>{props.title}</h3>
      <p className='project-desc'>{props.description}</p>
      <a href={props.liveLink} className='project-image-link'><img src={props.projectImage} alt={props.imageAlt} className='project-image' /></a>
      <h4 className='tech-list-header'>Technologies:</h4>
      <p className='tech-list'>{props.tech}</p>
      <span className='project-links'>
        <a href={props.liveLink} rel='noopener noreferrer' target='_blank' className='live-app'>Live app</a>
        <a href={props.github} rel='noopener noreferrer' target='_blank'><FontAwesomeIcon className='icon-link-small' color='white' icon={['fab', 'github']} /></a>
      </span>


    </section>
  )
}


export default Project;