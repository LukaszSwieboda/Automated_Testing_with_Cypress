describe('Working with inputs', () => {
	it('should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
		cy.url().should('include', 'http://zero.webappsecurity.com/login.html')
	})

	it('should fill username', () => {
		cy.get('#user_login').as('username') 
		cy.get('@username').clear()
		cy.get('@username').type('Some Invalid Name', { delay: 50 })
	})

	it('should fill password', () => {
		cy.get('#user_password').as('password')
		cy.get('@password').clear()
		cy.get('@password').type('Some Invalid Password')
	})

	it('should mark checkbox', () => {
		cy.get('input[type="checkbox"]').click()
		cy.wait(5000)
	})

	it('should submit login form', () => {
		cy.contains('Sign in').click()
	})

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})
})
