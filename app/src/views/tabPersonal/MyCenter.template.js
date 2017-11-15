/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList, TouchableOpacity, Text
} from 'react-native';
import { RowItem, BackButton, HeaderView } from '../../widgets';

function _renderItem(info, navigation) {
    return (<RowItem title={info.item.planName} titleColor='#333' text={`包含${info.item.count}项方案`} textColor='#666' onPress={() => {
        navigation.navigate('PlanMouldType', {title: info.item.depName});
    }}/>);
}

// noinspection JSAnnotator
export default class PlanListTemplate extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <BackButton handler={navigation}/>,
        tabBarVisible: false,
        headerTitle: <HeaderView style={{alignSelf: 'center'}} headTitle={navigation.state.params ? navigation.state.params.title : '暂无科室'} onPress={() => {}} disTrangle/>,
        headerRight: <TouchableOpacity style={{backgroundColor: '#3db1b2', marginRight: 15}} onPress={() => {
            console.log('@@@@@@', navigation);
            // navigation.navigate('PatHome');
        }}><Text style={{color: 'white'}}>新建</Text></TouchableOpacity>
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            planData: []
        };
    }

    componentDidMount () {
        this._loadData();
    }

    _loadData() {
        this.setState({
            planData: [{planName: '8.28', count: 10}, {planName: '哦买噶', count: 5}]
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.planData.length > 0
                        ? <FlatList data={this.state.planData}
                            renderItem={(info) => _renderItem(info, this.props.navigation)}
                            ListHeaderComponent={() => <View style={styles.headLineStyle}/>}
                            keyExtractor={(item, index) => item.taskId + '_KEY_' + index}/>
                        : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20, color: '#888'}}>暂无数据</Text></View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white'
    },

    headLineStyle: {
        flex: 1,
        height: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
});
