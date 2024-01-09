import React, { Component } from 'react';
import "../css/layout.css";
class Resume extends Component {
  render() {
    const educationData = [
      {
        "school":"University of Boulder, Colorado",
        "degree":"Masters in Computer Science and Engineering Management",
        "graduated":"December 2023",
        "gpa":" 3.95/4.0",
        "description":"Graduated with a Masters in Computer Science with my emphasis in Intelligent Systems. My relevant coursework: Machine Learning, Natural Language Processing, Neural Networks, High Performance Super Computing, Cyber Security, Data Mining, and Project Management."
      },
      {
        "school":"Rockhurst University, Kansas City, MO.",
        "degree":"Bachelors of Science in Computer Science and Applied Mathematics",
        "graduated":"May 2020",
        "gpa":" 3.74/4.0",
        "description":"Graduated Magna Cum Laude from Rockhurst and UMKC's Dual degree program which allowed me to attend classes at both schools. "
      }
    ];
    var education = educationData.map(function(education){
      return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p className='gpa'>GPA: {education.gpa}</p>
      <p>{education.description}</p>
      </div>
    });
    const workData =[
      {
        "company":"COMCAST CORPORATION, Denver, CO",
        "title":"Dev Ops Engineer III",
        "years":"April 2022 – Present",
        "description":"Led and maintained ownership of an internal React JavaScript tool for the DevOps team, undertaking a comprehensive rewrite to upgrade the language version. \nDeveloped a Python-based backend for data collection from production sites, feeding interactive data visualizations on the React frontend and generating daily reports. \nDesigned a sophisticated backend system that parses formulas from Excel spreadsheets into executable Python code, ensuring sequential execution and dynamically reconstructing the original Excel document.	\nTransitioned application deployments from bare metal servers to a Kubernetes-based setup, utilizing Docker, Helm charts, and Terraform."
      },
      {
        "company":"LOCKHEED MARTIN, Littleton, CO",
        "title":"Master’s Capstone Project",
        "years":"August 2022 – May 2023",
        "description":"Transformed raw textual data into clean, structured formats optimal for Natural Language Processing algorithms and storage. \nLeveraged pretrained models from HuggingFace and fine-tuned them using the deep learning framework PyTorch. \nLeveraged GPUs for accelerated training while analyzing multiple transformer model architectures."
      },
      {
        "company":"BLUE CROSS BLUE SHIELD OF ALABAMA, Birmingham, AL",
        "title":"Java Developer",
        "years":"July 2021 – April 2022",
        "description":"Developed enhancements and corrected defects on legacy JavaServer Page applications in a Jboss development environment. \nImplemented new user experience stories on React JavaScript applications using Type Script. \nUtilized Liferay to embed applications and manage web content. \nCollaborated with product owners to ensure new UI elements matched their vision."
      },
      {
        "company":"C & A Holding Companies Inc. Littleton, CO",
        "title":"Software Developer Intern",
        "years":"June 2020 – July 2021",
        "description":"Delivered a custom monitoring dashboard digesting data via API calls to multiple databases. Designed and developed a custom visualization tool via an embedded Tableau map in a React Web Application.  Communicated with marketing director and payment processor to build an E-commerce site in Square Space with injected custom JavaScript code."
      },
      {
        "company":"Cerner. Kansas City, MO.",
        "title":"Software Intern",
        "years":"May 2018 – August 2019",
        "description": "Developed feature improvements and corrected defects to React Java Script Applications in a team-based environment.  Wrote documentation for custom UI components in Storybook. Utilized GitHub for version control and Jira for project estimation and scheduling.  Engaged in code reviews to help ensure robust and well tested code was delivered."
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
        "description":"62%",
        "weight": "5"
      },
      {
        "name":"Python",
        "description":"90%",
        "weight": "9"
      },
      {
        "name":"Java",
        "description":"20%",
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
        "weight": "1"
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
        "name":"Django Rest Framwork",
        "description":"60%",
        "weight": "2"
      },
      {
        "name":"Machine Learning",
        "description":"30%",
        "weight": "5"
      },
      {
        "name":"PyTorch",
        "description":"33%",
        "weight": "6"
      },
      {
        "name":"MySQL",
        "description":"30%",
        "weight": "5"
      },
      {
        "name":"Apache Hadoop",
        "description":"10%",
        "weight": "3"
      },
      {
        "name":"Natural Language Processing Algorithms",
        "description":"30%",
        "weight": "3"
      },
      {
        "name":"CLI",
        "description":"30%",
        "weight": "7"
      },{
        "name":"Docker",
        "description":"37%",
        "weight": "3"
      },{
        "name":"Terraform",
        "description":"20%",
        "weight": "2"
      },{
        "name":"MPI",
        "description":"20%",
        "weight": "2"
      },{
        "name":"Kubernetes",
        "description":"20%",
        "weight": "5"
      }
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
