import React, { Component } from 'react';
import './Music.css';
class Movie extends Component {
    constructor(props){
        super(props);
        this.state={
            playlists:[]
        }
    }
    render() {
        return (
            <div className="item">
               {this.state.playlists.map((item,index)=>{
                   return(<div key={index} onClick={this.handleDetail.bind(this,item.id)}>
                       <img src={item.coverImgUrl} alt={item.name}></img>
                        <p className="title">{item.name}</p>
                   </div>)
               })}
            </div>     
        );
    }
    componentDidMount() {
        var url='https://music.aityp.com/top/playlist?cat=韩语'
        this.axios.get(url).then(res=>{
           this.setState({
               playlists:res.data.playlists
           })
        })
    }
    handleDetail=(id)=>{
        this.props.history.push(`/MusicDetail?id=${id}`)
    }
    
}

export default Movie;