const methods = require('./methods')
const AuthCtrl = require('../../server/Controllers/AuthCtrl')
const FavsCtrl = require('../../server/Controllers/FavsCtrl')
const RestCtrl = require('../../server/Controllers/RestCtrl')
const res = require('./helpers/expressResponse')()
const yelp = require('yelp-fusion');



describe('Tests for Tiler', ()=>{
	let {RandomizePt1, randomNum} = methods;
	let {changeDesc, deleteFavorite} = FavsCtrl;

	beforeEach(() => {
		res.reset()
	})

	test('RandomNum should return a number between 1 and 4', ()=>{
		let num = randomNum()
		expect(num).toBeGreaterThan(0)
		expect(num).toBeLessThanOrEqual(4)
	})

	test('RandomizePt1 should return a list of 5', ()=>{
		let list = RandomizePt1([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50])
		expect(list).toHaveLength(5)
	})

	test("changeDesc error should return an error", async done=>{
		let db={};
		let error = "error";
		let req = {
			body: { desc:"here's a description"},
			app: {
				get: jest.fn(),
			},
			params: {restId: "restaurant id"},
			session: {
				user: {id:'1234'}
			}
		}
		db.updateDesc= jest.fn(()=>{
			return new Promise((resolve, reject) => {
				reject()
			})
		})
		await changeDesc(req, res)
		done()
		expect(res.status).toBeCalledWith(500)
	})

	it('deleteFavorite should send an array', async done => {
		let db={};
		let array = [1,2,3];
		let req = {
			body: { desc:"here's a description"},
			app: {
				get: jest.fn(),
			},
			params: {restId: "restaurant id"},
			session: {
				user: {id:'1234'}
			}
		}
	
		db.deleteFavorite = jest.fn(() => {
			return new Promise((resolve, reject) => {
				resolve()
			})
		})
		await FavsCtrl.getFavorites(req, res)
		done()
		expect(res.status).toBeCalledWith(200)
	})

	test("deleteFavorite error should return an error", async done=>{
		let db={};
		let req = {
			body: { desc:"here's a description"},
			app: {
				get: jest.fn(),
			},
			params: {restId: "restaurant id"},
			session: {
				user: {id:'1234'}
			}
		}
		db.deleteFavorite= jest.fn(()=>{
			return new Promise((resolve, reject) => {
				reject()
			})
		})
		await deleteFavorite(req, res)
		done()
		expect(res.status).toBeCalledWith(500)
	})

})

describe ('Test by Aaron Hatch', () => {

	beforeEach(() => {
		res.reset()
	})
	it('getCuisine should return a list of cuisines', async done => {
		let db = {};
		let array = [1, 2, 3];
		let req = {
			app: {
				get: jest.fn(),
			}
		}
		db.getCuisine = jest.fn(() => {
			return new Promise((resolve, reject) => {
				resolve()
			})
		})
		await RestCtrl.getCuisine(req, res)
		done()
		expect(res.send).toBeCalledWith(array)
	})
	it('getCuisine should return an error', async done => {
		let db = {};
		let error = "error";
		let req = {
			app: {
				get: jest.fn(),
			}
		}

		db.getCuisine = jest.fn(() => {
			return new Promise((resolve, reject) => {
				reject()
			})
		})
		await RestCtrl.getCuisine(req, res)
		done()
		expect(res.send).toBeCalledWith(error)
	})

	it('getUser should return a user', async done => {
		let req = {
			session: {
				user: { name: 'Aaron' }
			}
		}
		AuthCtrl.getUser(req, res)
		done()
		expect(res.send).toBeCalledWith(req.session.user.name)
	})

	it('getUser should return a error', async done => {
		let req = {
			session: {
		}
	}
		AuthCtrl.getUser(req, res)
		done()
		expect(res.status).toBeCalledWith(500)
	})
	it('logout should logout user', async done => {
		let req = {
			session: {
				destroy: jest.fn()
			}
		}
		AuthCtrl.logout(req, res)
		done()
		expect(res.send).toBeCalledWith(200)
	})

})

