import "./App.css";
import React, { useState } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const pageSize=6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <div>
    <LoadingBar
      color='#f11946'
      progress={progress}
      height={3}
    />
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/"><News apiKey={apiKey} setProgress={setProgress} key="generalOne" pageSize={pageSize} country= "in" category= "general" /></Route>
        <Route exact path="/general"><News apiKey={apiKey} setProgress={setProgress} key="generalTwo" pageSize={pageSize} country= "in" category= "general" /></Route>
        <Route exact path="/business"><News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country= "in" category= "business" /></Route>
        <Route exact path="/entertainment"><News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country= "in" category= "entertainment" /></Route>
        <Route exact path="/health"><News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country= "in" category= "health" /></Route>
        <Route exact path="/science"><News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country= "in" category= "science" /></Route>
        <Route exact path="/sports"><News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country= "in" category= "sports" /></Route>
        <Route exact path="/technology"><News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country= "in" category= "technology" /></Route>
      </Switch>        
    </Router>  
    </div>
  );
}
export default App;
