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
import { Triangle } from '../widgets';

export default class HeaderView extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            headTitle: this.props.headTitle
        };
    }

    componentWillReceiveProps(nextProps, state) {
        if (this.props !== nextProps) {
            this.setState({
                headTitle: nextProps.headTitle
            });
        }
    }

    render() {
        return (<TouchableOpacity style={{alignSelf: 'center'}} onPress={() => {
            this.props.onPress();
        }}>
            <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}, this.props.style]}>
                <Text style={{color: 'white', fontSize: 20, marginRight: 10}}>{this.state.headTitle}</Text>
                {
                    this.props.disTrangle ? <View/> : <Triangle direction={'bottom'} color={'white'} size={6}/> }
            </View>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff'
    },

    headLineStyle: {
        flex: 1,
        height: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
});
