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
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import IconFont from '../resources/fonts/IconFont';
import Theme from '../Theme';

function _renderCorner (props) {
    if (props.showCorner) {
        let saxWidth = props.width / 4;
        return (<View style={{flex: 1, position: 'absolute', bottom: 0, right: 0}}>
            <View style={{width: saxWidth, height: saxWidth, borderWidth: saxWidth, borderColor: '#f2f2f2', borderLeftColor: 'rgba(0,0,0,0)', borderTopColor: 'rgba(0,0,0,0)', position: 'absolute', bottom: 0, right: 0}}/>
            <Text style={{backgroundColor: '#f2f2f2', color: 'red', position: 'absolute', bottom: saxWidth / 3, right: saxWidth / 3, fontSize: 18}}>{props.num ? props.num : 0}</Text>
        </View>);
    }
}
// noinspection JSAnnotator
export default class CollectionItem extends Component<{}> {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this.props.onPress}>
                <View style={[styles.wrapView, {width: this.props.width, height: this.props.width * 3 / 2}, this.props.style]}>
                    <View style={{alignItems: 'center'}}>
                        <IconFont name={this.props.icon ? this.props.icon : 'icon_sport'} style={{color: Theme.defaultColor, fontSize: 45, marginLeft: 5, marginBottom: 10}}/>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.title}</Text>
                    </View>
                    {_renderCorner(this.props)}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    wrapView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 4,
        borderColor: '#ddd',
        backgroundColor: 'white'
    }
});
