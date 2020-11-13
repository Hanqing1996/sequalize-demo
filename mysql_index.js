var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.99.100',
    user     : 'root',
    password : '123456'
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS DATABASE1 DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;', function (error, results, fields) {
    if (error) throw error;
    console.log('The results are: ', results);
});

connection.end();