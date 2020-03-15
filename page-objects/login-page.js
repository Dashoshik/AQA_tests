//выносим логику логина

module.exports = class LoginPage{
    constructor(){
        this.nameInputSelector = '#acc';
        this.paswswordInputSelector = '#lpasswd';
        this.submitButton = '[data-id="to-login"]';
    };
    async loginByAccNumber(){
        const nameInput = await $(this.nameInputSelector);
        await nameInput.setValue('5258022');
        const passwordInput = await $(this.paswswordInputSelector);
        await passwordInput.setValue ('Priz2018');
        const submit = await $(this.submitButton);
        await submit.click ();
    };
    async loginByEmail(){
        const nameInput = await $(this.nameInputSelector);
        await nameInput.setValue('kate09.12.2018@gmail.com');
        const passwordInput = await $(this.paswswordInputSelector);
        await passwordInput.setValue ('Priz2018');
        const submit = await $(this.submitButton);
        await submit.click ();
    };
    async loginByPhoneNumber(){
        const nameInput = await $(this.nameInputSelector);
        await nameInput.setValue('+38 (000) 089 89 89');
        const passwordInput = await $(this.paswswordInputSelector);
        await passwordInput.setValue ('Priz2018');
        const submit = await $(this.submitButton);
        await submit.click ();
    };
    async loginwithTwoFactorAuthentication(){
        const nameInput = await $(this.nameInputSelector);
        await nameInput.setValue('7795602');
        const passwordInput = await $(this.paswswordInputSelector);
        await passwordInput.setValue ('Priz2018');
        const submit = await $(this.submitButton);
        await submit.click ();
    };
    async loginMVP(){
        const nameInput = await $(this.nameInputSelector);
        await nameInput.setValue('827542465');
        const passwordInput = await $(this.paswswordInputSelector);
        await passwordInput.setValue ('Priz2018');
        const submit = await $(this.submitButton);
        await submit.click ();
    };
}