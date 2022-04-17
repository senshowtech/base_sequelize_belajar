"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "products",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        nama_product: {
          type: Sequelize.STRING,
        },
        deskripsi: {
          type: Sequelize.STRING,
        },
        harga: {
          type: Sequelize.INTEGER,
        },
        qty: {
          type: Sequelize.INTEGER,
        },
        kurir: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      { timestamps: false }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
