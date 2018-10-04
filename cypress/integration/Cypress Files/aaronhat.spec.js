// before each => visit site. it should load image on module 

// ''. it should display cuisine button. On click button, display list of 20 cuisines.

// cuisine button should have a mouseon mouseoff feature 

// on location input and search click, randombtn click, should redirect you.

// before each, visit site, immediatley click randombtn, get error.

// ??? visit site, input slc, search, randomize, should contain array?

//click login should redirect you
//on listview, onclick name, display info

describe('Landing Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Checks Cuisine Button then hides cuisine list', () => {
        cy.get("#cuisine2")
            .should("not.exist")
        cy.get("#cuisine1")
            .trigger("mouseover")
        cy.get("#cuisine2")
            .should("be.visible")
        cy.get("#cuisine1")
            .should("not.exist")
    })

    it('Sets cuisine tpying', () => {
        cy.get('#cuisine1')
            .trigger('mouseover')
        cy.get('.type-dropcontent')
            .first()
            .click()
        cy.get('.button1')
            .should('contain', 'American')
    })

    

})