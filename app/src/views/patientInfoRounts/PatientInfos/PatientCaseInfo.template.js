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
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import moment from '../../../utils/moment';

import { RowItem, HXButton, GapLine }from '../../../widgets';
import * as API from '../../../resources/api';
function _renderCaseItem(info) {
    let CaseImgs = [];

    CaseImgs = info.item.caseAttache.map((item, index) => {
        // console.log('🌺',JSON.stringify(item.src),'👌');

        return (<Image key={item.objectId + index} source={{uri: item.src}}
            style={{width: 100, height: 100, marginRight: 5}}/>);
    });
    return (<TouchableOpacity onPress={() => {
    }}>
        <View style={{flex: 1, marginVertical: 10, marginLeft: 15}}>
            <Text style={{color: '#888'}}>{moment(info.item.caseTime).format('YYYY-MM-DD')}</Text>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginVertical: 5}}>
                {CaseImgs}
            </View>
            <Text style={{fontSize: 16, color: '#333'}}>{info.item.caseDesc}</Text>
        </View>
    </TouchableOpacity>);
}

// noinspection JSAnnotator
export default class PatientManageTemplate extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <RowItem title="头像" imgArr={[API.UserExmaple.avatar.uri]}/>
                    <RowItem title="姓名" text={API.UserExmaple.name}/>
                    <RowItem title="身份证号" text={API.UserExmaple.identity_code}/>
                    <RowItem title="性别" text={API.UserExmaple.gender}/>
                    <RowItem title="生日" text={API.UserExmaple.birthday}/>
                    <RowItem title="手机号" text={API.UserExmaple.phone} noArrow/>
                    <RowItem title="智能设备"/>
                    <RowItem title="责任医生/护士分组" titleColor='red' text="马艳马"/>
                    <RowItem title="分类" text={API.UserExmaple.category}/>
                    <RowItem title="科别" text={API.UserExmaple.department}/>
                    <RowItem title="PID" text={API.UserExmaple.pid}/>
                    <RowItem title="病历号" text={API.UserExmaple.case_no}/>
                    <RowItem title="住院床号" text={API.UserExmaple.hos_no}/>
                    <RowItem title="入院时间" text={API.UserExmaple.admission_time}/>
                    <RowItem title="出院时间" text={API.UserExmaple.leave_time}/>
                    <RowItem title="家属电话" text={API.UserExmaple.family_mobile}/>
                    <RowItem title="备注" text={API.UserExmaple.remark}/>
                    <RowItem title="诊疗记录" style={{backgroundColor: '#dfdfdf'}}/>
                    <FlatList
                        data={API.UserCaseList}
                        renderItem={_renderCaseItem}
                        ItemSeparatorComponent={() => <GapLine style={{marginLeft: 15}}/>}
                        keyExtractor={(item, index) => item.caseId + index}
                        ListFooterComponent={() => <HXButton title={'添加诊疗记录'}/>}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    welcome: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
