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
    FlatList,
    TouchableOpacity
} from 'react-native';
import * as API from '../../resources/api';
import {MsgFrame, GapLine, Triangle, PatientFrame, HeaderView} from '../../widgets';
import IconFont from '../../resources/fonts/IconFont';
import Theme from '../../Theme';
import SQLite from '../../utils/sqlite';
let sqlite = new SQLite();

function _renderItem(info, navigation) {
    return <PatientFrame info={info} handler={navigation}/>;
}

async function getPatientByDepId (user, depId) {
    let patientList = [];
    await sqlite.findByRequire(sqlite._getSQLiteForm().depPatientForm, 'depId=?', [depId])
        .then((result) => {
            patientList = result;
        }).catch((reject) => {
            patientList = user._getDepPatientList(depId);
            patientList.map(async (item) => {
                await sqlite.addData(sqlite._getSQLiteForm().depPatientForm, item)
                    .then((result) => {
                        // console.log('🐯🐯🐯333');
                    }).catch((err) => {
                        // console.log('🐯🐯🐯444', err);
                    });
            });
        });
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', depId);
    return patientList;
}

function _renderDepartView (info, navigation, user) {
    if (!info) {
        return <View/>;
    }

    return (<TouchableOpacity onPress={async () => {
        navigation.setParams({
            changTitle: info.item.depName
        });
        navigation.state.params.showDepartView();

        user.setState({
            depPatientList: await getPatientByDepId(user, info.item.depId)
        });

        // console.log('@@@@@@@@@@@@@@@@@@@@@ user.state @@@@@@@@@@@@@@@@@@@@@@@@@@@', user.state.depPatientList);
    }}>
        <View style={{marginTop: 5, alignItems: 'center', justifyContent: 'center'}} key={info.item.depNum + info.index}>
            <Text style={{color: 'white', fontSize: 20, marginVertical: 10}}>{info.item.depName}</Text>
        </View>
    </TouchableOpacity>);
}

