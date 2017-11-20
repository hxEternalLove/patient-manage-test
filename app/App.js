/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { MyApp } from './src/Rounts';

import SQLite from './src/utils/sqlite';
import * as API from './src/resources/api';

let sqlite = new SQLite();

export default class App extends Component<{}> {
    componentDidMount () {
        /**
         * 科室列表
         */
        sqlite.createTable(sqlite._getSQLiteForm().depForm,
            'depId VARCHAR PRIMARY KEY NOT NULL,' +
            'depNum VARCHAR,' +
            'hospital VARCHAR,' +
            'depName VARCHAR,' +
            'option BLOB,' +
            'vipServiceOption BLOB,' +
            'gitOptions BLOB,' +
            'patientCount INTEGER,' +
            'doctorCount INTEGER', [])
            .then(() => {
                sqlite.listTableInfo(sqlite._getSQLiteForm().depForm)
                    .then((result) => {
                        if (result.length <= 0) {
                            API.UserDepartmentList.map(async (item) => {
                                await sqlite.addData(sqlite._getSQLiteForm().depForm, item);
                            });
                        }
                    }).catch();
            });
        /**
         * 科室患者
         */
        sqlite.createTable(sqlite._getSQLiteForm().depPatientForm,
            'userId VARCHAR NOT NULL,' +
            'depId VARCHAR NOT NULL,' +
            'name VARCHAR,' +
            'mobile VARCHAR,' +
            'identityCode VARCHAR,' +
            'gender VAECHAR,' +
            'birthDate VARCHAR,' +
            'avatar BLOB,' +
            'relateInfo BLOB,' +
            'CONSTRAINT pk_DepPatientId PRIMARY KEY (userId,depId)', []);
    }

    componentWillUnmount () {
        sqlite.close();
    }

    render() {
        return (
            <MyApp/>
        );
    }
}
