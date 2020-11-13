const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize=new Sequelize('DATABASE1','root','123456',{
    host:`192.168.99.100`,
    dialect:'mysql'
})

class User extends Model{}

User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

const createUserTable=async function(){
    await User.sync({ force: true });
}
createUserTable()