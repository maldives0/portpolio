const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class Message extends Model {
    static init(sequelize) {
        return super.init({
            email: {
                type: DataTypes.STRING(30),
                allowNull: false,//필수값으로 설정
                unique: true,
            },
            nickname: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            snsId: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            provider: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: 'local',
            },
            menuKey: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: '1',
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

};