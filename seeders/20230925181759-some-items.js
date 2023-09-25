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
		await queryInterface.bulkInsert("items", [
			{
				name: "Lebron XX",
				description: "Latest Lebron James shoe",
				price: 200,
				size: "medium",
				category_id: "11b2212e-7225-41cd-a873-8becfc22f65e",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Jordan 4s",
				description: "Class. Style. Comfort.",
				price: 370,
				size: "medium",
				category_id: "11b2212e-7225-41cd-a873-8becfc22f65e",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Curry 8",
				description: "Latest Stephen Curry shoe",
				price: 300,
				size: "medium",
				category_id: "11b2212e-7225-41cd-a873-8becfc22f65e"
			},
			{
				name: "Devin Booker GTCut",
				description: "Move like Devin Booker",
				price: 250,
				size: "large",
				category_id: "11b2212e-7225-41cd-a873-8becfc22f65e",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Jordan Why Not 3.0",
				description: "The best shoe to dunk the ball",
				price: 400,
				size: "small",
				category_id: "11b2212e-7225-41cd-a873-8becfc22f65e",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Samsumg Galaxy S21 Ultra",
				description: "Too sleek to be true",
				price: 700,
				size: "n/a",
				category_id: "e28f5319-4366-46f9-a9c0-d307b0d55755",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Redmi Note 10 Pro",
				description: "Not sure there's anyone betetr",
				price: 230,
				size: "n/a",
				category_id: "e28f5319-4366-46f9-a9c0-d307b0d55755",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Google Pixel 7",
				description: "Function. Speed. Style.",
				price: 780,
				size: "n/a",
				category_id: "e28f5319-4366-46f9-a9c0-d307b0d55755",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Samsumg Galaxy S22 Ultra",
				description: "Too sleek to be true 22",
				price: 700,
				size: "n/a",
				category_id: "e28f5319-4366-46f9-a9c0-d307b0d55755",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Samsumg Galaxy S23 Ultra",
				description: "Too sleek to be true 23",
				price: 700,
				size: "n/a",
				category_id: "e28f5319-4366-46f9-a9c0-d307b0d55755",
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
	}
};
