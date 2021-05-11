import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddTodo from "./components/todo/AddTodo";
import EditTodo from "./components/todo/EditTodo";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo/add" component={AddTodo} />
          <Route exact path="/todo/edit/:id" component={EditTodo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
