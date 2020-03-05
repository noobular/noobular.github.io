import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
//import "../node_modules/jquery/dist/jquery.min.js";
//import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

//Page Imports
import Highlights from './pages/Highlights';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';

//Components
import Navbar from './components/universal/Navbar';
import Jumbotron from './components/universal/Jumbotron';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/colors.scss';
import './style/jumbotron.scss';
import './style/navbar.scss';
import './style/button.scss';
import './style/card.scss';
import './style/bs4.scss';
import './style/utility.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Jumbotron/>
        <Navbar/>
        <Route path="/" exact strict component={Highlights}/>
        <Route path="/highlights" exact strict component={Highlights}/>
        <Route path="/projects" exact strict component={Projects}/>
        <Route path="/experiences" exact strict component={Experiences}/>
      </div>
  </Router>
  );
}

export default App;
