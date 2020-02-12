import React, { Component } from 'react';
import axios from 'axios'
import MovieItem from '../components/MovieItem'
class NowPlaying extends Component {
    constructor(props){
        super(props);
        this.state={
            subjects:[],
        }
    }
    render() {
        return (
            <div>
                <MovieItem data={this.state.subjects} handleItem={this.handleFilms}></MovieItem>
            </div>
        );
    }
    componentDidMount(){
        var url='https://douban-api.now.sh/v2/movie/in_theaters'
        axios.get(url).then(res=>{
            this.setState({
                subjects:res.data.subjects
            })
        })
    }
    handleFilms=(id)=>{
        this.props.handleId(id)
    }
}

export default NowPlaying;