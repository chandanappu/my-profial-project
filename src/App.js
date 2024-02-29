import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Frontpage from './frontpage';
import Navbars from "./navbar";
import Blog from "./blog";
import Contacts from "./contact";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      
     <div className="App">
     <Routes > 
     <Route path="/" element={<Frontpage/>}></Route>
     <Route path="/Home" element={<Home/>}></Route>
     <Route path='/Blog' element={<Blog/>}></Route>
     <Route path='/Contact' element={<Contacts/>}></Route>

</Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
