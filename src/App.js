import React from 'react';
import Home from "./Home/Home";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
