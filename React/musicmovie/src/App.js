import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Movie from './Movie/Movie.js'
import Music from './Music/Music.js'
import MovieDetail from './MovieDetail/MovieDetail.js'
import MusicDetail from './MusicDetail/MusicDetail.js'
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <ul className="bottom-nav">
                        <li><Link to="/">电影</Link></li>
                        <li><Link to="/music">音乐</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Movie}></Route>
                        <Route path="/music" component={Music}></Route>
                        <Route path="/MovieDetail/:id" component={MovieDetail}></Route>
                        <Route path="/MusicDetail" component={MusicDetail}></Route>
                     </Switch>
                </Router>
                
            </div>
        );
    }
}

export default App;