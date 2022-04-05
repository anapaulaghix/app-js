import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
      <link to="./">Home</link>  
      <link to="./Contact">Quem Somos</link>
      <link to="./Company">Dúvidas Frequentes</link>
      </div>

      <Routes>
      <Route exact path="">
        <Home />
      </Route>
      <Route exact path="/Company">
        <Company />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
