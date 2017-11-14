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

const {width} = Dimensions.get('window');

function _renderImgArr(ImgArr) {
    // if (ImgArr) alert(ImgArr);
    return ImgArr.map((item, index) => {
        return (
            <Image key={index} source={{uri: item}} style={{width: 60, height: 60, borderRadius: 30}}/>
        );
    });
}

// noinspection JSAnnotator
export default class RowItem extends Component<{}> {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.rowStyle}>
                        <Text style={{
                            color: this.props.titleColor ? this.props.titleColor : '#888',
                            fontSize: 18
                        }}>{this.props.title}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {
                                this.props.imgArr
                                    ? _renderImgArr(this.props.imgArr) : <View/>
                            }
                            <Text style={{fontSize: 18, color: '#333'}}>{this.props.text}</Text>
                            <IconFont name='icon_right_arrow' style={{color: '#888', fontSize: 18, marginLeft: 5}}/>
                        </View>
                    </View>
                    <View style={{height: 1, width: width, backgroundColor: '#ddd', marginLeft: 15}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        marginHorizontal: 15
    }
});
