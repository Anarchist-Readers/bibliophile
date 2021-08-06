 import React, { useState } from 'react'
 import FirstSlider from './components/FirstSlider';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails"
import Login from './components/Login';
import User from './components/User'



function App() {

  const [user, setUser] = useState('')
  const [userHandler, setUserHandler] = useState(false)


  return (
    <Router>
    <div >
      <Navbar / >      
      {/* Routes */}
      <Switch>
        <Route path='/' exact component={FirstSlider} />
        <Route path='/books/' exact component={BookList} />
        <Route path='/books/:id' exact component={BookDetails} />
        <Route exact path="/user/" component={User} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
