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
import { RowItem } from './index';

function _renderItem(info, navigation, realRoute) {
    return (<RowItem title={info.item.depName} titleColor='#333' onPress={() => {
        navigation.navigate(realRoute, {title: info.item.depName});
    }}/>);
}

// noinspection JSAnnotator
export default class DepartmentList extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            notifyData: this.props.notifyData,
            realRoute: this.props.realRoute
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.notifyData}
                    renderItem={(info) => _renderItem(info, this.props.navigation, this.state.realRoute)}
                    ListHeaderComponent={() => <View style={styles.headLineStyle}/>}
                    keyExtractor={(item, index) => item.taskId + '_KEY_' + index}/>
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
        flex: 1,
        height: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
});
