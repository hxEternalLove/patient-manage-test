import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import NotificationScreen from './views/TabNotification.template';
import PatientManageScreen from './views/TabPatientManage.template';
import PersonalScreen from './views/TabPersonal.template';
import IconFont from './resources/fonts/IconFont'

const NotifcationNav = StackNavigator({
	Home: {
		screen: NotificationScreen,
		navigationOptions: ({navigation}) => ({
			headerTitle: '医医',
			headerTitleStyle:{
				color:'white',
				fontSize:20
			},
			headerStyle:{
				backgroundColor:'#3db1b2',
			},
		}),
	}

});
const PatientManageNav = StackNavigator({
	Home: {
		screen: PatientManageScreen,
		navigationOptions: ({navigation}) => ({
			headerTitle: '🌺🌺',
			headerTitleStyle:{
				color:'white',
				fontSize:20
			},
			headerStyle:{
				backgroundColor:'#3db1b2'
			}
		}),
	}
});
const PersonalNav = StackNavigator({
	Home: {
		screen: PersonalScreen,
		navigationOptions: ({navigation}) => ({
			headerTitle: '工作站',
			headerTitleStyle:{
				color:'white',
				fontSize:20
			},
			headerStyle:{
				backgroundColor:'#3db1b2'
			}
		}),
	}
});
const MyApp = TabNavigator({
	Notification: {
		screen: NotifcationNav,
		navigationOptions: ({navigation}) => ({
			tabBarLabel: '医医',
			title: '医医',
			tabBarIcon: ({focused, tintColor}) =>(
				<IconFont name={'icon_home'} style={{fontSize: 22,color:tintColor}}/>)
		}),
	},
	PatientManage: {
		screen: PatientManageNav,
		navigationOptions: ({navigation}) => ({
			tabBarLabel: '患者管理',
			tabBarIcon: ({focused, tintColor}) => (
				<IconFont name={'icon_patient_manage'} style={{fontSize: 22,color:tintColor}}/>)
		}),
	},
	Personal: {
		screen: PersonalNav,
		navigationOptions: ({navigation}) => ({
			tabBarLabel: '工作站',
			title: '工作站',
			tabBarIcon: ({focused, tintColor}) => (
				<IconFont name={'icon_workspace'} style={{fontSize: 22, color:tintColor}}/>)
		}),
	},
}, {
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	swipeEnabled: true,// 是否允许在标签之间进行滑动
	animationEnabled: false,// 是否在更改标签时显示动画
	lazy: true,// 是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
	tabBarOptions: {// 配置标签栏的一些属性iOS属性
		activeTintColor: '#3db1b2',// label和icon的前景色 活跃状态下
		inactiveTintColor: '#979797',// label和icon的前景色 不活跃状态下
		style: {backgroundColor: '#ffffff'},
		labelStyle: {// label的样式安卓属性
			fontSize: 18, // 文字大小
		},
	},

});

export {
	MyApp
};