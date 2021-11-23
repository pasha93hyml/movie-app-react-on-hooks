import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import NavBar from "../NavBar/NavBar";
import {MainPage, SearchPage, GenrePage, SingleMoviePage} from '../pages'
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <NavBar />
        </ErrorBoundary>
        <Switch>
          <Route exact path="/"><MainPage/></Route>

          <Route exact path={"/search/:query"}><SearchPage/></Route>
          <Route exact path={"/genre/:genreID"}><GenrePage/></Route>
          <Route exact path={"/movie/:movieID"}><SingleMoviePage/></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
