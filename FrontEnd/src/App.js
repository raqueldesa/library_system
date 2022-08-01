import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Books from "./pages/Books";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
