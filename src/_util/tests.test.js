const methods = require('./methods')
const AuthCtrl = require('../../server/Controllers/AuthCtrl')
const FavsCtrl = require('../../server/Controllers/FavsCtrl')
const RestCtrl = require('../../server/Controllers/RestCtrl')
const axios = require('axios')

describe('Tests for Tiler', () => {
	let { RandomizePt1, randomNum, cuisineNames, logoutUser } = methods;

	test('RandomNum should return a number between 1 and 4', () => {
		let num = randomNum()
		expect(num).toBeGreaterThan(0)
		expect(num).toBeLessThanOrEqual(4)
	})

	test('RandomizePt1 should return a list of 5', () => {
		let list = RandomizePt1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50])
		expect(list).toHaveLength(5)
	})


})
describe('Tests for Aaron Harris', () => {

	test('Get favorites should return a array', async (req, res) => {
		let { getFavorites } = FavsCtrl
		let db = req.app.get('db')
		let favorites = await db.getFavorites(4)
		console.log(favorites)
	})
})