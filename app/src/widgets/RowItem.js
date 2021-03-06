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
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={{
                                color: this.props.titleColor ? this.props.titleColor : '#888',
                                fontSize: 20
                            }}>{this.props.title}</Text>
                            {
                                this.props.subTitle
                                    ? <Text style={{color: Theme.textColor, marginLeft: 10}}>|  {this.props.subTitle}</Text> : null
                            }
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {
                                this.props.imgArr
                                    ? _renderImgArr(this.props.imgArr) : <View/>
                            }
                            <Text style={{fontSize: 17, color: this.props.textColor ? this.props.textColor : '#333'}}>{this.props.text}</Text>
                            <IconFont name='icon_right_arrow' style={{color: '#888', fontSize: 18, marginLeft: 5}}/>
                        </View>
                    </View>
                    <View style={{height: 1, width: width, backgroundColor: '#ddd', marginLeft: this.props.gapLeft ? this.props.gapLeft : 15}}/>
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
