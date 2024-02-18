const { Sequelize, DataTypes, Model } = require('sequelize');



// all this wont create a table , u will have to do that maually.

const Blog = sequelize.define('Blog', {// this is the name of the table
    
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING(1234)
    },
    desc: {
        type: DataTypes.TEXT
    }

});


Blog.sync()
    .then(() => {
        console.log('Blog Table Created!');
    })
    .catch((err) => {
        console.log('Table not created', err);
    });
;

module.exports = Blog;
