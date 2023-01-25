import React from "react";
import Home from './pages/Home'
import About from "./pages/Aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;