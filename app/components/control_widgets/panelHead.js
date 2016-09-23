import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ListView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class UserBlock extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <View>
      {this.props.state.userDeets.email.length > 0 ?
        <View style={{flexDirection:'row', paddingTop:15, backgroundColor:'#5e5e5e'}}>
          <Image source ={{uri : this.props.state.userDeets.image}} resizeMode="contain" style={{margin:15, width:60, height:60, borderRadius:30}} />
          <View style ={{justifyContent:'center', margin:15}}>
            <Text style={{fontWeight:'700', fontSize:25, color:'#fff'}}>{this.props.state.userDeets.first_name}</Text>
            <Text style={{fontWeight:'200', color:'#fff'}}>{this.props.state.userDeets.email}</Text>
          </View>
        </View>
        :
        <View style={{flexDirection:'row', paddingTop:15,  justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/logo-black.png')}
            style={{width:65,height:30}}/>
        </View>
      }
    	</View>
    )
  }
}
