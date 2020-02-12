import React from 'react';
import Moive from './components/Movie'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      playlists:[]
    }
  }
  render(){
    return(
      <div>
        <Moive deleteItem={this.handleDelete.bind(this)} data={this.state.playlists}></Moive>
      </div>
    )
  }
  componentDidMount(){
    this.axios.get('https://music.aityp.com/top/playlist?cat=日语').then(res=>{
      this.setState({
        playlists:res.data.playlists
      })
    })
  }
  handleDelete(index){
    var playlists=this.state.playlists;
    playlists.splice(index,1)
    this.setState({
      playlists
    })
  }
}

export default App;
