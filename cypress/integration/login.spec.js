describe('login into the admin area', () => {
    it('should login sucessfully into the admin area', () => {
        cy.visit('https://outboxedu-admin.netlify.app/')
        cy.get('input[type=email]').type('admin@outbox.co.ug')
        cy.get('input[type=password]').type('testpassword')
        cy.findByRole('button', { name: /login/i }).click()
        cy.wait(5000)
        cy.url().should('include', '/dashboard')
    })
})

describe('login error', () => {
    it('should show login error', () => {
        cy.visit('https://outboxedu-admin.netlify.app/')
        cy.findByRole('button', { name: /login/i }).click()
        cy.findByRole('heading', {name: /error/i }).contains('Error')
    })
})
