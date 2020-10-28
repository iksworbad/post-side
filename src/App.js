
import React from 'react';
import './styles/App.sass';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Header } from './common/Header';
import navi from './assets/navi.svg'
import { UserPosts } from './pages/UserPosts';
import { Post } from './pages/Post';

const App = () => {
  return (
    <div className='page'>
      <Header />
      <div className='content'>
        <img src={navi} className='navi' alt='navi' />
        <div className='search'>http://daftcode.pl</div>
        <Router>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/posts/:id' component={UserPosts} />
            <Route exact path='/post/:userId/:id' component={Post} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default hot(App);