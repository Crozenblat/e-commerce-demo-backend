'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('order', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        created_at:{
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date()
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  }
};
