import React, { Component } from 'react';
import "../../css/layout.css";
class BlogPost extends Component {
  render() {
    const subDefense = [
      {
        'subtitle':"History of AI in Cyber Security", 
        'body': "Sub Words go here"
      },{
        'subtitle':"Actual Approaches", 
        'body': "Sub Words go here"
      }
    ]
    var subDefenseSection = subDefense.map(function(data){
      return (
      <div key={data.subtitle}>
        <h3>{data.subtitle}</h3>
        <p >{data.body} </p>
      </div>)
    });
    var sourcesData = [
      {
        "source":"Abbas, N. N., Ahmed, T., Shah, S. H., Omar, M., & Park, H. W. (2019). Investigating the applications of artificial intelligence in cyber security. Scientometrics, 121(2), 1189-1211. doi:10.1007/s11192-019-03222-9"
      },
      {
        "source":"Chen, C., Quan, W., Cheng, N., Yu, S., Lee, J., Perez, G. M., . . . Shieh, S. (2020). IEEE Access Special Section Editorial: Artificial Intelligence in Cybersecurity. IEEE Access, 8, 163329-163333. doi:10.1109/access.2020.3021604"
      },
      {
        "source":"Hwang, S. O., Kwon, T., Yau, W., & Nyang, D. (2019). Special Issue on Cyber Security and AI. ETRI Journal, 41(5), 557-559. doi:10.4218/etr2.12236"
      },
      {
        "source":"Kaloudi, N., & Li, J. (2020). The AI-Based Cyber Threat Landscape. ACM Computing Surveys, 53(1), 1-34. doi:10.1145/3372823"
      },
      {
        "source":"Samtani, S., Kantarcioglu, M., & Chen, H. (2020). Trailblazing the Artificial Intelligence for Cybersecurity Discipline. ACM Transactions on Management Information Systems, 11(4), 1-19. doi:10.1145/3430360"
      },
      {
        "source":"Sarker, I. H., Furhad, M. H., & Nowrozy, R. (2021). AI-Driven Cybersecurity: An Overview, Security Intelligence Modeling and Research Directions. SN Computer Science, 2(3). doi:10.1007/s42979-021-00557-0"
      },
      {
        "source":"Stevens, T. (2020). Knowledge in the grey zone: AI and cybersecurity. Digital War, 1(1-3), 164-170. doi:10.1057/s42984-020-00007-w"
      },
      {
        "source":"Taddeo, M., Mccutcheon, T., & Floridi, L. (2019). Trusting artificial intelligence in cybersecurity is a double-edged sword. Nature Machine Intelligence, 1(12), 557-560. doi:10.1038/s42256-019-0109-1"
      },
      {
        "source":"Zeadally, S., Adi, E., Baig, Z., & Khan, I. A. (2020). Harnessing Artificial Intelligence Capabilities to Improve Cybersecurity. IEEE Access, 8, 23817-23837. doi:10.1109/access.2020.2968045"
      }
    ]
    var subSourcesSection = sourcesData.map(function(data){
      return (
        <div key={data.source} className="sourcesDiv">
          <p className="sources">{data.source} </p>
        </div>
      )
    });
    const sectionData = [
      {
        "title": "Intro",
        "words" : "Words Go here", 
      }, {
        "title": "What is Artificial intelligence?",
        "words" : "Words Go here", 
      }, {
        "title": "Artificial intelligence as a defense.",
        "words" : subDefenseSection, 
      }, {
        "title": "The power of AI as a Weapon?",
        "words" : "Words Go here", 
      }, {
        "title": "Misguided Trust in AI?",
        "words" : "Words Go here", 
      }, {
        "title": "Further Reading",
        "words" : "Words Go here", 
      }, {
        "title": "Sources",
        "words" : subSourcesSection,
      }, 
    ]
    
    var subSections = sectionData.map(function(data){
      return (
        <div key={data.title} className="row subSection">
          <div className="three columns header-col">
              <h1><span>{data.title}</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {data.words}
                </div>
              </div>
          </div>
        </div>
      )
    });

    return (
      <section id="Blog">
        {subSections}
      </section>
    );
  }
}

export default BlogPost;
