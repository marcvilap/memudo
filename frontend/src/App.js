import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/Navigation'
import ProductsList from './components/ProductsList'
import CreateRemoval from './components/removals/CreateRemoval'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <Router>
      <Navigation />
      <div className="div p-4">
      <Route path="/" exact component={ProductsList} />
      <Route path="/edit/:id" component={CreateRemoval} />
      <Route path="/removal" component={CreateRemoval} />
      <Route path="/user" component={CreateUser} />
      </div>
      
    </Router>
  );
}

export default App;
