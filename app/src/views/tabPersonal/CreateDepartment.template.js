/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList, Text, TextInput
} from 'react-native';
import { RowItem, BackButton } from '../../widgets';
import Theme from '../../Theme';
import HXButton from '../../widgets/HXButton';

// noinspection JSAnnotator
export default class CreatDepartment extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <BackButton handler={navigation}/>,
        tabBarVisible: false,
        headerTitle: '创建新科室'
    });
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hospital: null,
            depName: null
        };
    }

    _onCreatDepartment () {
        if (!this.state.depName) {
            alert('科室名不能为空');
            return;
        }
        if (!this.state.hospital) {
            alert('医院名不能能为空');
            return;
        }
        alert(this.state.hospital + '@@@@@@@' + this.state.depName);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headLineStyle}><Text
                    style={styles.textStyle}>请输入科室名称</Text></View>
                <TextInput style={{padding: 20, fontSize: 18}}
                    underlineColorAndroid="transparent"
                    placeholder={'请输入科室名称'}
                    onChangeText={(text) => this.setState({depName: text})}
                    value={this.state.depName}></TextInput>

                <View style={styles.headLineStyle}><Text
                    style={styles.textStyle}>请输入医院名称</Text></View>
                <TextInput style={{padding: 20, borderColor: Theme.lineColor, borderBottomWidth: 1, fontSize: 18}}
                    underlineColorAndroid="transparent"
                    placeholder={'请输入医院名称'}
                    onChangeText={(text) => this.setState({hospital: text})}
                    value={this.state.hospital}/>

                <HXButton title={'创建科室'}
                    style={{width: Theme.screen.width, height: 50, position: 'absolute', bottom: 0}}
                    textStyle={{fontSize: 16}}
                    onPress={() => this._onCreatDepartment()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    headLineStyle: {
        backgroundColor: Theme.defaultBgColor,
        justifyContent: 'center',
        paddingHorizontal: Theme.leftGap,
        height: 50,
        borderColor: Theme.lineColor,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },

    textStyle: {
        fontSize: 18,
        color: Theme.textColor,
        fontWeight: 'bold'
    }

});
