import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './App.css';

import Latest from './components/pages/Latest.js';
import Search from './components/pages/Search.js'
import { notFound } from './components/pages/NotFound.js'

function App() {
  return (
    <div className="app">
      <nav>
        <NavLink exact to="/" className="latest" activeClassName="selected">Latest</NavLink>
        <NavLink exact to="/search" className="search" activeClassName="selected">Search</NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Latest} />
          <Route component={notFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;