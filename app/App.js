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
        sqlite.createTable(sqlite._getSQLiteForm().depForm,
            'depId VARCHAR PRIMARY KEY NOT NULL,' +
            'depNum VARCHAR,' +
            'hospital VARCHAR,' +
            'depName VARCHAR,' +
            'option BLOB,' +
            'vipServiceOption BLOB,' +
            'gitOptions BLOB,' +
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
