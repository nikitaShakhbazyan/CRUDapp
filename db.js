const { Sequelize } = require('sequelize');
const productsModel = require('./Products');
const contactsModel = require('./Contacts')
const dotenv = require('dotenv').config()
const pass = process.env.DB_PASS

const connectionProducts = async () => {
    const sequelize = new Sequelize('finall_project', 'postgres', pass, {
        host: "localhost", 
        dialect: 'postgres'
    });
    let Product = null;
    try {
        await sequelize.authenticate();
        console.log("Success!");
        Product = productsModel(sequelize);
        await sequelize.sync(); 
        console.log("Tables created!"); 
    } catch (err) {
        console.error("Error!", err);
    }
}

const connectionContacts = async () => {
    const sequelize = new Sequelize('finall_project','postgres',pass,{
        host: "localhost", 
        dialect: 'postgres'
    })
    let Contacts = null;
    try {
        await sequelize.authenticate();
        console.log('Success for contacts!')
        Contacts=contactsModel(sequelize);
        await sequelize.sync();
        console.log("Tables for Contacts created!")

    } catch(err) {
        console.error('err!!',err)
    }
}

module.exports = 
    connectionContacts,
    connectionProducts

