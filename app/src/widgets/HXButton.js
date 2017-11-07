import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// noinspection JSAnnotator
export default class HXButton extends Component<{}> {
    propTypes:{
        title: React.PropTypes.string.isRequired
    }
    render () {
        return (<TouchableOpacity style={{flex: 1}} onPress={this.props.onPress}>
            <View style={[{
                flex: 1,
                backgroundColor: '#3db1b2',
                height: 70,
                justifyContent: 'center',
                alignItems: 'center'
            }, this.props.style]}><Text
                    style={[{color: '#fff', fontSize: 20}, this.props.textStyle]}>{this.props.title}</Text></View>
        </TouchableOpacity>);
    }
};
