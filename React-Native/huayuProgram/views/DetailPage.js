import React, { Component } from 'react';
import { View, Text,Image,StyleSheet} from 'react-native';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist:""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:150,height:200}} source={{uri:this.state.playlist.coverImgUrl}}></Image>  
        <View style={styles.info}>
            <Text style={styles.title}>{this.state.playlist.name}</Text>
            <Text>{this.state.playlist.updateFrequency}</Text>
            <Text style={styles.desc}>{this.state.playlist.description}</Text>
        </View>
      </View>
    );
  }
  async componentDidMount() {
    let id=this.props.navigation.getParam("id");
    var url=`http://192.168.14.15:5000/playlist/detail?id=${id}`;
    var data=await fetch(url);
    var resJson=await data.json();
    this.setState({
      playlist:resJson.playlist
    })
    console.log(playlist)
  }
}
const styles=StyleSheet.create({
  container:{
    flexDirection:"row",
  },
  info:{
    marginLeft:10
  },
  title:{
      fontSize:18,
      lineHeight:50
  },
  desc:{
    color:"#666666",
    marginTop:30
  }
})
