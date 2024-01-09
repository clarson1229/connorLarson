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

            <p>Hello, I'm Connor Larson, a versatile Software Engineer based out of Denver, Colorado. With the recent completion of my master’s degree, I aim to transition my career into the field of machine learning. I started my tech career in full-stack development, creating user-centric front ends with React JS and building robust backends with Python. Along the way, I’ve honed my skills in containerizing applications, deploying them into virtual environments using tools like Docker and Kubernetes.</p>

            <p>I am currently in the job market for a machine learning role, with the hope apply the new advanced knowledge I gained my dual master’s degree in computer science and engineering management with emphasis in Intelligent Systems. This master’s degree builds on my bachelor’s in computer science and applied mathematics from Rockhurst University. My journey in software engineering has led me to explore the realm of machine learning, utilizing innovative tools like PyTorch and HuggingFace. My experiences extend beyond the classroom specifically during my two-semester capstone project. During this project I worked an internship for Lockheed Martin working with their developers to apply machine learning techniques to a real-world problem. I see the true potential for the power of artificial intelligence and want to use that power to help design and build systems that bring good to the world.</p> 
            
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
