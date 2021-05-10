import React, { Component } from 'react';
import "../css/layout.css";
class Resume extends Component {
  render() {
    const educationData = [
      {
        "school":"University of Boulder, Colorado",
        "degree":"Masters in Computer Science and Engineering Management",
        "graduated":"In Progress",
        "description":"Pursuing a Masters in Computer Science with emphasis in Intelligent Systems. Current GPA: 3.82 / 4.0. Relevant coursework thus far: Machine Learning, Natural Language Processing, Cyber Security, and Project Management."
      },
      {
        "school":"Rockhurst University, Kansas City, MO.",
        "degree":"Bachelors of Science in Computer Science and Applied Mathematics",
        "graduated":"May 2020",
        "description":"Graduated Magna Cum Laude with a 3.74 GPA from Rockhurst and UMKC's Dual degree program which allowed me to attend classes at both schools. "
      }
    ];
    var education = educationData.map(function(education){
      return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p></div>
    });
    const workData =[
      {
        "company":"C & A Holding Companies Inc. Littleton, CO",
        "title":"Software Developer",
        "years":"June 2020 – Present",
        "description":"Delivered a custom monitoring dashboard digesting data via API calls to multiple databases. Designed and developed a custom visualization tool via an embedded Tableau map in a React Web Application. Communicated with marketing director and payment processor to build an E-commerce site in Square Space with injected custom JavaScript code."
      },
      {
        "company":"Cerner. Kansas City, MO.",
        "title":"Software Intern",
        "years":"May 2018 – August 2019",
        "description": "Developed feature improvements and corrected defects to React Java Script Applications in a team-based environment. Wrote documentation for custom UI components in Storybook. Utilized GitHub for version control and Jira for project estimation and scheduling. Engaged in code reviews to help ensure robust and well tested code was delivered."
      },
      {
        "company":"Mic King Music and Events. Kansas City, MO. ",
        "title":"Disc Jockey/ Master of Ceremonies",
        "years":"Novmember 2016 – September 2019",
        "description":"Produced an excellent client experience by catering to needs of both clients and guests and strict adherence to set schedule. Managed three to four clients a month through organization and interpersonal skills."
      }
    ];
    var work = workData.map(function(work){
      return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
      </div>
    });
    const skillsData=[
      {
        "name":"React.Js",
        "description":"90%",
        "weight": "9"
      },
      {
        "name":"Redux",
        "description":"90%",
        "weight": "4"
        
      },
      {
        "name":"HTML5/CSS",
        "description":"85%",
        "weight": "7"
      },
      {
        "name":"SQL",
        "description":"78%",
        "weight": "4"
      },
      {
        "name":"C++",
        "description":"72%",
        "weight": "5"
      },
      {
        "name":"Python",
        "description":"90%",
        "weight": "9"
      },
      {
        "name":"Java",
        "description":"40%",
        "weight": "4"
      },
      {
        "name":"R and Rstudio",
        "description":"30%",
        "weight": "6"
      },
      {
        "name":"Ruby",
        "description":"30%",
        "weight": "2"
      },
      {
        "name":"Visual Studio",
        "description":"30%",
        "weight": "7"
      },
      {
        "name":"Tableau",
        "description":"30%",
        "weight": "4"
      },
      {
        "name":"MicroSoft Office",
        "description":"30%",
        "weight": "8"
      }, 
      {
        "name":"Git and Github",
        "description":"30%",
        "weight": "9"
      },
      {
        "name":"macOS",
        "description":"30%",
        "weight": "7"
      },
      {
        "name":"Linux",
        "description":"30%",
        "weight": "2"
      },
      {
        "name":"Windows",
        "description":"30%",
        "weight": "9"
      },
      {
        "name":"Machine Learning",
        "description":"30%",
        "weight": "5"
      },
      {
        "name":"MySQL",
        "description":"30%",
        "weight": "5"
      },
      {
        "name":"Apache Hadoop",
        "description":"30%",
        "weight": "3"
      },
      {
        "name":"Natural Language Processing",
        "description":"30%",
        "weight": "3"
      },
      {
        "name":"CLI",
        "description":"30%",
        "weight": "7"
      },
      
      

    ];
    var skills = skillsData.map(function(skills){
      var className = 'invdSkill '+skills.name.toLowerCase();
      return <li key={skills.name} className={className} ><span data-weight={skills.weight} >{skills.name} </span> </li>
    });
    const skillmessage = "Some of my Skils just to name a few."

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p><h3>{skillmessage}</h3></p>
            <div className="skillsSection">
              <ul className="bubble">
                {skills}
              </ul>
            </div>
          </div>
        </div>
    </section>
    );
  }
}

export default Resume;
