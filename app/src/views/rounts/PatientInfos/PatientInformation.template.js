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

const COLUMN_COUNT = 4;

const MeasureDataType = {};
MeasureDataType.TYPE = {
    TYPE_SPORT: 'sport', //运动
    TYPE_HEART: 'heart', //心率
    TYPE_BG: 'bg', //血压
    TYPE_BP: 'bp', //血糖
    TYPE_SCREENING: 'screening', //筛查
    TYPE_LIUYAN: 'leave_msg', //留言
    TYPE_TAKE_MEDICINE: 'take_medicine', //吃药打卡
    TYPE_SPORT_PUNCHOUT: 'sports', //运动筛查
    TYPE_SELF_EFFICACY: 'self_efficacy'
};

const DEFAULT_DATA = [
    {planName: '心率', id: 'patientHeartRate', cornerStyle: '', source: 'icon_heart_rate', type: MeasureDataType.TYPE.TYPE_HEART},
    {planName: '计步', id: 'patientSport', cornerStyle: '', source: 'icon_sport', type: MeasureDataType.TYPE.TYPE_SPORT},
    {planName: '血压', id: 'patientBloodPressure', cornerStyle: '', source: 'icon_blood_pressure', type: MeasureDataType.TYPE.TYPE_BG},
    {planName: '血糖', id: 'patientBloodSugar', cornerStyle: '', source: 'icon_blood_sugar', type: MeasureDataType.TYPE.TYPE_BP},
    {planName: '服药', id: 'punchout', cornerStyle: '', source: 'icon_punchout', type: MeasureDataType.TYPE.TYPE_TAKE_MEDICINE},
    {planName: '运动', id: 'sportPunchOut', cornerStyle: '', source: 'icon_sport_punchout', type: MeasureDataType.TYPE.TYPE_SPORT_PUNCHOUT},
    {planName: '自我效能', id: 'selfEfficacy', cornerStyle: '', source: 'icon_efficacy', type: MeasureDataType.TYPE.TYPE_SELF_EFFICACY},
    {planName: '留言', id: 'liuyan', cornerStyle: '', source: 'icon_voicemail', type: MeasureDataType.TYPE.TYPE_LIUYAN}
];

function _renderRowItem () {
    let width = (Theme.screen.width - Theme.defaultGap * 2 - Theme.defaultSmallGap * 3) / COLUMN_COUNT;
    let rows = [];
    let rowNum = Math.ceil((DEFAULT_DATA.length + 1) / COLUMN_COUNT); // 上舍入
    for (let i = 0; i < rowNum; i++) {
        let items = [];
        for (let j = 0; j < COLUMN_COUNT; j++) {
            let schemeType = DEFAULT_DATA[i * COLUMN_COUNT + j];
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
export default class PatientInformationTemplate extends Component<{}> {
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
