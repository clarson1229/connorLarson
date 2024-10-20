import React, { Component } from 'react';
import "../css/layout.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

class Header extends Component {
   constructor(props) {
      super(props);
      this.listener = null;
      this.state = {
        status: "clear",
        bgColor: " ",
        homeColor: "#F06000",
        aboutColor: "#fff",
        resumeColor: "#fff",
        url:''
      };
    }
   componentDidMount() {
      this.setState({ url: window.location.href });
      this.listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 800) {
            if (this.state.status !== "colored") {
               this.setState({ status: "colored" });
               this.setState({ bgColor: "#2B2B2B" });
            }
        } else {
            if (this.state.status !== "clear") {
               this.setState({ status: "clear" });
               this.setState({ bgColor: " " });
            }
        }
      });
   }
   componentDidUpdate() {
      document.removeEventListener("scroll", this.listener);
      if (window.location.href != this.state.url){
         this.changeColor();
      }
   }
   changeColor(){
      var url = window.location.href.split('#')
      switch (url[1]) {
         case 'home':
            this.setState({ 
               homeColor: "#F06000",
               aboutColor: "#fff",
               resumeColor: "#fff",
               url: window.location.href
            });
            break;
         case 'about':
            this.setState({ 
               homeColor: "#fff",
               aboutColor: "#F06000",
               resumeColor: "#fff",
               url: window.location.href
            });
            break;
         case 'resume':
            this.setState({ 
               homeColor: "#fff",
               aboutColor: "#fff",
               resumeColor: "#F06000",
               url: window.location.href
            });
            break;
      }
   }
   render() {
      const social=[
         {
           "name":"linkedin",
           "url":"https://www.linkedin.com/in/clarson1229/",
           "className":"fab fa-linkedin",
           "label": "LinkedIn Profile"
         },
         // {
         //   "name":"instagram",
         //   "url":"None Ya business",
         //   "className":"fab fa-instagram"
         // },
         {
           "name":"github",
           "url":"http://github.com/clarson1229",
           "className":"fab fa-github",
           "label": "Github Profile"
         }
       ];
      var networks= social.map(function(network){
         return(
            <li key={network.name}>                  
               <a href={network.url}>
                  {network.label}
                  <i className={network.className} style={{ marginLeft : '5px' }}></i>
               </a>
            </li>
         )
      });

    return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav" style={{ backgroundColor: this.state.bgColor }}>
               <li><a className="smoothscroll" style={{color: this.state.homeColor}} href="#home">Home</a></li>
               <li><a className="smoothscroll" style={{color: this.state.aboutColor}}href="#about">About</a></li>
               <li><a className="smoothscroll" style={{color: this.state.resumeColor}}href="#resume">Resume</a></li>
               {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm Connor Larson.</h1>
               <h3 className="backopacity">I'm a Denver based, Full Stack Software Engineer working to transition into a Machine Learning role. I hold a Dual Master's Degree in Computer Science, with my emphasis in Artificial Intelligence, and Engineering Management as well as a dual Bachelor's degree in Computer Science and Applied Mathematics. Currently I work at Comcast as a Software Developer.</h3>
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
