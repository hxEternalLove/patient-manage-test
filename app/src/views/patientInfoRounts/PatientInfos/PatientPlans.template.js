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
import { HXButton, GapLine, CollectionItem } from '../../../widgets';
import Theme from '../../../Theme';
import * as API from '../../../resources/api';
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
const PlanType = {};
PlanType.TYPE_MEDICATIONS = 'MEDICATIONS'; //用药方案
PlanType.TYPE_SPORT = 'SPORT'; //运动方案
PlanType.TYPE_REEXAMINE = 'REEXAMINE'; //复查方案
PlanType.TYPE_GAUGE = 'GAUGE'; //监测方案
PlanType.TYPE_DOCTOR_ORDER = 'DOCTOR_ORDER'; //医嘱方案
PlanType.TYPE_DIET = 'DIET'; //饮食
PlanType.TYPE_PATIENT_EDU = 'PATIENT_EDU'; //患教
PlanType.TYPE_QUESTION = 'QUESTION'; //问卷
function getTitleByType (schemeType) {
    switch (schemeType) {
    case PlanType.TYPE_DIET:
        return '饮食';
    case PlanType.TYPE_DOCTOR_ORDER:
        return '医嘱';
    case PlanType.TYPE_GAUGE:
        return '检测';
    case PlanType.TYPE_MEDICATIONS:
        return '服药';
    case PlanType.TYPE_PATIENT_EDU:
        return '患教';
    case PlanType.TYPE_QUESTION:
        return '问卷';
    case PlanType.TYPE_REEXAMINE:
        return '复查';
    case PlanType.TYPE_SPORT:
        return '运动';
    default:
        return '未知';
    }
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
                itemView = (<CollectionItem key={'fun' + i + j} title={getTitleByType(schemeType)} icon={getIconByType(schemeType)} width={width} showCorner/>);
            }
            items.push(itemView);
        }
        rows.push(<View key={'fun' + i} style={[styles.itemRow, i === 0 ? {marginTop: 0} : {}]}>{items}</View>);
    }
    return rows;
}

// noinspection JSAnnotator
export default class PatientPlansTemplate extends Component<{}> {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.funsView}>
                    {_renderRowItem()}
                </View>
                <View style={styles.buttonStyle}>
                    <HXButton style={{flex: 1}} title={'从方案报导入'}/>
                    <GapLine vertical lineColor={'#fff'}/>
                    <HXButton style={{flex: 1}} title={'评估并匹配方案'}/>
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
