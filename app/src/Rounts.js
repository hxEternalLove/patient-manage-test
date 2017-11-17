import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import NotificationScreen from './views/tabNotifications/TabNotification.template';
import PatientManageScreen from './views/tabPatientManages/TabPatientManage.template';
import PersonalScreen from './views/tabPersonal/TabPersonal.template';
import IconFont from './resources/fonts/IconFont';

import NotificationHandled from './views/tabNotifications/NotificationHandled.template';
import PatientInfos from './views/patientInfoRounts/PatientInfoRounts';
import BackButton from './widgets/BackButton';

import MouldTypeScreen from './views/tabPersonal/DepartmentPlans.template';
import PlansListScreen from './views/tabPersonal/HospitalSchemaPackage.template';
import DepListScreen from './views/tabPersonal/DepartmentList.template';
import PatientConventionScreen from './views/tabPersonal/PatientConvention.template';
import TheMessageScreen from './views/tabPersonal/TheMessage.template';
import MyNewDepartmentScreen from './views/tabPersonal/MyNewDepartment.template';
import VisitTimeSettingScreen from './views/tabPersonal/VisitTimeSetting.template';
import MassMessageScreen from './views/tabPersonal/MassMessage.template';
import MyCenterScreen from './views/tabPersonal/MyCenter.template';
import DepartmentQrCodeScreen from './views/tabPersonal/DepartmentQrCode.template';

import CreatDepartmentScreen from './views/tabPersonal/CreateDepartment.template';

const NotifcationNav = StackNavigator({
    NotiHome: {
        screen: NotificationScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: '医医'
        })
    },
    NotHandled: {
        screen: NotificationHandled,
        navigationOptions: ({navigation}) => ({
            headerTitle: '已处理'
        })
    },
    PatientDetail: {
        screen: PatientInfos,
        navigationOptions: ({navigation}) => ({
            tabBarVisible: false,
            headerLeft: <BackButton handler={navigation}/>
        })
    }

}, {
    navigationOptions: ({navigation}) => ({
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            //居中显示
            alignSelf: 'center'
        },
        headerStyle: {
            backgroundColor: '#3db1b2'
        }
    })
});
const PatientManageNav = StackNavigator({
    PatHome: {
        screen: PatientManageScreen,
        navigationOptions: ({navigation}) => ({
            // headerTitle: '🌺🌺'
        })
    },
    PatientDetail: {
        screen: PatientInfos,
        navigationOptions: ({navigation}) => ({
            tabBarVisible: false,
            headerLeft: <BackButton handler={navigation}/>
        })
    }
}, {
    navigationOptions: ({navigation}) => ({
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            //居中显示
            alignSelf: 'center'
        },
        headerStyle: {
            backgroundColor: '#3db1b2'
        }
    })
});
const PersonalNav = StackNavigator({
    PerHome: {
        screen: PersonalScreen,
        navigationOptions: ({navigation}) => ({
            headerTitle: '工作站'
        })
    },
    DepList: {
        screen: DepListScreen
    },
    departmentPlans: {
        screen: MouldTypeScreen
    },
    hospitalSchemaPackage: {
        screen: PlansListScreen
    },
    patientConvention: {
        screen: PatientConventionScreen
    },
    theMessage: {
        screen: TheMessageScreen
    },
    myNewDepartment: {
        screen: MyNewDepartmentScreen
    },
    visitTimeSettings: {
        screen: VisitTimeSettingScreen
    },
    massMessages: {
        screen: MassMessageScreen
    },
    myCenter: {
        screen: MyCenterScreen
    },
    departmentQrCode: {
        screen: DepartmentQrCodeScreen
    },
    creatDepartment: {
        screen: CreatDepartmentScreen
    }

}, {
    navigationOptions: ({navigation}) => ({
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            //居中显示
            alignSelf: 'center'
        },
        headerStyle: {
            backgroundColor: '#3db1b2',
            justifyContent: 'center'
        }
    })
});
const MyApp = TabNavigator({
    Notification: {
        screen: NotifcationNav,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '医医',
            title: '医医',
            tabBarIcon: ({focused, tintColor}) => (//eslint-disable-line
                <IconFont name={'icon_home'} style={{fontSize: 22, color: tintColor}}/>)
        })
    },
    PatientManage: {
        screen: PatientManageNav,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '患者管理',
            tabBarIcon: ({focused, tintColor}) => (//eslint-disable-line
                <IconFont name={'icon_patient_manage'} style={{fontSize: 22, color: tintColor}}/>)
        })
    },
    Personal: {
        screen: PersonalNav,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '工作站',
            title: '工作站',
            tabBarIcon: ({focused, tintColor}) => (//eslint-disable-line
                <IconFont name={'icon_workspace'} style={{fontSize: 22, color: tintColor}}/>)
        })
    }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false, // 是否允许在标签之间进行滑动
    animationEnabled: false, // 是否在更改标签时显示动画
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
    tabBarOptions: {// 配置标签栏的一些属性iOS属性
        activeTintColor: '#3db1b2', // label和icon的前景色 活跃状态下
        inactiveTintColor: '#979797', // label和icon的前景色 不活跃状态下
        style: {height: 54, backgroundColor: '#fafafa', borderColor: '#888', borderTopWidth: 1, marginBottom: 5},
        labelStyle: {// label的样式安卓属性
            fontSize: 14 // 文字大小
        }
    }

});

export {
    MyApp
};
