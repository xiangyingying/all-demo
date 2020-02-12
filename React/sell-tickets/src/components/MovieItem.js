import React, { Component } from 'react';
import Container from '../components-style/MovieItem-style'
class MovieItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container> 
                {this.props.data.map((item,index)=>{
                    return (<div className="item" key={index} onClick={this.handleId.bind(this,item.id)}>
                        <div className="bg"><img src={item.images.small} alt=""/></div>
                        <div className="info">
                            <p className="title">{item.title}</p>
                            <p className="author">主演：{item.casts.map(item=>{
                                return (<span key={item.name}>{item.name} /</span>)
                            })}</p>
                            <p className="time">时长：{item.durations[0]}</p>
                        </div>
                    </div>)
                })}
            </Container>
        );
    }
    handleId=(id)=>{
        this.props.handleItem(id)
    }
}

export default MovieItem;