import React, { Component } from 'react';
import "../css/layout.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

class Footer extends Component {
  render() {
    const social=[
      {
        "name":"facebook",
        "url":"https://www.facebook.com/connor.larson1",
        "className":"fab fa-facebook"
      },
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/connor-larson-284bbb13b/",
        "className":"fab fa-linkedin"
      },
      {
        "name":"instagram",
        "url":"http://instagram.com/clarson1229",
        "className":"fab fa-instagram"
      },
      {
        "name":"github",
        "url":"http://github.com/clarson1229",
        "className":"fab fa-github"
      }
    ];
   var networks= social.map(function(network){
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      });
    

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 Connor Larson </li>
              
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="fas fa-arrow-up"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
