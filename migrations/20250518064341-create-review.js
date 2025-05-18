'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('review', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      rating:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      text:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'item',
          key: 'id'
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('review');
  }
};
