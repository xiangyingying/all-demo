import React from 'react'
import './Movie.css'
class Movie extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="item">
            {this.props.data.map((item,index) => {
                    return (<div key={index} onClick={this.handleClick.bind(this,index)}>
                        <img src={item.coverImgUrl} alt={item.name} />
                        <p className="title">{item.name}</p>
                            </div>)
                    })}
            </div>           
        )
    }
    handleClick=(index)=>{
        this.props.deleteItem(index)
    }
}
export default Movie