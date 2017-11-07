import React, { Component } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import IconFont from '../resources/fonts/IconFont';
// noinspection JSAnnotator
export default class BackButton extends Component<{}> {
    render() {
        return (<TouchableOpacity onPress={() => { this.props.handler.goBack(); }}>
            <View style={{flexDirection: 'row', marginLeft: 10, alignItems: 'center'}}>
                <IconFont name='icon_left_arrow' style={{color: 'white', fontSize: 18}}/>
                <Text style={{marginLeft: 2, color: 'white', fontSize: 16}}>返回</Text>
            </View>
        </TouchableOpacity>);
    }
}
