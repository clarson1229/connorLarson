import React from "react"
import { Link } from "gatsby"
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Resume from '../Components/Resume';
import Contact from '../Components/Contact';
import Testimonials from '../Components/Testimonials';
import Portfolio from '../Components/Portfolio';
import "../css/layout.css";
import "../css/default.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";


const IndexPage = () => {

    return (
        <div className="App">
            <Header />
            <About />
            <Resume />
            <Portfolio />
            <Footer />
        </div>
    );
}
export default IndexPage

// data={this.state.resumeData.main}
// data={this.state.resumeData.main}
// data={this.state.resumeData.resume}
// data={this.state.resumeData.portfolio}
// data={this.state.resumeData.testimonials}
// data={this.state.resumeData.main}
// data={this.state.resumeData.main}
// {/* <About />
//             <Resume />
//             <Portfolio />
//             <Testimonials />
//             <Contact />
//             <Footer />  */}