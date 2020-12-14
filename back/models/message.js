const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class Message extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(30),
                allowNull: false,//필수값으로 설정
                unique: true,
            },
            message: {
                type: DataTypes.STRING(300),
                allowNull: false,//필수값으로 설정
            },
        },
            {
                modelName: 'Message',
                tableName: 'messages',
                charset: 'utf8',
                collate: 'utf8_general_ci',
                sequelize,
            });
    }
    static associate(db) { }
};