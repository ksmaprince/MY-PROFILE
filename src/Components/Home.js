import React from 'react';
import Lottie from  "lottie-react";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Khun from '../images/khun.jpg'
import Mobile from '../LottieFiles/Mobile.json'
import { CgPiano } from "react-icons/cg";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>KHUN AUNG</b></h1>
          <Typed/>   
        </div>

        {/* <Lottie 
          className="illustration" 
          animationData={CoderBoy} 
          loop={true} 
        /> */}
        <img className='avatarBox' src={Khun} alt=""/>
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into an app or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>Kotlin</b> and <b>Java </b> to develop Android mobile apps and I have published some apps the on <a href="https://play.google.com/store/apps/developer?id=K.H+Innovation" target='_blank'>Google Play Store</a>.
            I know a bit of <b>Javascript, Express, React,</b> and <b>React Native</b> and have worked on a few 
            academic projects by using them.<br />
            I plan to learn <b>Machine Learning</b>, <b>Big Data,</b> and<b> AI</b> in the near future. <br /><br />
            Also, I love to play <b>piano </b> <CgPiano style={{scale:"1.5", rotate:"10deg"}}/> in my free time.  
          </p>
        </div>
        <Tilt>
          {/* <img className='Avatar' src={Avatar} alt="" /> */}
          <Lottie 
          className="illustration" 
          animationData={Mobile} 
          loop={true} 
        />
        </Tilt>
      </div>
    </div>
  )
}

export default Home