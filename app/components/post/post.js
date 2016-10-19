import React, { Component } from 'react';
import { Image,TextInput, Text, CameraRoll,View,TouchableOpacity,AlertIOS} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PostHead from './postHead'
import styles from './styles'

class Post extends Component{
  constructor(props){
    super(props)
    this.state = {
      userimg: 'Avatar',
      content: '',
      avatarSource: null,
      modalVisible: true
      // imageSource: '', =>  prop 이상하다고 오류 메시지 생김
    }
  }

  async onPostPressed() {
    try {
      let response = await fetch('http://localhost:9000/feed',{
        method: 'POST',
        headers:
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          username: this.props.state.userDatas.userName,
          useruniv: this.props.state.userDatas.userUniv,
          userimg: this.state.userimg,
          content: this.state.content
        })
      })
      let res = await response.text()
      return this.callbackPosting()
    } catch(errors) {
      let formErrors = JSON.parse(errors);
      console.log(formErrors)
    }
  }

  callbackPosting() {
    AlertIOS.alert('Enactus', '작성되었습니다', this.hideModal())
  }

  hideModal() {
    this.setState = {
      content: ''
    }
    this.props.setModalVisible(false);
    // TODO: refreshing 추가
  }
  onPost(){
    return(
      <TouchableOpacity onPress={() => this.onPostPressed()}>
        <Text style={styles.TextBold}>게시</Text>
      </TouchableOpacity>
    )
  }
  render(){
    let userInfo = this.props.state.userDatas;
    return(
      <View style={styles.container}>
        <PostHead
          setModalVisible = {this.props.setModalVisible}
          onPost = {this.onPost()}
          content = {this.state.content}
        />
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={require('../../assets/user.png')}></Image>
          <View style={styles.InfoContainer}>
            <Text style={styles.User}>{userInfo.userName}</Text>
            <Text style={styles.UserUniv}>{userInfo.userUniv}</Text>
          </View>
          <Text>옵션 붙일 곳</Text>
        </View>
        <TextInput
          ref="textarea"
          style={styles.textArea}
          multiline={true}
          onChangeText={ (text)=> this.setState({content: text}) }
          placeholder="너의 하루를 말해봐봐봡？"
          selectionColor="#2aa2ef"
          placeholderTextColor="#ced8de"
          />
        <View>
          <TouchableOpacity
            style={styles.avatarContainer}
          >
            <View>
            { this.state.avatarSource === null ?
              <Icon name="ios-camera" size={30} color="#8899a5" />
              :
              <Image style={styles.avatar} source={this.state.avatarSource} />
            }
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default Post