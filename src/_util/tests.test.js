const methods = require('./methods')
const FavsCtrl = require('../../server/Controllers/FavsCtrl')
const RestCtrl = require('../../server/Controllers/RestCtrl')
const res = require ('./helpers/expressResponse')()



// describe('Tests for Tiler', ()=>{
// 	let {RandomizePt1, randomNum, cuisineNames, logoutUser} = methods;

	// test('RandomNum should return a number between 1 and 4', ()=>{
	// 	let num = randomNum()
	// 	expect(num).toBeGreaterThan(0)
	// 	expect(num).toBeLessThanOrEqual(4)
	// })

	// test('RandomizePt1 should return a list of 5', ()=>{
	// 	let list = RandomizePt1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50])
	// 	expect(list).toHaveLength(5)
	// })


// })

describe ('Test by Aaron Hatch', () => {

	beforeEach(() => {
		res.reset()
	})

	it('getFavorites should return a favorites', async done => {
		let db={};
		let array = [1,2,3];
		let req = {
			app: {
				get: jest.fn(),
			},
			session: {
				user: '1234'
			}
		}
	
		db.getFavorites = jest.fn(() => {
			return new Promise((resolve, reject) => {
				resolve()
			})
		})
		await FavsCtrl.getFavorites(req, res)
		done()
		expect(res.send).toBeCalledWith(array)
	})

	it('getFavorites should return an error', async done => {
		let db = {};
		let error = "error";
		let req = {
			app: {
				get: jest.fn(),
			},
			session: {
				user: '1234'
			}
		}

		db.getFavorites = jest.fn(() => {
			return new Promise((resolve, reject) => {
				reject()
			})
		})
		await FavsCtrl.getFavorites(req, res)
		done()
		expect(res.send).toBeCalledWith(error)
	})

	it('createFavorite should return a new favorite', async done => {
		let db = {};
		let array = [1, 2, 3];
		
		let req = {
			app: {
				get: jest.fn(),
			},
			session: {
				user: '1234'
			},
			params: {
				restId: '12345'
			},
			body: {
				name: '123',
				phone: '1234',
				lat: '1234',
				lon: '1234'
			}
		}

		db.createFavorite = jest.fn(() => {
			return new Promise((resolve, reject) => {
				resolve()
			})
		})
		await FavsCtrl.createFavorite(req, res)
		done()
		expect(res.send).toBeCalledWith(array)
	})

	it('createFavorites should return an error', async done => {
		let db = {};
		let error = "error";
		let req = {
			app: {
				get: jest.fn(),
			},
			session: {
				user: '1234'
			}
		}

		db.createFavorite = jest.fn(() => {
			return new Promise((resolve, reject) => {
				reject()
			})
		})
		await FavsCtrl.createFavorite(req, res)
		done()
		expect(res.send).toBeCalledWith(error)
	})

	it('changeDesc should return a new description', async done => {
		let db = {};
		let array = [1, 2, 3];

		let req = {
			app: {
				get: jest.fn(),
			},
			session: {
				user: '1234'
			},
			params: {
				restId: '12345'
			},
			body: {
				desc: '1234'
			}
		}

		db.changeDesc = jest.fn(() => {
			return new Promise((resolve, reject) => {
				resolve()
			})
		})
		await FavsCtrl.changeDesc(req, res)
		done()
		expect(res.send).toBeCalledWith(array)
	})

})

//Aaron Harris 


// describe('Tests for Aaron Harris', () => {

// 	test('Get favorites should return a array', async (req, res) => {
// 		let { getFavorites } = FavsCtrl
// 		let db = req.app.get('db')
// 		let favorites = await db.getFavorites(4)
// 		console.log(favorites)
// 	})
// })
