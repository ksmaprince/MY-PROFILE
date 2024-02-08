import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coderboy.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>KHUN SOE MOE AUNG</b> and I am from Fairfield, Iowa, USA.
            I'm a <b>Software Engineer (Android Developer)</b> and have completed on-campus studies and currently taking distance courses to complete a <b>Master's Degree in Computer Science</b>. <br/><br/>
            I have 5 years of experiences in developing Android Mobile Applications in financial industry.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='Android'/>
        <Skills skill='AndroidStudio'/>
        <Skills skill='Kotlin'/>
        <Skills skill='Java'/>
        <Skills skill='Playstore'/>
        <Skills skill='Compose'/>
        <Skills skill='Firebase'/>
        <Skills skill='IntelliJ'/>
        <Skills skill='MySQL'/>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        <Skills skill='Jira'/>
        
      </div>
    </>
  )
}

export default About