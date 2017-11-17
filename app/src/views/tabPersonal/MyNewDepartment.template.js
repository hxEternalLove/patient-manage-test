/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList, TouchableOpacity, Text
} from 'react-native';
import { RowItem, BackButton, HeaderView } from '../../widgets';
import Theme from '../../Theme';
import * as API from '../../resources/api';

function _renderItem(info, navigation) {
    return (<RowItem title={info.item.depName} titleColor='#333' text={`包含${8}项方案`} textColor='#666' subTitle={'主管'} onPress={() => {
        navigation.navigate('PlanMouldType', {title: info.item.depName});
    }}/>);
}

function _renderHeadView (navigation) {
    return (<View>
        <View style={styles.headLineStyle}/>
        <RowItem title='加入科室' titleColor={Theme.titleColor} text='加入科室' textColor={Theme.textColor}/>
        <RowItem title={'创建新的科室'} titleColor={Theme.titleColor} text={'创建一个科室'} textColor={Theme.textColor} gapLeft={-1}
            onPress={() => {
                navigation.navigate('creatDepartment');
            }}/>
        <View style={{justifyContent: 'center', backgroundColor: '#f2f2f2', width: Theme.screen.width, height: 50, borderColor: 'transparent', borderWidth: 1, borderBottomColor: Theme.lineColor}}>
            <Text style={{color: Theme.textColor, marginHorizontal: Theme.leftGap, fontSize: 17}}>已加入的科室列表</Text>
        </View>
    </View>);
}
// noinspection JSAnnotator
export default class PlanListTemplate extends Component<{}> {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <BackButton handler={navigation}/>,
        tabBarVisible: false,
        headerTitle: '我的科室'
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            planData: []
        };
    }

    componentDidMount () {
        this._loadData();
    }

    _loadData() {
        this.setState({
            planData: API.UserDepartmentList
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.planData.length > 0
                        ? <FlatList data={this.state.planData}
                            renderItem={(info) => _renderItem(info, this.props.navigation)}
                            ListHeaderComponent={_renderHeadView(this.props.navigation)}
                            keyExtractor={(item, index) => item.taskId + '_KEY_' + index}/>
                        : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text style={{fontSize: 20, color: '#888'}}>暂无数据</Text></View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white'
    },

    headLineStyle: {
        flex: 1,
        height: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
});
