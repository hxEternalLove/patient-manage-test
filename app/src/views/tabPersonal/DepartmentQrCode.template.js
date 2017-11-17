/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList, Text, Image
} from 'react-native';
import * as API from '../../resources/api';
import { RowItem, BackButton, DepartmentList, HeaderView, GapLine } from '../../widgets';
import IconFont from '../../resources/fonts/IconFont';
import Theme from '../../Theme';

// noinspection JSAnnotator
export default class DepartmentQrCodeTemplate extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <BackButton handler={navigation}/>,
        tabBarVisible: false,
        headerTitle: '科室二维码'
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            notifyData: API.UserDepartmentList
        };
    }

    _getUrl(depId) {
        let qrCode = API.QrCodeUrls.find((item) => {
            return item.depId === depId;
        });
        return qrCode.url;
    }

    render() {
        return (
            <View style={styles.container}>
                <GapLine lineWidth={15} lineColor='#f8f8f8' style={{width: Theme.screen.width, borderColor: 'transparent', borderBottomColor: '#ececec', borderWidth: 1}}/>
                <View style={{marginTop: 10,
                    backgroundColor: '#FFF',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <IconFont name="icon_wechat" size={40} color="#22B224"/>
                    <Text style={{
                        color: '#22B224',
                        marginLeft: 10,
                        marginVertical: 14,
                        fontSize: 30
                    }}>微信扫一扫</Text></View>
                <GapLine lineWidth={50} lineColor='#f8f8f8' style={{width: Theme.screen.width, alignItems: 'center', justifyContent: 'center', borderColor: 'transparent', borderBottomColor: '#ececec', borderTopColor: '#ececec', borderWidth: 1}}><Text style={{color: '#3db1b2', fontSize: 18}}>{this.props.navigation.state.params.title}</Text></GapLine>
                <View style={{height: 90, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: '#666', fontSize: 20}}>{this.props.navigation.state.params.hospital}</Text></View>
                <Image source={{uri: this._getUrl(this.props.navigation.state.params.depId)}} style={{height: 150, width: 150}}/>
                <View style={{height: 90, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: '#666', fontSize: 18}}>患者或患者家属使用微信扫描二维码</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    }
});