// noinspection JSAnnotator
export default class NotificationTemplate extends Component<{}> {
    static navigationOptions = ({navigation}) => {
        let headTitle = '科室';
        return ({
            headerLeft: <TouchableOpacity style={{backgroundColor: '#3db1b2', marginLeft: 15}} onPress={() => {
                console.log('@@@@@@', navigation);
                // navigation.navigate('PatHome');
            }}><Text style={{color: 'white'}}>我的收藏</Text></TouchableOpacity>,

            headerTitle: <HeaderView style={{alignSelf: 'center'}} headTitle={navigation.state.params ? navigation.state.params.changTitle : '暂无科室'} onPress={() => {
                // 读取 navigation 方法
                navigation.state.params.showDepartView();
            }}/>,

            headerRight: <TouchableOpacity style={{backgroundColor: '#3db1b2', marginRight: 15}} onPress={() => {
                console.log('@@@@@@', navigation);
                // navigation.navigate('PatHome');
            }}><Text style={{color: 'white'}}>新建患者</Text></TouchableOpacity>
        });
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            notifyData: [], //API.IMData,
            showDepartment: false,
            depList: [], //API.UserDepartmentList,
            depPatientList: []
        };
        // console.log('🐯🐯🐯222', this.state.depList);
    }

    async _loadData() {
        await sqlite.listTableInfo(sqlite._getSQLiteForm().depForm)
            .then((result) => {
                if (result.length <= 0) {
                    return;
                }
                this.setState({
                    depList: result
                });
            });
        // console.log('🐯🐯🐯111', this.state.depList);
    }

    _getDepPatientList(depId) {
        switch (depId) {
        case '22bpdmj2tcr4jfda497jmq55heDEP':
            return API.UserPatientList1;
        case '22bpjlehpqrtf2jqo85aaqg7pvDEP':
            return API.UserPatientList2;
        case '22e1f3nldajsj3upj3bcdg3d5tDEP':
            return API.UserPatientList3;
        case '22e1f5bumi4s3fi9n2rl3fdqd0DEP':
            return API.UserPatientList4;
        case '22f3ds08dgni02nbe87esvfas2DEP':
            return API.UserPatientList5;
        case '22lhorcihr966fdp78m6of986eDEP':
            return API.UserPatientList6;
        }
    }

    async componentDidMount () {
        await this._loadData();

        // console.log('🐯🐯🐯222', this.state.depList[0]);

        if (this.state.depList !== null) {
            // 有数据 去获取数据
            await sqlite.findByRequire(sqlite._getSQLiteForm().depPatientForm, 'depId=?', [this.state.depList[0].depId])
                .then((result) => {
                    this.setState({
                        depPatientList: result
                    });
                    // console.log('@@ 查找 depId @@', result);
                }).catch(() => {
                    let patientList = this._getDepPatientList(this.state.depList[0].depId);
                    this.setState({
                        depPatientList: patientList
                    });
                    patientList.map(async (item) => {
                        await sqlite.addData(sqlite._getSQLiteForm().depPatientForm, item)
                            .then((result) => {
                                // console.log('🐯🐯🐯333');
                            }).catch((err) => {
                                // console.log('🐯🐯🐯444', err);
                            });
                    });
                });
        } else {
            // 没有数据制造数据
            let patientList = this._getDepPatientList(this.state.depList[0].depId);
            this.setState({
                depPatientList: patientList
            });
            patientList.map(async (item) => {
                await sqlite.addData(sqlite._getSQLiteForm().depPatientForm, item)
                    .then((result) => {
                        // console.log('🐯🐯🐯333');
                    }).catch((err) => {
                        // console.log('🐯🐯🐯444', err);
                    });
            });
        }
        // 给 navigation 注册 方法属性
        this.props.navigation.setParams({
            changTitle: this.state.depList[0] ? this.state.depList[0].depName : '',
            showDepartView: () => {
                this._showDepartment();
            }
        });
    }

    _showDepartment() {
        this.setState({
            showDepartment: !this.state.showDepartment
        });
    }

    render() {
        console.log('@@@@@@@@@@@@@@@@@@@@@@  render  @@@@@@@@@@@@@@@@@@@@@@@@@@');
        return (
            <View style={styles.container}>
                <GapLine lineWidth={15} lineColor={'#f7f7f7'}/>
                <TouchableOpacity onPress={() => {}}>
                    <View style={{height: 50, flexDirection: 'row', alignItems: 'center', borderColor: '#ddd', borderWidth: 1}}>
                        <IconFont name={'icon_search'} style={{fontSize: 18, marginLeft: 5, color: '#888'}}/>
                        <Text style={{fontSize: 18, color: '#888', marginLeft: 5}}>分类查看</Text>
                    </View>
                </TouchableOpacity>
                <GapLine lineWidth={15} lineColor={'#f7f7f7'}/>

                <FlatList data={this.state.depPatientList}
                    renderItem={(info) => _renderItem(info, this.props.navigation)}
                    ItemSeparatorComponent={() => <GapLine/>}
                    keyExtractor={(item, index) => item.userId + '_KEY_' + index}/>

                {
                    this.state.showDepartment ? <TouchableOpacity style={{flex: 1, position: 'absolute'}} onPress={() => { this.setState({ showDepartment: false }); }}><View style={{flex: 1, alignItems: 'center', width: Theme.screen.width, height: Theme.screen.height}}>
                        <Triangle/>
                        <View style={{backgroundColor: Theme.defaultColor, borderRadius: 5, width: Theme.screen.width / 3, height: Theme.screen.height / 3}}>
                            <FlatList data={this.state.depList}
                                renderItem={(info) => _renderDepartView(info, this.props.navigation, this)}
                                ItemSeparatorComponent={() => <GapLine lineColor={'#fff'}/>}
                                keyExtractor={(item, index) => item.depId + '_DEPKEY_' + index}/>
                        </View>
                    </View></TouchableOpacity> : <View/>
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
        backgroundColor: '#fff'
    },

    headLineStyle: {
        flex: 1,
        height: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
});
