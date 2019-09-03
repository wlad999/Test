import React from "react";
import "./App.css";
import PostsContainer from "./pages/Posts/PostsContainer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { Route } from "react-router-dom";
import SelectPost from "./pages/Posts/SelectPost.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <Route exact path="/" render={() => <PostsContainer />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/selectpost" render={() => <SelectPost />} />
    </div>
  );
}

export default App;
