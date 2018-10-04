const AuthCtrl = require('../../server/Controllers/AuthCtrl')
const axios = require('axios')

describe.skip("Auth0 tests", ()=>{
	// let req={
	// 	query: {code:12345},
	// 	headers:{host:1234}
	// }
	// let res={
	// 	redirect: jest.fn()
	// }
	
	// test('Auth0 should redirect to a user', async ()=>{
	// 	axios.post.mockImplementationOnce(()=>{
	// 		Promise.resolve({data: {access_token:12345234}})
	// 	});
	// 	axios.get.mockImplementationOnce(() =>
	// 		Promise.resolve({
	// 			data: {sub: "github|40439175"}
	// 		})
	// 	);
	// 	const auth0 =  await AuthCtrl.auth(req, res)
	// 	expect(res.redirect).toHaveBeenCalledWith("/#/favorites")
	// })
})
