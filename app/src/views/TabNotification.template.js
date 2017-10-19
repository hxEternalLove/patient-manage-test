/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	FlatList
} from 'react-native';
import IconFont from '../resources/fonts/IconFont';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});

export default class NotificationTemplate extends Component<{}> {

	static navigationOptions = {
		headerRight:<Button
			onPress={()=>{
				alert('已处理');
			}}
			title='已处理'
			color='white'
			style={{
				fontSize:10
			}}
		/>
	}

	// 构造
	  constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {
		    notifyData: null,
	    };
	  }

	render() {
		return (
			<View style={styles.container}>

				{/*<FlatList data={this.state.notifyData}*/}
				          {/*renderItem={_renderRightItem}*/}
				          {/*keyExtractor={(item) => item}/>*/}

				<Text style={styles.welcome}>
					Welcome to NotificationTemplate!
				</Text>
				<IconFont name='icon_wechat' color='red'/>
				<Text style={styles.instructions}>
					To get started, edit NotificationTemplate.js
				</Text>
				<Text style={styles.instructions}>
					{instructions}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
