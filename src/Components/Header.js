import React, { Component } from 'react';
import "../css/layout.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

class Header extends Component {
   
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
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Connor Larson.</h1>
            <h3 className="backopacity">I'm a Rockhurst graduate with a Bachelors of Science in Computer Science and Applied Mathematics. Currently based in Boulder Colorado. I build front end applications and am purusing a Masters Degree in Computer Science and Engineering Management.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

// <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
