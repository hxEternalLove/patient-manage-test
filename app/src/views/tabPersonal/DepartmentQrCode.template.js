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
import { RowItem, BackButton, DepartmentList } from '../../widgets';
import Triangle from '../../widgets/Triangle'

// noinspection JSAnnotator
export default class DepartmentQrCodeTemplate extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <BackButton handler={navigation}/>,
        tabBarVisible: false
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            notifyData: API.UserDepartmentList
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Triangle/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
