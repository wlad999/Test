import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Posts from "./pages/Posts/Posts";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" render={() => <Posts />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/about" render={() => <About />} />
    </div>
  );
}

export default App;
