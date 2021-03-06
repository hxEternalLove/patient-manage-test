/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';
import * as API from '../../resources/api';
import MsgFrame from '../../widgets/MsgFrame';
import BackButton from '../../widgets/BackButton';

function _renderItem(info) {
    return (<MsgFrame info={info}/>);
}

// noinspection JSAnnotator
export default class NotificationHandledTemplate extends Component<{}> {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <BackButton handler={navigation}/>,
            tabBarVisible: false
        };
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            notifyData: API.HandledData
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.notifyData}
                    renderItem={(info) => _renderItem(info, this.props.navigation)}
                    ListHeaderComponent={() => <View style={styles.headLineStyle}/>}
                    ItemSeparatorComponent={() => <View
                        style={{flex: 1, height: 1, marginLeft: 100, backgroundColor: '#ddd'}}/>}
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
