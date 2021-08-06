 import React from 'react'
 import FirstSlider from './components/FirstSlider';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Footer from './components/Footer';
import User from './components/User';



function App() {
  return (
    <Router>
    <div >
      <Navbar / >
      <Switch>
        <Route path='/' exact>
        <FirstSlider /><Footer />
        </Route>
        <Route path='/books/' exact component={BookList} />
        <Route path='/books/:id' exact component={BookDetails} />
        <Route path='/user/' exact component={User} />
      </Switch>
      </div>
    </Router>

   
  );
}

export default App;
