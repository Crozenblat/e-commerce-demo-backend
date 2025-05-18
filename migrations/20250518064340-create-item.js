'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('item', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        description:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        sku:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        // Store in pennies to avoid floating point issues with addition for order totals.
        price:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        inventory:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        created_at:{
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date()
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('item');
  }
};
