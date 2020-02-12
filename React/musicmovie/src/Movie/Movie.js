import React, { Component } from 'react';
import './Movie.css';
class Music extends Component {
    constructor(props){
        super(props);
        this.state={
            subjects:[],
            id:""
        }
    }
    render() {
        return (
            <div className="item">
               {this.state.subjects.map((item,index)=>{
                   return(<div key={index} onClick={this.handleMovie.bind(this,item.id)}>
                       <img src={item.images.small} alt={item.name}></img>
                        <p className="name">{item.title}</p>
                   </div>)
               })}
            </div>     
        );
    }
    componentDidMount() {
        var url='https://douban-api.zce.now.sh/v2/movie/top250'
        this.axios.get(url).then(res=>{
           this.setState({
            subjects:res.data.subjects
           })
        })
    }
    handleMovie=(id)=>{
        this.props.history.push(`/MovieDetail/${id}`)
    }
}

export default Music;