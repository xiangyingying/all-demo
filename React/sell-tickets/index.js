



import React, { Component } from 'react';
import axios from 'axios'
class Film extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render() {
        return (
            {/*  */}
        );
    }
    componentDidMount() {
        var id=this.props.match.params.id;
        var url=`https://douban-api.now.sh/v2/movie/subject/${id}`
        axios.get(url).then(res=>{
            console.log(res.data)
           this.setState({
               data:res.data
           })
        })
    }
    
}

export default Film;