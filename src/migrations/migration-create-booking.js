'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            typeStatus: {
                type: Sequelize.STRING
            },
            keyStatus: {
                type: Sequelize.STRING
            },
            memberId: {
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE
            },
            typeTime: {
                type: Sequelize.STRING
            },
            keyTime: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Bookings');
    }
};