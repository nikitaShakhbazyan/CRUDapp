const {DataTypes} = require('sequelize')

const contactsModel = (sequelize) => {
    return sequelize.define('contact',{
        name:{
            type : DataTypes.STRING
        },
        surname: {
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            uniqe:true
        },
        date_of_birth: {
            type:DataTypes.INTEGER
        }
    })
}

module.exports = contactsModel