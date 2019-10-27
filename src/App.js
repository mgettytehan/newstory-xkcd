import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Latest from './components/pages/Latest.js';
import Search from './components/pages/Search.js'
import { notFound } from './components/pages/NotFound.js'

function App() {
  return (
    <div>
      <nav>
        <NavLink exact to="/" className="latest" activeStyle={{color: "red"}}>Latest</NavLink>
        <NavLink exact to="/search" className="search" activeStyle={{color: "red"}}>Search</NavLink>
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