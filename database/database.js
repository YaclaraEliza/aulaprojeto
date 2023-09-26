    
    const Sequelize = require("sequelize");

    const connection = new Sequelize("yaclara", "root", 
    "", { 
        host: 'localhost',
        dialect: 'mysql'
    }
    ) 
    module.exports = connection;