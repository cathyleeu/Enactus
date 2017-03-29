import {StyleSheet, Platform} from 'react-native';
import Dimensions from 'Dimensions'

export default StyleSheet.create({
  imageBack:{
    width: Dimensions.get('window').width,
    flex:1,
    resizeMode: 'cover',
  },
  logo:{
    height: Dimensions.get('window').height/10,
    margin: 5,
    // resizeMode: 'cover',
  },
  login_container:{
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'space-between'
  },
  rgst_container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    backgroundColor: '#F2F2F2',
    height:Dimensions.get('window').height/1.13,
    width:Dimensions.get('window').width,
    alignItems: 'center',
  },
  login_title:{
    fontWeight: '700',
    fontSize: 40,
    color: 'white',
    fontFamily:'AvenirNextCondensed-UltraLight',
    fontWeight: "600"
    // letterSpacing 간격 넓히는 것
  },
  home_btn:{
    justifyContent: 'center',
    alignItems:'center'
  },
  home_btn_Text:{
    margin: 5,
    color: 'white',
  },
  input: {
    height: 50,
    padding: 10,
    fontSize: 14,
    // backgroundColor: '#ffffff',
    marginBottom: 0.5,
  },
  half_input:{
    height: 50,
    padding: 10,
    fontSize: 14,
    width: Dimensions.get('window').width/2.1,
    marginBottom: 0.5,
  },
  type_input:{
    marginTop: 19,
    marginBottom: 10,
    height: 50,
    padding: 10,
    width: Dimensions.get('window').width,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor:'#d8d8d8',
  },
  button: {
    height: 40,
    backgroundColor: '#FEC13A',
    marginRight: 25,
    marginLeft: 25,
    margin:10,
    borderRadius:3,
    // opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEC13A',
  },
  buttonText:{
    fontSize:10,
  },
  login_head:{
    justifyContent:'center',
    height:Dimensions.get('window').height/3.5,
  },
  login_body:{
    height:Dimensions.get('window').height/1.9,
  },
  login_btm:{
    height:Dimensions.get('window').height/12,
  },
  cen_column: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  bottom_btn:{
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#FEC13A',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 0,
    position:"absolute",
    left:0,
    flexDirection: 'row',
  },
  rgst_email:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    width:Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor:'#d8d8d8',
    // borderWidth:1,
    // borderColor: 'black',
  },
  line:{
    height: 50,
    width:Dimensions.get('window').width,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
    borderColor:'#d8d8d8',
  },
  email_input:{
    height: 50,
    fontSize: 14,
    marginLeft: 5,
    width:Dimensions.get('window').width/1.4,
    // borderWidth:1,
    // borderColor: 'black',
  },

  email_button:{
    backgroundColor: '#FEC13A',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    marginRight:5,
  },
  type_inputText:{
    fontSize: 14,
    color: '#dbdbdb',
  },
  rgst_service:{
    color: 'blue',
    fontWeight: '600',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "blue",
  },
  agreement_cont:{
    flex: 1,
    margin: 20,
    borderRadius:2,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  agreement_box:{
    margin: 20,
    width: Dimensions.get('window').width/1.3,
    flex:1,
    borderColor: '#dbdbdb',
    borderWidth: 2,
    borderRadius: 10,
  },
});
