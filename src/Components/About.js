import React, { Component } from 'react';
import "../css/layout.css";
import profile from "../images/profile.jpg";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
   var bio = "Hello, I'm Connor Larson a Software Engineer based in Boulder Colorado. I enjoy anything problem solving related and learning new things. I am most experienced in React JS web development and backend Python development.  I am persuing a Masters Degree in Computer Science with emphasis in Intelligent Systems and Engineering Management. I currently have a Bachelors of Science from Rockhurst University in Computer Science and Applied Mathematics.";
   const data = useStaticQuery(graphql`
      {
         file(
         sourceInstanceName: { eq: "images" }
         relativePath: { eq: "profile.jpg" }
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

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Connor Larson </span><br />
						   <span><br />
						         Boulder, Colorado.
                   </span><br />
						   <span></span>
                     <span></span>
					   </p>
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
