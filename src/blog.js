import React, { useEffect, useState } from 'react';
import Navbars from './navbar';
import Centertext from './center_text';
import { Container } from 'react-bootstrap';
import './blog.css';
import { Carousel } from "react-bootstrap";
import blog_content from './a1blog_content.js';

const Blog = () => {
    const [blogdata, setBlogData] = useState([]);

    useEffect(() => {
        setBlogData(blog_content);
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <>
            <Navbars />
            <Centertext />
            <Carousel className='cur' interval={null}>
                {blogdata.map((d, index) => (
                    
                    
                    <Carousel.Item  key={index}>
                   
                        <div className="text-center">
                            <h1>{d.heading}</h1>
                            <p>{d.content}</p>
                        </div>
                      
                    </Carousel.Item>
                    
                ))}
            </Carousel>
        </>
    );
}

export default Blog;
