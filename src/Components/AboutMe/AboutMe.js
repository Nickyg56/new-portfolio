import React from 'react';
import Nick from '../../Images/Nick.jpg';
import './AboutMe.css';


function AboutMe() {



  return (
    <div className='about-me-container'>
      <div className='image-container'>
        <img src={Nick} alt='Nick' className='nick-image' />
        <p>"Web development is fascinating to me because to the untrained eye it’s like magic.
                        You can make anything happen if you’re willing to put in the time and energy."</p>
      </div>
      <section className='about-me-description'>
        <h2>About me</h2>
        <article>
          I started my working life working in food service and screen-printing. Working in
          screen-printing allowed me to develop a strong attention to detail, a need to be organized,
          and an ability to solve problems in creative ways. It also gave me an appreciation for good design.
          While my experience in food service made me humble and instilled a solid work ethic that I carry
          with me into each project I’m a part of. My hope is to work in a way that makes people’s lives easier.
          There are so many tools and apps that can be made that could benefit everyone and that idea is very
          motivating for me.
          When I’m not coding you can find me playing the drums in a band with some of my best friends.
          I’ve been passionate about the drums for the greater portion of my life and spend a lot of
          my free time practicing. I look forward to talking about coding and music with you!
        </article>
      </section>
    </div>
  )
}

export default AboutMe;