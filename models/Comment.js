const { Model, DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        date_created: {
            type:DataTypes.DATE,
            allowNull: false,
        },

        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id,'
            },
        },
    }, 
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'comment',

    },

);

module.exports = Comment;