const AuthCtrl = require('../../server/Controllers/AuthCtrl')
const axios = require('axios')


test('Auth0 should redirect to a user', ()=>{
	axios.get.mockImplementationOnce(() =>
		Promise.resolve({
			data: {sub: github|40439175}
		})
	);
	axios.post.mockImplementationOnce(()=>{
		Promise.resolve({data: {access_token:12345234}})
	});
	const auth0 =  AuthCtrl.auth()
	expect(auth0)
})
