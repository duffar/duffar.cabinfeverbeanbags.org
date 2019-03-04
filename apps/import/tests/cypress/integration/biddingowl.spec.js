/// <reference types="Cypress" />

context('Querying', () => {
    beforeEach(() => {
    })

    // The most commonly used query is 'cy.get()', you can
    // think of this like the '$' in jQuery

    it.only('cy.get() - reads the auction items', (done) => {
        // https://on.cypress.io/get

        cy.on('uncaught:exception', (err, runnable) => {
            console.log('uncaught exception: ', err);
            debugger;
            // expect(err.message).to.include('something about the error')

            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            done()

            // return false to prevent the error from
            // failing this test
            return false
        });

        cy.request('GET', 'http://www.biddingowl.com/Auction/index.cfm?auctionID=16721').then((response) => {
            console.log('got document: ', response);
            const products = Cypress.$(response).find('div#products');
            console.log('found products: ', products);
            done();
        });
        // cy.visit('https://on.cypress.io/get');

        // cy.get('body').then((body) => {
        //     const products = Cypress.$(body).find('div#products');
        //     console.log('found products: ', products);
        //     done();

        // });

        // cy.get('div.item').should('contain', 'Button')

        // cy.get('.query-btn').should('contain', 'Button')

        // cy.get('#querying .well>button:first').should('contain', 'Button')
        // //              ↲
        // // Use CSS selectors just like jQuery

        // cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    })

    it('cy.contains() - query DOM elements with matching content', () => {
        // https://on.cypress.io/contains
        cy.get('.query-list')
            .contains('bananas')
            .should('have.class', 'third')

        // we can pass a regexp to `.contains()`
        cy.get('.query-list')
            .contains(/^b\w+/)
            .should('have.class', 'third')

        cy.get('.query-list')
            .contains('apples')
            .should('have.class', 'first')

        // passing a selector to contains will
        // yield the selector containing the text
        cy.get('#querying')
            .contains('ul', 'oranges')
            .should('have.class', 'query-list')

        cy.get('.query-button')
            .contains('Save Form')
            .should('have.class', 'btn')
    })

    it('.within() - query DOM elements within a specific element', () => {
        // https://on.cypress.io/within
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')
        })
    })

    it('cy.root() - query the root DOM element', () => {
        // https://on.cypress.io/root

        // By default, root is the document
        cy.root().should('match', 'html')

        cy.get('.query-ul').within(() => {
            // In this within, the root is now the ul DOM element
            cy.root().should('have.class', 'query-ul')
        })
    })
})
