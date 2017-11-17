import React, { Component } from 'react';
import { View } from 'react-native';
// noinspection JSAnnotator
export default class GapLine extends Component<{}> {
    propTypes: {
        lineWidth: React.PropTyes.number, // 分割线宽度
        vertical: React.PropTyes.boolean, // 分割线方向垂直或水平
        lineColor: React.PropTyes.string // 分割线颜色
    }
    render () {
        let lineWidth = this.props.lineWidth ? this.props.lineWidth : 1;
        return (<View
            style={[{height: this.props.vertical ? null : lineWidth, width: this.props.vertical ? lineWidth : null, backgroundColor: this.props.lineColor ? this.props.lineColor : '#ddd'}, this.props.style]}>{this.props.children}</View>);
    }
};
