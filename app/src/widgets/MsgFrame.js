/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import IconFont from '../resources/fonts/IconFont';

const Style = {
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    leftView: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3db1b2',
        borderWidth: 2,
        borderRadius: 30,
        marginVertical: 10,
        marginHorizontal: 15
    },

    rightInfo: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 15
    },

    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    nameAgeStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 3,
        marginLeft: 3
    },
    redDot: {
        position: 'absolute',
        top: '3%',
        right: '3%',
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: 'red'
    }
};

function _getTypeText(info) {
    if (info && info.item.taskType) {
        switch (info.item.taskType) {
        case 'add_patient':
            return '患者';
        case 'add_book':
            return '预约';
        case 'schedule_expired':
            return '到期';
        case 'add_patient_vip_service':
            return '服务';
        case 'add_received_gifts':
            return '心意';
        }
    }
    return '未知';
};

function _renderItem(info, handler) {
    return (<TouchableOpacity onPress={() => {
        handler.navigate('PatientDetail');
    }}>
        <View style={Style.container}>
            <View style={Style.leftView}>
                <Text style={{color: '#3db1b2', fontSize: 18}}>{_getTypeText(info)}</Text>
                {info.index % 2 === 0 ? <View style={Style.redDot}/> : <View/>}
            </View>

            <View style={Style.rightInfo}>
                <View style={Style.topView}>
                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Text style={{fontSize: 17, color: '#333'}}>{info.item.target.userInfo.name}</Text>
                        {
                            info.item.target.userInfo.gender === 'male'
                                ? <View style={[Style.nameAgeStyle, {borderColor: '#3db1b2'}]}>
                                    <IconFont name='icon_male' style={{color: '#3db1b2', paddingLeft: 5}}/>
                                    <Text style={{color: '#3db1b2', marginHorizontal: 3}}>0岁</Text>
                                </View>
                                : <View style={[Style.nameAgeStyle, {borderColor: '#f3b0f4'}]}>
                                    <IconFont name='icon_female' style={{color: '#f3b0f4', paddingLeft: 5}}/>
                                    <Text style={{color: '#f3b0f4', marginHorizontal: 3}}>0岁</Text>
                                </View>
                        }
                    </View>

                    <Text style={{color: '#666', fontSize: 12}}>2017-10-19</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3}}>
                    <IconFont name='icon_love' style={{color: 'red', fontSize: 14, marginLeft: 5}}/>
                    {info.item.dealerUserName !== ''
                        ? <Text style={{color: '#666'}}>{info.item.dealerUserName} 已处理</Text> : <Text/>}
                </View>

                <Text style={{color: '#666', fontSize: 14}}>{info.item.target.taskDesc}</Text>
            </View>

        </View></TouchableOpacity>);
}

// noinspection JSAnnotator
export default class MsgFrame extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    };

    render() {
        return (
            <View style={styles.container}>
                {
                    _renderItem(this.props.info, this.props.handler)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }

});
