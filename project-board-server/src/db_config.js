//import mysql from 'mysql';
var mysql = require('mysql');
const HOST = 'localhost';
const USER = 'root';
const PW = 'password';
const database = 'project';

export const conn = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PW,
    database: database
});

