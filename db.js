const { Sequelize } = require('sequelize');
const productsModel = require('./Products');

const connection = async () => {
    const sequelize = new Sequelize('finall_project', 'postgres', 'nickshakh', {
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

module.exports = connection;
