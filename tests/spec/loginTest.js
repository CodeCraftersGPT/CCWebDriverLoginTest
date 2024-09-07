describe('Login Test', () => {
    it('should log in with valid credentials', async () => {
        // Open the login page
        await browser.url('/login');
        
        // Input the username
        await $('#username').setValue('tomsmith');
        
        // Input the password
        await $('#password').setValue('SuperSecretPassword!');
        
        // Submit the login form
        await $('button[type="submit"]').click();
        
        // Validate the success message
        const successMessage = await $('.flash.success').getText();
        expect(successMessage).toContain('You logged into a secure area!');
    });
});
