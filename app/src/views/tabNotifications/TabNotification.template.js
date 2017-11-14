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
    FlatList,
    TouchableOpacity
} from 'react-native';
import * as API from '../../resources/api';
import MsgFrame from '../../widgets/MsgFrame';

function _renderItem(info, navigation) {
    return (<MsgFrame info={info} handler={navigation}/>);
}

// noinspection JSAnnotator
export default class NotificationTemplate extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerRight: <TouchableOpacity style={{backgroundColor: '#3db1b2', marginRight: 15}} onPress={() => {
            console.log('@@@@@@', navigation);
            navigation.navigate('NotHandled');
        }}>
            <Text style={{color: 'white'}}>已处理</Text>
        </TouchableOpacity>
    })

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            notifyData: API.IMData
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.notifyData}
                    renderItem={(info) => _renderItem(info, this.props.navigation)}
                    ListHeaderComponent={() => <View style={styles.headLineStyle}/>}
                    ItemSeparatorComponent={() => <View
                        style={{flex: 1, height: 1, marginLeft: 90, backgroundColor: '#ddd'}}/>}
                    ListFooterComponent={() => <View style={{
                        flex: 1,
                        height: 50,
                        alignItems: 'center',
                        backgroundColor: '#f8f8f8',
                        borderColor: '#888',
                        borderTopWidth: 1
                    }}><Text
                            style={{color: '#666', fontSize: 16, position: 'absolute', bottom: 10}}>左滑名字标记为已处理</Text></View>}
                    keyExtractor={(item, index) => item.taskId + '_KEY_' + index}/>
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
