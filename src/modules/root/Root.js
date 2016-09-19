import { View, Text, Navigator } from 'react-native';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from './actions'
// import { Intro, Network } from '../feed/components'
// import Feed from '../feed/Feed'
import Drawer from 'react-native-drawer'
import Panel from './components/Panel'


class Root extends Component {
  state={
		drawerOpen: false,
		drawerDisabled: false,
	};
	closeDrawer = () => {
		this._drawer.close()
	};
	openDrawer = () => {
		this._drawer.open()
	};
  // renderScene(route, navigator){
  //   const {state, actions} = this.props
  //   const routeId = route.id
  //
  //   if (routeId === 'news') {
  //     return (
  //       <Feed
  //       {...this.props}
  //       closeDrawer={this.closeDrawer}
  //       navigator={navigator} />
  //     )
  //   }
  //   if (routeId === 'intro') {
  //     return (
  //       <Intro
  //       {...this.props}
  //       closeDrawer={this.closeDrawer}
  //       navigator={navigator} />
  //     )
  //   }
  // }
  render(){
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <Panel
            {...this.props}
            closeDrawer={this.closeDrawer}
          />
        }
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        tweenDuration={100}
        panThreshold={0.08}
        panOpenMask={0.2}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={0.2}
        negotiatePan
        >
          <View>
            <Text>
              hello
            </Text>
          </View>
      </Drawer>
    )
  }
}
// panOpenMask={0.2} => 추가하면 손으로 열기 가능..ㅎㅎㅎ
Root.displayName = 'Root'
Root.propTypes = {
  pushRoute: PropTypes.func.isRequired,
  popRoute: PropTypes.func.isRequired,
  replaceRoute: PropTypes.func.isRequired
}
export default connect(
  (state) => ({
    panels: state.root,
    //constant와 연결
  }),
  (dispatch) => ({
    pushRoute: (route) => dispatch(actions.push(route)),
    popRoute: () => dispatch(actions.pop()),
    replaceRoute: (index) => dispatch(actions.replace(index))
  })
)(Root)
