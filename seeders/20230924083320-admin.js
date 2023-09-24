const bcrypt = require("bcrypt");
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"users",
			[
				{
          id: "49afd399-8c6d-4d9d-b839-2d196b1972b9",
					name: "farhan",
          email: "farhan1@gmail.com",
          password: await bcrypt.hash("123456", 10),
          gender: "male",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
				}
			]
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
    await queryInterface.bulkDelete('users', {
      email: 'farhan1@gmail.com'
    })
	}
};
