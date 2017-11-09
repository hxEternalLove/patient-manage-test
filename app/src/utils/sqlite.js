/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import SQLiteStore from 'react-native-sqlite-storage';
SQLiteStore.DEBUG(true);
SQLiteStore.enablePromise(true);

const database_name = 'Hospital.db';
const database_version = '1.0';
const database_displayname = 'MySQLite';
const database_size = -1;
let db;

export default class SQLite extends Component<{}> {
    render () {
        return null;
    }

    componentWillUnmount () {
        if (db) {
            db.close();
            this._successCB('clone');
        } else {
            console.log('SQLiteStorage not open');
        }
    }

    // 报错
    _errorCB(err) {
        console.log('\n❌error:', err, '❌\n');
        return false;
    }

    // 成功
    _successCB(message) {
        console.log('\n✅SQL executed ...', message, '✅');
    }

    /**
     * 打开数据库
     * @param name 数据库名
     * @param version 数据库版本
     */
    async open(name, version) {
        db = await SQLiteStore.openDatabase(
            name || database_name,
            version || database_version,
            'MySQLite',
            -1,
            () => {
                this._successCB('open');
            },
            (err) => {
                this._errorCB('open', err);
            });
        return db;
    }

    /**
     * 建表
     * @param tableName 表单名
     * @param sql   SQL 语句
     * @param param 参数字典
     */
    async createTable(tableName, sql, param, name, version) {
        if (!db) {
            await this.open(name, version);
        }
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS ' + tableName + '(' +
                sql +
                ');'
                , param, () => {
                this._successCB('executeSql');
            }, (err) => {
                this._errorCB('executeSql', err);
            });
        }, (err) => {
            this._errorCB('transaction', err);
        }, () => {
            this._successCB('transaction');
        });
    }

    // 关闭数据库
    close() {
        if (db) {
            this._successCB('close');
            db.close();
        } else {
            console.log('SQLiteStorage not open');
        }
        db = null;
    }

    /**
     * 增加数据
     * @param tableName
     * @param sql
     * @param param
     * @returns {Promise}
     */
    addData(tableName, sql, param) {
        return new Promise((resolve, reject) => {
            if (db) {
                db.executeSql(
                    'INSERT INTO ' + tableName + sql,
                    param,
                    () => {
                        this._successCB('addData');
                        resolve();
                    },
                    (err) => {
                        this._errorCB('addData', err);
                        reject(); //eslint-disable-line
                    });
            } else {
                reject('db not open');//eslint-disable-line
            }
        });
    }

    deleteData(tableName, sql, param) {
        return new Promise((resolve, reject) => {
            if (db) {
                db.executeSql('DELETE FROM ' + tableName + sql, param,
                    () => {
                        resolve();
                        this._successCB('deleteData');
                    }, (err) => {
                        reject(err);
                        this._errorCB('deleteData', err);
                    });
            } else {
                reject('db not open');//eslint-disable-line
            }
        });
    }

    updateData(tableName, sql, param) {
        return new Promise((resolve, reject) => {
            if (db) {
                db.executeSql(
                    'UPDATE ' + tableName + sql, param,
                    (results) => {
                        resolve('修改成功');
                        this._successCB('updateData');
                    }, (err) => {
                        reject(err);
                        this._errorCB('updateData', err);
                    });
            } else {
                reject('db not open');//eslint-disable-line
            }
        });
    }

    /**
     * 据条件查询表单
     * @param tableName 表单名
     * @param sql 查询条件
     * @param param 参数字典
     * @returns {Promise}
     */
    findByRequire(tableName, sql, param) {
        return new Promise((resolve, reject) => {
            if (db) {
                db.executeSql('SELECT * FROM ' + tableName + sql, param,
                    (results) => {
                        if (results.rows.length > 0) {
                            resolve(results.rows.item(0));
                        } else {
                            reject('not fid item');//eslint-disable-line
                        }
                        this._successCB('findByRequire');
                    }, (err) => {
                        reject(err);
                        this._errorCB('findByRequire', err);
                    });
            } else {
                reject('db not open');//eslint-disable-line
            }
        });
    }

    /**
     * 查看表单全部信息
     * @param tableName 表单名
     * @returns {Promise}
     */
    listTableInfo(tableName) {
        return new Promise((resolve, reject) => {
            if (db) {
                db.executeSql('SELECT * FROM ' + tableName,
                    [], (results) => {
                        var len = results.rows.length;
                        var datas = [];
                        for (let i = 0; i < len; i++) {
                            datas.push(results.rows.item(i));
                        }
                        resolve(datas);
                        this._successCB('listTableInfo');
                    }, (err) => {
                        reject(err);
                        this._errorCB('listTableInfo', err);
                    });
            } else {
                reject('db not open');//eslint-disable-line
            }
        });
    }
}
