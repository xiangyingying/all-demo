import React, { Component } from 'react';
import './Films.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ComingSoon from '../ComingSoon/ComingSoon'
import NowPlaying from '../NowPlaying/NowPlaying'
import { Carousel } from 'antd';
import store from '../store/index'
class Films extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <p className="film-city" onClick={this.handleCity}>{store.getState().city}<i className="iconfont icon-xialasanjiao"></i></p>
                <Carousel effect="fade" autoplay dots='true'>
                    <div>
                        <img src={require('../assets/banner_1.jpg')} alt=""/>
                    </div>
                    <div>
                        <img src={require('../assets/banner_2.jpg')} alt=""/>
                    </div>
                </Carousel>
                <ul>
                    <li><Link to="/films/nowPlaying">正在热映</Link></li>
                    <li><Link to="/films/comingSoon" >即将上映</Link></li>
                </ul>                           
               <Switch>
                    <Route path="/films/nowPlaying">
                        <NowPlaying handleId={this.handleDetail.bind(this)}/>
                    </Route>
                    <Route path="/films/comingSoon">
                        <ComingSoon handleId={this.handleDetail.bind(this)}/>
                    </Route>                   
               </Switch>
            </div>
        );
    }
    handleDetail=(id)=>{
        this.props.history.push(`/film/${id}`)
    }
    handleCity=()=>{
        this.props.history.push('/city')
    }
}

export default Films;