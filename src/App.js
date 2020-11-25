import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header'
import Home from './components/home';
import Post from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postItem';

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/posts/:id"  component={PostItem}/>
            <Route path="/posts"  component={Post}/>
            <Route path="/profile"  component={Profile}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
