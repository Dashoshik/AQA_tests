const assert = require('assert');//импорт стандартный
const LoginPage = require('../../page-objects/login-page');//импорт функций из LoginPage

const loginPage = new LoginPage(); //экземпляр класса

describe('Login',() => {
    xit ('login with account number', async () =>{
        await browser.url ('https://test.fmw.pm/templates/success/');
        await loginPage.loginByAccNumber();
        await browser.waitUntil(async() => {
            return await $("[class='c-btn only-desc rlink']").getText() === 'Сделать ставку';
        }, 5000);
    });

   xit ('login with email', async () =>{
        await browser.url ('https://test.fmw.pm/templates/success/');
        await loginPage.loginByEmail();
        const innerTextElement = await $("[class='c-reward__title']");//ищем элемент
        await innerTextElement.waitForDisplayed(2000);//подгружаем элемент
        const innerText = await innerTextElement.getText(); //получаем текст из элемента
        assert.strictEqual(innerText, 'Награда');//сравниваем тексты
    });
    xit ('login with phone number', async () =>{
        await browser.url ('https://test.fmw.pm/templates/success/');
        await loginPage.loginByPhoneNumber();
        const innerTextElement = await $("[class='c-reward__title']");//была сложность как писать класс и аттрибут
        await innerTextElement.waitForDisplayed(2000);
        const innerText = await innerTextElement.getText(); 
        assert.strictEqual(innerText, 'Награда');
    });
    xit ('login with Two-Factor Authentication', async() =>{
        await browser.url ('https://test.fmw.pm/templates/success/');
        await loginPage.loginwithTwoFactorAuthentication();
        await browser.waitUntil(async() => {
            return await $('[name="2fa"]').getAttribute('placeholder') === 'Введи код подтверждения';//хотела тут искать по селектору #2fa, но не получилось
        }, 5000);
    });
    it ('login with MVP account number', async() =>{
        await browser.url ('https://test.fmw.pm/templates/success/');
        await loginPage.loginMVP();
        const rejectTextElement = await $('[id="modalReject"] [class="modal-text"]');
        await rejectTextElement.waitForDisplayed(5000);
        const rejectText = await rejectTextElement.getText();
        console.warn (rejectText); 
        assert.notDeepStrictEqual(rejectText, 'К сожалению, счета, зарегистрированные в валюте USD и EUR и которые состоят из 9 цифр');//метод подбирала, в документации wdio не могу найти подробное описание методов у assert
    

    });


});