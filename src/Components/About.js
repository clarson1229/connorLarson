import React, { Component } from 'react';
import "../css/layout.css";
import profile from "../images/profile.png";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
   
   const data = useStaticQuery(graphql`
      {
         file(
         sourceInstanceName: { eq: "images" }
         relativePath: { eq: "profile.png" }
         ) {
         childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
               ...GatsbyImageSharpFluid
            }
         }
         }
      }
   `);
   return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <Img
               fluid={data.file.childImageSharp.fluid}
               alt="profile"
               className="profile-pic"
               />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Hello, I'm Connor Larson, a versatile Software Engineer based out of Denver, Colorado. I started my tech career in full-stack development, creating user-centric front ends with React JS and building robust backends with Python. Along the way, I’ve honed my skills in containerizing applications, deploying them into virtual environments using tools like Docker and Kubernetes. With starting my masters degree, I've been exploring the field of machine learning with the aim of transitioning my career focus.</p>

            <p>I’m currently working through my Master’s Degree in Computer Science, with a focus on Intelligent Systems and Engineering Management, building on my Bachelor's in Computer Science and Applied Mathematics from Rockhurst University. My journey in software engineering has led me to explore the realm of machine learning, utilizing innovative tools like PyTorch and HuggingFace. My experiences extend beyond the classroom specifically during my two semester capstone project. During this project I worked an internship for Lockheed martin working with their developers to apply machine learning techniques to a real world problem. I expect to graduate December 2023 in which after I plan to enter the machine learning industry. I see the true potential for the power of artificial intelligence and want use that power to help design and build systems that bring good to the world.</p> 
            
            <p>Outside of the tech world, I’m an avid outdoorsman who finds solace in nature. Whether it be hunting, fishing, or just a long hike, I believe in balancing my technological pursuits with my love for the woods. I’m also a music enthusiast where I enjoy the amazing music scene in Denver.  </p>
            <div className="row">
               <div className="columns contact-details">
                  {/* <h2>Contact Details</h2>
                  <p className="address">
						   <span>Connor Larson </span><br />
						   <span><br />
						         Boulder, Colorado.
                   </span><br />
						   <span></span>
                     <span></span>
					   </p> */}
               </div>
               <div className="columns download">
                  <p>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
}


export default About;
