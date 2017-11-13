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
    TouchableOpacity, Image
} from 'react-native';
import IconFont from '../resources/fonts/IconFont';
import moment from '../utils/moment';

const Style = {
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    leftView: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
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

function getDeviceIcon (type) {
    let icon;
    switch (type) {
    case 'WATCH':
        icon = 'icon_watch';
        break;
    case 'BP':
        break;
    case 'BS':
        break;
    }
    return icon;
}
function _renderDevices (devices) {
    if (devices.length <= 0) {
        return <View/>;
    } else {
        return devices.map((item, index) => {
            let icon = getDeviceIcon(item.deviceType);
            if (icon) {
                return (<IconFont key={`key-${index}`} name={icon} size={20}/>);
            } else {
                return null;
            }
        });
    }
}
function _renderItem(info, handler) {
    return (<TouchableOpacity onPress={() => {
        handler.navigate('PatientDetail');
    }}>
        <View style={Style.container}>
            <View style={Style.leftView}>
                {
                    info.item.avatar ? <Image source={{uri: info.item.avatar.src}} style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35}}/> : <Image
                        source={info.item.gender === 'female' ? require('../resources/common/images/avatar_patient_female.jpg') : require('../resources/common/images/avatar_patient_male.jpg')}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35}}/>
                }
            </View>

            <View style={Style.rightInfo}>
                <View style={Style.topView}>
                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Text style={{fontSize: 20}}>{info.item.name}</Text>
                        {
                            info.item.gender === 'male'
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

                    <Text style={{color: '#666', fontSize: 15}}>{moment(info.item.relateInfo.createTime).format('YYYY-MM-DD')}</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3, marginTop: 10, alignItems: 'center'}}>
                    <Text style={{color: '#666'}}>暂未成为 VIP</Text>
                    <View style={{flexDirection: 'row',
                        alignSelf: 'flex-end',
                        alignItems: 'center'}}>
                        { _renderDevices(info.item.relateInfo.devicesInfos) }
                    </View>
                </View>
            </View>

        </View></TouchableOpacity>);
}

// noinspection JSAnnotator
export default class PatientFrame extends Component<{}> {
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
