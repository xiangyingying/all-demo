import React, { Component } from 'react';
import { Text, View,FlatList,Image,StyleSheet } from 'react-native';
export default class HelloWorldApp extends Component {
  state={
    playlists:[],
    banners:[]
  }
  render() {
    return (
        <View>
            <FlatList numColumns={4} horizontal={false}  data={this.state.playlists}
              renderItem={({item})=>
                <View style={styles.boxSize}>
                    <Image style={{width:100,height:100}} source={{uri:item.coverImgUrl}}></Image>
                    <Text style={styles.playCount}>                   
                       {this.ply(item.playCount)}</Text>
                    <Text>{item.name}</Text>
                </View>}>
            </FlatList>
        </View>
    );
  }
 async componentDidMount() {
    var url='http://192.168.14.15:5000/top/playlist?cat=华语';
    var ImgUrl="http://192.168.14.15:5000/banner";
    var data=await fetch(url);
    var resJson=await data.json();

    var imgData=await fetch(url);
    var dataJson=await imgData.json();
    this.setState({
      playlists:resJson.playlists,
      banners:dataJson.banners
    })
  }
  ply(val){
    if(val>10000){
      val=Math.ceil(val/1000)/10+"万"
    }
    return val
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