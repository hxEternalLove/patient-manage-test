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
import { HXButton, GapLine, CollectionItem } from '../../widgets';
import Theme from '../../Theme';

const COLUMN_COUNT = 4;
const schemeTypes = [
    {planName: '方案模版', id: 'departmentPlans', needChoose: true, source: 'icon_myplan'},
    {planName: '方案包', id: 'hospitalSchemaPackage', needChoose: true, source: 'icon_plan_package'},
    {planName: '患者预约', id: 'patientConvention', source: 'icon_appointment'},
    {planName: '通知', id: 'theMessage', source: 'icon_notification'},
    {planName: '我的科室', id: 'myNewDepartment', source: 'icon_department'},
    {planName: '出诊时间', id: 'visitTimeSettings', needChoose: true, source: 'icon_visiting_time'},
    {planName: '消息群发', id: 'massMessages', needChoose: true, source: 'icon_message_group'},
    {planName: '个人中心', id: 'myCenter', source: 'icon_mycenter'},
    {planName: '二维码', id: 'departmentQrCode', needChoose: true, source: 'icon_qrcode'}
];

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
                itemView = (<CollectionItem key={'fun' + i + j} title={schemeType.planName} icon={schemeType.source} width={width}/>);
            }
            items.push(itemView);
        }
        rows.push(<View key={'fun' + i} style={[styles.itemRow, i === 0 ? {marginTop: 0} : {}]}>{items}</View>);
    }
    return rows;
}

// noinspection JSAnnotator
export default class PersonalTemplate extends Component<{}> {
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
    }
});
