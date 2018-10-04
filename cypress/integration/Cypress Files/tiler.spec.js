describe("Landing page", ()=>{
	beforeEach(()=>{
		cy.viewport(1000,800
		)
		cy.visit('/')

	})

	it("Checks input", ()=>{
		const text = "Salt Lake City"

		cy.get("#cityInput")
			.type(text)
			.should("have.value", text)

		cy.get("#cityBtn")
			.click()
	})

	it("Shows price list then hides price list", ()=>{
		cy.get("#price2")
			.should("not.exist")
		cy.get("#price1")
			.trigger("mouseover")
		cy.get("#price2")
			.should("be.visible")
		cy.get("#price1")
			.should("not.exist")
		cy.get("#price2")
			.trigger("mouseout")
		cy.get("#price2")
			.should("not.exist")
		cy.get("#price1")
			.should("be.visible")
	})

	it("Sets random price", ()=>{
		cy.get("#price1")
			.trigger("mouseover")
		cy.get(".dropdown-content")
			.first()
			.click()
		cy.get(".button2")
			.should("contain","$")
	})
})