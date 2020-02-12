import React, { Component } from 'react';
import {View, Text,FlatList,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default class MusicPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists:[]
    };
  }

  render() {
    return (
      <View>
        <FlatList numColumns={4} horizontal={false} data={this.state.playlists}
        renderItem={({item})=>
        <TouchableOpacity  onPress={this.MusicDetail.bind(this,item.id)}>
           <View style={styles.boxSize}>
                <Image style={{width:100,height:100}} source={{uri:item.coverImgUrl}}></Image>
                <Text style={styles.playCount}>
                  {this.ply(item.playCount)}
                </Text>
              <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
         }
        ></FlatList>
      </View>
    );
  }
  componentDidMount() {
    var url="http://192.168.14.15:5000/top/playlist?cat=华语";
    fetch(url).then(res=>res.json()).then(resJson=>{
      this.setState({
        playlists:resJson.playlists
      })
    })
  }
  ply(val){
    if(val>10000){
      val=Math.ceil(val/1000)/10+"万"
    }
    return val
  }
  MusicDetail=(id)=>{
    this.props.navigation.navigate('Detail',{id:id})
  }
}
const styles=StyleSheet.create({
  boxSize:{
    width:100,
    marginTop:10,
    marginLeft:10,
    position:"relative"
  },
  playCount:{
    height:20,
    width:"100%",
    backgroundColor:"#7F7F7F",
    opacity:.8,
    position:"absolute",
    top:80,
    color:"white"
  }
})