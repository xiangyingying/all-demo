import React, { Component } from 'react';
import './City.css'
import {Input} from 'antd';
import axios from 'axios'
import store from '../store/index'
import '../Films/Films'
class City extends Component {
    constructor(props){
        super(props);
        this.state={
            hotCities:[],
            cities:"",
            newCity:store.getState()
        }
        store.subscribe(this.handleSotreChange)
    }
    render() {
        return (
            <div>
                <div>
                   {/*  <div className="nav">
                     <router-link to="/films/nowPlaying">
                    <button className="secede">X</button>
                </router-link>      */}     
                <p className="currentCity">当前城市 - 武汉</p>
            </div>
            <div className="search">
                <i className="iconfont icon-sousuo"></i>
                <input className="inp"
                 type="text" placeholder="输入城市名或拼音" />
               {/*  <button className="cancel" >取消</button> */}
            </div>
            <div className="content" id="search-content">
                <div className="city">
                    <div className="position">
                        <p>GPS定位你所在城市</p>
                        <span className="pos">武汉</span>
                    </div>
                    <div className="hot-city">
                        <p>热门城市</p>
                        <p>
                            {this.state.hotCities.map(item=>{
                                return (<span key={item.name} msg={this.state.city} onClick={this.handleCity.bind(this,item.name)}>{item.name}</span>)
                            })}
                        </p>
                    </div>
                </div>
                <div className="cities">
                    {Object.keys(this.state.cities).map((obj,value)=>{
                        return (<div key={value}>{obj} 
                                {this.state.cities[obj].map((item,index)=>{
                                    return (<p onClick={this.handleCity.bind(this,item.name)} key={index}>{item.name}</p>)
                                })}
                        </div>)
                    })}
                </div>
            </div>
            </div>
            
        );
    }
    componentDidMount() {
        var url='http://yapi.demo.qunar.com/mock/43104/film'
        axios.get(url).then(res=>{
            this.setState({
                hotCities:res.data.data.hotCities,
                cities:res.data.data.cities
            })
        })
    }
    handleCity=(city)=>{
        const action={
            type:"city_value",
            value:city
        }
        store.dispatch(action)
        this.props.history.push(`/films/nowPlaying`)
    }
    handleSotreChange=()=>{
        this.setState(store.getState())
    }
}

export default City;