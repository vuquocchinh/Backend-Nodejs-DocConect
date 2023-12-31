'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('schedules', {
      schedulesId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      curentNumber: {
        type: Sequelize.INTEGER
      },
      maxNumber: {
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      timeType: {
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
    await queryInterface.dropTable('schedules');
  }
};