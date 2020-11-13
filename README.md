#### Node.js 连接数据库
```js
yarn add mysql -D
```
## sequelize mysql
```js
yarn add -D mysql2
```
```js
yarn add -D sequelize
```
* 测试 connection
```js
async function  testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection()
```
