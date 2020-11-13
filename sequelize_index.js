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

const createTable=async function(){
    await User.sync({ force: true });
}
// createTable()

const dropTable=async function(){
    await User.drop()
}
// dropTable()


const insertRecord=async function () {
    const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
    console.log("Jane", jane);
}

// insertRecord()


const findRecords=async function(){
    const records=await User.findAll()
    console.log("All users:", JSON.stringify(records, null, 2));
    
}
// findRecords()

const deleteRecord=async function(){
    const result=await User.destroy({
        where: {
            firstName: "Jane"
        }
    });
    console.log(result)
}
// deleteRecord()
