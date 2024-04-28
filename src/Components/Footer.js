import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by KHUN</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ksmaprince/" ><FaGithub/></a>
        <a href="https://www.linkedin.com/in/khunsma/" ><FaLinkedin/></a>
        <a href='mailTo:khunaung.dev@gmail.com' ><GrMail/></a>
        <a href="https://leetcode.com/petiaung50/" ><SiLeetcode/></a>
        <a href="https://medium.com/@khunsoemoeaung" ><FaMedium/></a>
      </div>
    </footer>
  )
}

export default Footer