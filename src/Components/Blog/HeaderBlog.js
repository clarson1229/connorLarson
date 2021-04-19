import React, { Component } from 'react';
import "../../css/layout.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

class Header2 extends Component {
   constructor(props) {
      super(props);
      this.state = {
        bgColor: "#2B2B2B",
      };
    }
   
   
   render() {

    return (
      <div id="BlogHeader">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="/#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav" style={{ backgroundColor: this.state.bgColor }}>
               <li><a className="smoothscroll" href="/">Home</a></li>
               <li><a className="smoothscroll" href="/#about">About</a></li>
               <li><a className="smoothscroll" href="/#resume">Resume</a></li>
               {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>
         </nav>

         

      </div>
    );
  }
}

export default Header2;
