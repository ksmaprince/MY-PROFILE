import React from 'react';
import ProjectBox from './ProjectBox';
import MMCalendarImage from '../images/MMCalendarApp.png'
import ENGMMDictionaryImage from '../images/ENGMMDictionaryApp.png'
import MMENGDictionaryImage from '../images/MMENGDictionaryApp.png'
import DhammaImage from '../images/DhammaApp.png'
import MMThetponeImage from '../images/MMThetponeApp.png'
import MyHealthImage from '../images/MyHealthApp.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Publications</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={MMCalendarImage} projectName="MMCalendar"/>
        <ProjectBox projectPhoto={MMENGDictionaryImage} projectName="MMENGDictionary" />
        <ProjectBox projectPhoto={MMThetponeImage} projectName="MMThetpone" />
        <ProjectBox projectPhoto={ENGMMDictionaryImage} projectName="ENGMMDictionary" />
        <ProjectBox projectPhoto={MyHealthImage} projectName="MyHealth" />
        <ProjectBox projectPhoto={DhammaImage} projectName="Dhamma"/>
      </div>

      <h1 className='projectHeading'>My <b>Recent Works</b></h1>
      <div className='project'>
      <h3> <b>Library Management System</b> Maharishi International University (2023)</h3><br/>
      A desktop application that can manage the daily functions of a library. I was a team leader in this project. I prepared the project documents and developed desktop UI screens. Utilized Java, Swing, IntelliJ.
      <br/><br/>
      <h3><b>Case Management System</b> Maharishi International University (2023)</h3><br/>
      A web application for the lawyer. Working with a team, I was a backend developer in this project, developing the backend webservice APIs. Utilized HTML, CSS, JavaScript, Express, NodeJS, Prisma.
      <br/><br/>
      <h3><b>Product Management System</b> Maharishi International University (2023)</h3><br/>
      A CRUD Web application project to manage product stock. Working with a team. I was a front-end developer and developed web page screens for some features. Utilized React, Express, NodeJS, JavaScript.
      <br/><br/>
      <h3><b>Restaurant Management System</b> Maharishi International University (2023)</h3><br/>
      A hybrid mobile application project using React Native Technology. It can be installed on Android and iOS mobile devices. I was a team leader and worked both front-end and back-end. In front-end I developed mobile screens user interface (UI) using React Native framework, Figma for UI/UX. I also developed the backend web service API for the project using NodeJS, MongoDB and Firebase. Utilized React Native, Express, NodeJS, MongoDB, Firebase. 

      </div>

      <h1 className='projectHeading'>My Academic <b>Projects</b></h1>
      <div className='project'>
      <h3> <b>Library Management System</b> Maharishi International University (2023)</h3><br/>
      A desktop application that can manage the daily functions of a library. I was a team leader in this project. I prepared the project documents and developed desktop UI screens. Utilized Java, Swing, IntelliJ.
      <br/><br/>
      <h3><b>Case Management System</b> Maharishi International University (2023)</h3><br/>
      A web application for the lawyer. Working with a team, I was a backend developer in this project, developing the backend webservice APIs. Utilized HTML, CSS, JavaScript, Express, NodeJS, Prisma.
      <br/><br/>
      <h3><b>Product Management System</b> Maharishi International University (2023)</h3><br/>
      A CRUD Web application project to manage product stock. Working with a team. I was a front-end developer and developed web page screens for some features. Utilized React, Express, NodeJS, JavaScript.
      <br/><br/>
      <h3><b>Restaurant Management System</b> Maharishi International University (2023)</h3><br/>
      A hybrid mobile application project using React Native Technology. It can be installed on Android and iOS mobile devices. I was a team leader and worked both front-end and back-end. In front-end I developed mobile screens user interface (UI) using React Native framework, Figma for UI/UX. I also developed the backend web service API for the project using NodeJS, MongoDB and Firebase. Utilized React Native, Express, NodeJS, MongoDB, Firebase. 

      </div>

    </div>
  )
}

export default Projects