import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

//Page Imports
import Highlights from './pages/Highlights';
import ProjectCatalog from './pages/ProjectCatalog';
import Experience from './pages/Experience';

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
        <Route path="/projectcatalog" exact strict component={ProjectCatalog}/>
        <Route path="/experience" exact strict component={Experience}/>
      </div>
  </Router>
  );
}

export default App;
