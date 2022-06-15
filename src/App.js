// import React, { useEffect } from "react";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { useState } from "react";

function App() {
  
  const [searchName, setSearchName] = useState("IBM");
 
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home searchName={searchName} setSearchName= {setSearchName} />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;



