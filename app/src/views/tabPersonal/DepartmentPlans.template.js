/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { HXButton, GapLine, CollectionItem, BackButton, HeaderView } from '../../widgets';
import Theme from '../../Theme';
import * as API from '../../resources/api';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});
const COLUMN_COUNT = 4;
const schemeTypes = [
    'MEDICATIONS',
    'SPORT',
    'DIET',
    'REEXAMINE',
    'GAUGE',
    'PATIENT_EDU',
    'DOCTOR_ORDER'
];
function getTitleByType (schemeType) {
    let planType = API.Config.PLAN_TYPES.find((planType) => {
        return planType.type === schemeType;
    });
    return planType ? planType.title : null;
}

function getIconByType (schemeType) {
    let planType = API.Config.PLAN_TYPES.find((planType) => {
        return planType.type === schemeType;
    });
    return planType ? planType.icon : null;
}

function _renderRowItem () {
    let width = (Theme.screen.width - Theme.defaultGap * 2 - Theme.defaultSmallGap * 3) / COLUMN_COUNT;
    let rows = [];
    let rowNum = Math.ceil((schemeTypes.length + 1) / COLUMN_COUNT); // 上舍入
    for (let i = 0; i < rowNum; i++) {
        let items = [];
        for (let j = 0; j < COLUMN_COUNT; j++) {
            let schemeType = schemeTypes[i * COLUMN_COUNT + j];
            let itemView = null;
            if (!schemeType) {
                itemView = (<View key={'fun' + i + j} style={{width: ((Theme.screen.width - Theme.defaultGap * 2 - Theme.defaultSmallGap * 3) / 4)}}/>);
            } else {
                itemView = (<CollectionItem key={'fun' + i + j} title={getTitleByType(schemeType)} icon={getIconByType(schemeType)} width={width}/>);
            }
            items.push(itemView);
        }
        rows.push(<View key={'fun' + i} style={[styles.itemRow, i === 0 ? {marginTop: 0} : {}]}>{items}</View>);
    }
    return rows;
}

// noinspection JSAnnotator
export default class PlansMouldTemplate extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <BackButton handler={navigation}/>,
        tabBarVisible: false,
        headerTitle: <HeaderView style={{alignSelf: 'center'}} headTitle={navigation.state.params ? navigation.state.params.title : '暂无科室'} onPress={() => {}} disTrangle/>
    })
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.funsView}>
                    {_renderRowItem()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Theme.screen.width,
        backgroundColor: Theme.defaultBgColor,
        justifyContent: 'space-between'
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Theme.defaultSmallGap
    },
    funsView: {
        flex: 1,
        marginTop: Theme.defaultGap + Theme.defaultSmallGap,
        paddingHorizontal: Theme.defaultGap,
        backgroundColor: 'transparent'
    },
    buttonStyle: {
        width: Theme.screen.width,
        flexDirection: 'row',
        height: 70,
        position: 'absolute',
        bottom: 0
    }
});
