describe("Landing page", ()=>{
	beforeEach(()=>{
		cy.visit('/')
	})

	// it("Finds location", ()=>{
	// 	cy.get("#locator")
	// 		.click()
	// 	cy.get("#latInput")
	// 		.should("be.hidden")
	// 		.should('not.have.value', '')
	// })

	// it("Checks input", ()=>{
	// 	const text = "Salt Lake City"

	// 	cy.get("#cityInput")
	// 		.type(text)
	// 		.should("have.value", text)

	// 	cy.get("#cityBtn")
	// 		.click()
	// })

	it("Selects a price", ()=>{
		cy.get(".dropdown")
			.find(".dropbtn")
			.trigger("mouseover")
		cy.get(".dropdown")
			.find(".dropdown-content")
			.first()
			.click()
	})
})