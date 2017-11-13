import React, { Component } from 'react';
import { View } from 'react-native';
// noinspection JSAnnotator
export default class Triangle extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            size: this.props.size || 10, // 三角形大小
            direction: this.props.direction || 'top', // 三角尖角方向
            color: this.props.color || '#3db1b2' // 三角形颜色
        };
    }

    _getDirection (direction) {
        switch (direction) {
        case 'top':// 🔼
            return {'borderBottomColor': this.state.color, marginTop: -this.state.size};
        case 'bottom':// 🔽
            return {'borderTopColor': this.state.color, marginBottom: -this.state.size};
        case 'left':// ◀️
            return {'borderRightColor': this.state.color, marginLeft: -this.state.size};
        case 'right':// ▶️
            return {'borderLeftColor': this.state.color, marginRight: -this.state.size};
        case 'left-top':// ↖️
            return {'borderLeftColor': this.state.color, borderTopColor: this.state.color};
        case 'left-bottom':// ↙️
            return {'borderLeftColor': this.state.color, borderBottomColor: this.state.color};
        case 'right-top':// ↗️
            return {'borderRightColor': this.state.color, borderTopColor: this.state.color};
        case 'right-bottom':// ↘️
            return {'borderRightColor': this.state.color, borderBottomColor: this.state.color};
        default:
            return {borderColor: '#aaa'};
        }
    }

    render () {
        return (<View style={[{width: this.state.size, height: this.state.size, borderWidth: this.state.size, borderColor: 'rgba(0,0,0,0)'}, this._getDirection(this.state.direction), this.props.style]}/>);
    }
};
