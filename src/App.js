import React from "react";
import "./App.css";
import HomePage from "./components/homepage";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => {
  return <h1>HATS PAGE</h1>;
};
const JacketsPage = () => {
  return <h1>JACKET PAGE</h1>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route exact path="/jackets" component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
