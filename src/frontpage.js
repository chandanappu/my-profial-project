import React from "react";
import "./Frontpage.css";
import { Link, Outlet } from "react-router-dom";
const Frontpage=()=>{
    return (
        <>
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="../frontpage_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        <container>
         <h1 class="typewriter frontpageh1"> C-CODE SPACE!!</h1>

         <div className="content">
         <Link to='/home'>
  <button type="button" className="frontpage_btn">
    <span className="star">M</span>
    <span className="star">O</span>
    <span className="star">V</span>
    <span className="star">E</span>
    <span className="star"> </span>
    
   
    
    <span className="star"> </span>
    <span className="star">T</span>
    <span className="star">O</span>
    

    <span className="star">S</span>
    <span className="star">P</span>
    <span className="star">A</span>
    <span className="star">C</span>
    <span className="star">E</span>
  </button>
  </Link>
</div>

       </container>
       <Outlet/>
        </>
      );
    
}

export  default Frontpage;