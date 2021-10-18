import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Jobs from "./pages/Jobs";
import Skills from "./pages/Skills";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import JS_Skills from "./pages/JS_Skills";
import Fake_Webpages from "./pages/Fake_Webpages";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/education">
        <Education />
      </Route>
      <Route path="/jobs">
        <Jobs />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/hobbies">
        <Hobbies />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/js-skills">
        <JS_Skills />
      </Route>
      <Route path="/fake-webpages">
        <Fake_Webpages />
      </Route>
    </Switch>
  );
};

export default App;
