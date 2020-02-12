import React, { Component } from 'react';
import queryString from 'query-string'
import './MusicDetail.css'
class MovieDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            playlist:Object
        }
    }
    render() {
        return (
            <div className="content">
                <img src={this.state.playlist.coverImgUrl}></img>
                <p className="name">{this.state.playlist.name}</p>
                <p className="desc">{this.state.playlist.description}</p>
            </div>
        );
    }
    componentDidMount() {
        var id=queryString.parse(this.props.location.search).id
          this.axios.get(`https://music.aityp.com/playlist/detail?id=${id}`).then(res=>{
             this.setState({
                playlist:res.data.playlist
            }) 
         }) 
    }
    
}

export default MovieDetail;