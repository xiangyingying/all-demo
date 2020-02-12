import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
export default class HelloWorldApp extends Component {
  render() {
    return (
        <View>
           <Text>Hello, world!</Text>        
           <Image style={{width:200,height:200}} source={{uri:"https://c-ssl.duitang.com/uploads/item/201903/14/20190314080942_ibkpm.thumb.400_0.jpeg"}}></Image>
            <Image  source={require('./assets/pic.png')}></Image>
        </View>
    );
  }
}