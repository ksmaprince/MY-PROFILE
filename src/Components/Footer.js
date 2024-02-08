import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by KHUN</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ksmaprince/" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/khunsma/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:khunsoemoeaung.henry@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/petiaung50/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer