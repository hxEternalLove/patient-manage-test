/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { MyApp } from './src/Rounts';

import SQLite from './src/utils/sqlite';
let sqlite = new SQLite();

export default class App extends Component<{}> {
    componentDidMount () {
        sqlite.createTable('DepartmentList',
            'depId INTEGER PRIMARY KEY NOT NULL,' +
            'depNum INTEGER,' +
            'hospital VARCHAR,' +
            'depName BLOB,' +
            'option BLOB,' +
            'vipServiceOption BLOB,' +
            'gitOptions VARCHAR,' +
            'patientCount INTEGER,' +
            'doctorCount INTEGER', []);
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
