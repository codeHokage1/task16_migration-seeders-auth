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
		await queryInterface.bulkInsert("categories", [
			{
				name: "Shoes",
				description: "Latest and affordable shoes",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Mobile Phones",
				description: "Classy and sleek devices",
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("categories", {
			name: ["Shoes", "Mobile Phones"]
		});
	}
};
