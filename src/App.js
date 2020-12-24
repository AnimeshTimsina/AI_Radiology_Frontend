import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"
import AboutPage from './pages/about/about.component'
import ContactPage from './pages/contact/contact.component'
import ResultsPage from './pages/results/results.component'
import Homepage from './pages/homepage/homepage.component'


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/results' component={ResultsPage} />
        </Switch> 
        <Footer />    
    </div>
  );
}

export default App;
