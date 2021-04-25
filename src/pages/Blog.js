import React from "react"
import Header2 from '../Components/Blog/HeaderBlog';
import BlogPost from '../Components/Blog/BlogPost';
import Footer from '../Components/Blog/FooterBlog';

import "../css/layout.css";
import "../css/default.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";


const BlogPage = () => {

    return (
        <div className="c">
            <Header2 />
            <BlogPost />
            <Footer />
        </div>
    );
}
export default BlogPage

