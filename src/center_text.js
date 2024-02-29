import { useState,useEffect } from "react";
import './center_text.css';

const Centertext=()=>{
const [showH1, setShowH1] = useState(true);

useEffect(() => {
  // Hide the h1 element after 5 seconds
  const timeout = setTimeout(() => {
    setShowH1(false);
  }, 2000);

  // Clear the timeout if the component unmounts
  return () => clearTimeout(timeout);
}, []);


    return(
        <>
{(showH1 && (<container>
    <h1 className="typewriter frontpageh1">WELCOME TO BLOG '-'</h1>
    </container>))}
    </>
    )}

export default Centertext; 