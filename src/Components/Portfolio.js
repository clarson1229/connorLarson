import React, { Component } from 'react';
import "../css/layout.css";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class Portfolio extends Component {
  render() {
    
    const pageQuery = graphql`
      query {
        imageOne: file(sourceInstanceName: { eq: "images" } relativePath: { eq: "project1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(sourceInstanceName: { eq: "images" } relativePath: { eq: "project2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
      }
    `;
    var projects = [
      {
        "title":"Commererce Banking Site",
        "category":"Final Capstone Project",
        "image":"project1.png",
        "url":"https://github.com/umkc-cs-451-2020-spring/semester-project-group-3"
      },
      {
        "title":"Connor-Larson.com",
        "category":"Personal Resume Website",
        "image":"project2.png",
        "url":"https://connor-larson.com/"
      }
    ];

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Work.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div key={projects[0].title} className="columns portfolio-item">
                <div className="item-wrap">
                  <a href={projects[0].url} title={projects[0].title}>
                    <Img alt={projects[0].title} fluid={pageQuery.query.imageTwo.file.childImageSharp.fluid} />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                      <h5>{projects[0].title}</h5>
                          <p>{projects[0].category}</p>
                        </div>
                      </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>
              <div key={projects[1].title} className="columns portfolio-item">
                <div className="item-wrap">
                  <a href={projects[1].url} title={projects[1].title}>
                    <Img alt={projects[1].title} fluid={pageQuery.query.imageOne.file.childImageSharp.fluid} />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                      <h5>{projects[1].title}</h5>
                          <p>{projects[1].category}</p>
                        </div>
                      </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
