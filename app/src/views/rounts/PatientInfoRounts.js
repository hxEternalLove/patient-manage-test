import {TabNavigator, TabBarBottom} from 'react-navigation';

import PatientCaseInfo from './PatientInfos/PatientCaseInfo.template';
import PatientPlans from './PatientInfos/PatientPlans.template';
import PatientInformation from './PatientInfos/PatientInformation.template';

const PatientInfos = TabNavigator({
    DataCaseInfo: {
        screen: PatientCaseInfo,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '    资料与病历'
        })
    },
    PlansManage: {
        screen: PatientPlans,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '|   管理方案'
        })
    },
    InformationData: {
        screen: PatientInformation,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '|   信息与数据'
        })
    }
}, {
    tabBarPosition: 'top',
    tabBarComponent: TabBarBottom,
    swipeEnabled: false, // 是否允许在标签之间进行滑动
    animationEnabled: false, // 是否在更改标签时显示动画
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
    tabBarOptions: {// 配置标签栏的一些属性iOS属性
        showIcon: false,
        activeTintColor: '#3db1b2', // label和icon的前景色 活跃状态下
        inactiveTintColor: '#979797', // label和icon的前景色 不活跃状态下
        style: {
            backgroundColor: 'white',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#aaa'
        },
        labelStyle: {// label的样式安卓属性
            fontSize: 18 // 文字大小
        }
    },
    navigationOptions: {
        headerTitle: '患者信息'
    }

});

export default PatientInfos;
