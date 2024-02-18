const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('biv78zhi9skw1y3mqbrw', 'uode4egy1yufpxrv', '5zJoxvoowQ41g1w4jwAz', {
    host: 'biv78zhi9skw1y3mqbrw-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});


const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = connectDB;
global.sequelize = sequelize;


// global object in case of browser is window;
// global object in case of node js is global;
