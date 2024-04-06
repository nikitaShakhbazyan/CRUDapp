const { DataTypes } = require('sequelize');

const productsModel = (sequelize) => {
    return sequelize.define("product", {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }
    });
};

module.exports = productsModel;
