// import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";


function App() {
  // const [searchName, setSearchName] = useState("IBM");

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home  />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
