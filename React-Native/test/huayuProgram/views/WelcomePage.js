import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,Dimensions,Button } from 'react-native';
const {width,height} = Dimensions.get("window")
export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/welcome.jpeg')}></Image>
        <View style={styles.btn}><Button onPress={this.MusicPage} title="进入音乐"></Button></View>
      </View>
    );
  }
  componentDidMount() {
  this.timer= setTimeout(()=>{
      this.props.navigation.navigate("Music")
    },3000)
  }
  componentWillUnmount(){
    if(this.timer){
      clearTimeout(this.timer)
    }
  }
  MusicPage=()=>{
    this.props.navigation.navigate('Music')
  }
}
const styles=StyleSheet.create({
  image:{
    width:width,
    height:height,
    opacity:.9,
  },
  btn:{
    position:"absolute",
    top:"80%",
    left:"40%",
    zIndex:200,
    height:100,
    width:100,
  },
  container:{
    position:"relative"
  }
})
