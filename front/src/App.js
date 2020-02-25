import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Header from './Header'
import Accueil from './components/Accueil';
import Contact from './components/Contact';
import About from './components/About';
import Compte from './components/Compte'
import Footer from './Footer/Footer';
import './App.css';



function App() {
  return (
    <Router>
    <div className="App">

      <Header />
      
                    <Switch>

                      <Route exact path="/">
                        < Accueil />
                      </Route>

                    
                      <Route path="/contact">
                        <Contact />
                      </Route>

                      <Route path="/About">
                        <About />
                      </Route>

                      <Route path="/compte">
                        <Compte />
                      </Route>

                    </Switch>
      
        <Footer/>

    </div>
  </Router>
  );
}



export default App;
