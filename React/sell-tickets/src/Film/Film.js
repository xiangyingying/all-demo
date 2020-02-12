import React, { Component } from 'react';
import axios from 'axios'
import './Film.css'
class Film extends Component {
    constructor(props){
        super(props);
        this.state={
           data:"",
           img:"",
           genres:[],
           countries:"",
           duration:"",
           casts:[],
           clips:[]
        }
    }
    render() {
        return (
            <div className="container">
                <button className="back" onClick={this.handleBack}><i className="iconfont icon-fanhui"></i></button> 
            {/*     <div className="nav">  
                    <button className="active"><i className="iconfont icon-fanhui"></i></button>         
                    <p className="nav-title">{this.state.data.title}</p> 
                </div>   */}   
               <img className="nav-bg" src={this.state.img} alt=""/>
                <div className="detail">
                    <p className="film-title">{this.state.data.title}</p>
                    <p>
                        {this.state.genres.map((item)=>{
                            return (<span key={item}>
                                {item} | </span>)
                        })}
                    </p>
                    <p className="show">{this.state.data.mainland_pubdate}上映</p>
                    <p><span>{this.state.countries}</span> | <span>{this.state.duration}</span></p>   
                    <p className="summary">{this.state.data.summary}</p>
                </div>
                <div className="film-author">
                    <p>演职人员</p>
                    <div className="wrapper">
                        <div className="swiper-img">                      
                               {this.state.casts.map(item=>{
                                   return (<div key={item.name}>
                                       <img src={item.avatars.small}></img>
                                       <p>{item.name}</p>
                                   </div>)
                               })}
                        </div>
                    </div>
                </div> 
                <div className="photo">
                    <div className="phone-title">
                        <span>剧照</span>
                        <span>全部({this.state.clips.length})></span>
                    </div>
                    <div className="wrapper">
                        <div className="swiper-img">
                               {this.state.clips.map(item=>{
                                   return (<img key={item.id} src={item.image}/>)
                               })}
                        </div>
                    </div>
                </div>
                <div className="btn">选座购票</div>
            </div>
        );
    }
    componentDidMount() {
        var id=this.props.match.params.id;
        var url=`https://douban-api.now.sh/v2/movie/subject/${id}`
        axios.get(url).then(res=>{
           this.setState({
               data:res.data,
               img:res.data.images.small,
               genres:res.data.genres,
               countries:res.data.countries[0],
               duration:res.data.durations[0],
               casts:res.data.casts,
               clips:res.data.photos
           })
        })
    }
    handleBack=()=>{
        this.props.history.push('/films/nowPlaying')
    }
}

export default Film;