import React, { Component } from 'react';
import './MovieDetail.css'
class MovieDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            data:Object,
            pic:String
        }
    }
    render() {
        return (
            <div className="item">
                <p className="title">{this.state.data.title}<span>({this.state.data.year})</span></p>
                <img src={this.state.pic.small}></img>
                <p>{this.state.data.summary}</p>
            </div>
        );
    }
    componentDidMount() {
        var id=this.props.match.params.id
        this.axios.get(`https://douban-api.uieee.com/v2/movie/subject/${id}`).then(res=>{
             this.setState({
                data:res.data,
                pic:res.data.images
            })  
         }) 
    }
    
}

export default MovieDetail;