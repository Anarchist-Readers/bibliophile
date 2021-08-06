 import React from 'react'
 import FirstSlider from './components/FirstSlider';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails"
import Login from './components/Login';
import Footer from './components/Footer'



function App() {
  return (
    <Router>
    <div >
      <Navbar / >

      
      {/* Routes */}
      <Switch>
        <Route path='/' exact component={FirstSlider} />
        <Route path='/books/' exact component={BookList} />
        <Route path='/books/:id' exact component={BookDetails} />
      </Switch>
      </div>
      <Footer />
    </Router>

   
  );
}

export default App;
