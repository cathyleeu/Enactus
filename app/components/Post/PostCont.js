import React, { PureComponent } from 'react';
import {
  ImageEditor,
  Image,
  TextInput,
  Dimensions,
  Text,
  ImagePickerIOS ,
  ActionSheetIOS,
  CameraRoll,
  StyleSheet,
  View,
  TouchableOpacity,
  AlertIOS,StatusBar,
  Picker,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './PostStyles'
import Reactotron from 'reactotron-react-native'


class Post extends PureComponent{
  constructor(props){
    super(props)
    this.isGetInitialState = () => ({
      userImg: this.props.user.userImg || "",
      name: this.props.user.name || '',
      univ: this.props.user.univ || '',
      userId: this.props.user._id || '',
      content: '',
      typeOf: '전체공개',
      postImg: ''
    })
    this.state = this.isGetInitialState()
  }
  componentWillReceiveProps(newProps){
    if(newProps.user !== this.props.user){
      this.setState({
        userImg: newProps.user.userImg,
        name: newProps.user.name,
        userId: newProps.user._id,
        univ: newProps.user.univ
      })
    }
  }
  chooseImageFromGallery = () => {
    // let cropData = {
    //     offset:{x:0,y:0},
    //     size:{width:150, height:150},
    //  displaySize:{width:20, height:20}, THESE 2 ARE OPTIONAL.
    //     resizeMode:'contain',
    // }
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      // cropImage -> crop을 하긴 했지만.... ㅋㅋㅋㅋ 선택을 못하고 바로 잘리는 구나 ㅅㅂ
      // ImageEditor.cropImage(
      //   imageUri,
      //   cropData,
      //   (successURI) => {this.setState({ postImg : successURI})},
      //   (errURI) => {console.log(errURI)}
      // )
      this.setState({postImg: imageUri});
    }, cancle => false);
  }
  chooseImageFromCamera = () => {
    ImagePickerIOS.openCameraDialog({}, imageUri => {
      this.setState({postImg: imageUri});
    }, cancle => false);
  }
  showActionSheet = () => {
    var BUTTONS = [ '전체공개', '대나무숲'];
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      title: '분류',
    },
    (buttonIndex) => this.setState({ typeOf: BUTTONS[buttonIndex] }));
  }
  handleSave = () => {
    const { navigation } = this.props;
    if(this.state.typeOf === '대나무숲'){
      this.props.isPostToBamboo(this.state, navigation)
    } else {
      this.props.onPostPressed(this.state, navigation)
    }
  }
  handleCancle = () => {
    this.setState(this.isGetInitialState())
    this.props.navigation.navigate('Feed')
  }
  render(){
    let { typeOf, userImg } = this.state;
    let { user } = this.props;
    //TODO: component 나누기
    return(
      <View>
        <View style={styles.post_top}>
          <TouchableOpacity onPress={this.handleCancle}>
            <Text style={styles.TextBold}>취소</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>글쓰기</Text>
          {this.state.content.length > 0
            ? <TouchableOpacity onPress={this.handleSave}>
                <Text style={styles.TextBold}>완료</Text>
              </TouchableOpacity>
            : <Text style={styles.NonTextBold}>완료</Text>
          }
        </View>
        <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={userImg ? {uri: userImg} : require('../../assets/defaultUser.jpg')}></Image>
          <View style={styles.InfoContainer}>
            <Text style={styles.User}>{this.state.name}</Text>
            <Text style={styles.UserUniv}>{this.state.univ} {user.userType}</Text>
          </View>
          <TouchableOpacity style={styles.button} underlayColor="transparent" onPress={this.showActionSheet}>
             <Text style={styles.buttonText}>{typeOf}</Text>
           </TouchableOpacity>
        </View>
        {this.state.postImg? <Image style={{flex: 1}} source={{uri: this.state.postImg}}></Image> : null}
        <TextInput
          ref="textarea"
          style={styles.textArea}
          multiline={true}
          value={this.state.content}
          onChangeText={text => this.setState({content: text})}
          placeholder="너의 하루를 말해봐봐봡？"
          selectionColor="#2aa2ef"
          placeholderTextColor="#ced8de"
          />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={this.chooseImageFromCamera}
            >
            <Icon name="ios-camera" size={30} color="#8899a5" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={this.chooseImageFromGallery}>
            <Icon name="ios-images" size={30} color="#8899a5" />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}

export default Post;
