import React, { Component } from 'react';
import "../css/layout.css";
class Resume extends Component {
  render() {
    const educationData = [
      {
        "school":"University of Boulder, Colorado",
        "degree":"Masters in Computer Science and Engineering Management",
        "graduated":"In Progress",
        "description":"Pursuing a Masters in Computer Science with emphasis in Intelligent Systems."
      },
      {
        "school":"Rockhurst University, Kanas City, MO.",
        "degree":"Bachelors of Science in Computer Science and Applied Mathematics",
        "graduated":"May 2020",
        "description":"Graduated from Rockhurst and UMKC's Dual degree program which allowed me to attend classes at both schools. "
      }
      
    ];
    var education = educationData.map(function(education){
      return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p></div>
    });
    const workData =[
      {
        "company":"C & A Holding Companies Inc, Littleton, CO",
        "title":"Software Developer",
        "years":"June 2020 – Present",
        "description":"Developed web-based monitoring Dashboards and applications for in house use. Helped build and manage an E-commerce site. Diagnosed and solved IT related issues in the office."
      },
      {
        "company":"Cerner. Kanas City, MO.",
        "title":"Software Intern",
        "years":"June 2019 – August 2019",
        "description": "Developed web-based applications alongside a full-time development team. Worked on a React-Redux Web Application. Worked on an internal Hack Day Project using Raspberry Pi's set up in an ad-hoc network using OpenCV to count open parking spots."
      },
      {
        "company":"Cerner. Kanas City, MO.",
        "title":"Software Intern",
        "years":"May 2018 – August 2018",
        "description":"Developed web-based applications alongside a full-time development team. Worked on a Ruby on Rails Application. Developed a Tableau Dashboard to monitor Jobs that my teams app processed."
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
        "name":"ReactJs",
        "level":"90%"
      },
      {
        "name":"Python",
        "level":"90%"
      },
      {
        "name":"CSS",
        "level":"85%"
      },
      {
        "name":"HTML5",
        "level":"90%"
      },
      {
        "name":"SQL",
        "level":"78%"
      },
      {
        "name":"C++",
        "level":"72%"
      },
      {
        "name":"Java",
        "level":"40%"
      },
      {
        "name":"Ruby",
        "level":"30%"
      }

    ];
    var skills = skillsData.map(function(skills){
      var className = 'bar-expand '+skills.name.toLowerCase();
      return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
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

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
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
