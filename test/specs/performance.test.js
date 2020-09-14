const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const assert = require('assert');

// describe('My Login application', () => {
//     // it('should login with valid credentials', () => {
//     //     LoginPage.open();
//     //
//     //     LoginPage.login('tomsmith', 'SuperSecretPassword!');
//     //     expect(SecurePage.flashAlert).toBeExisting();
//     //     expect(SecurePage.flashAlert).toHaveTextContaining(
//     //         'You logged into a secure area!');
//     // });
//
//     it('should run a performance test', () => {
//         LoginPage.open();
//         browser.enablePerformanceAudits();
//         let metrics = browser.getMetrics();
//         assert.ok(metrics.speedIndex < 1500) // check that speedIndex is below 1.5ms
//         browser.disablePerformanceAudits()
//     });
// });

describe('Performance test sample', () => {
  beforeEach(() => {
    browser.enablePerformanceAudits()
  })

  it('Heroku test', () => {
    LoginPage.open();
    let metrics = browser.getMetrics();
    expect(metrics.load).toBeLessThan(10 * 1000);
  })

  it('Heroku after login test', () => {
    LoginPage.open();
    LoginPage.login('tomsmith', 'SuperSecretPassword!');
    let metrics = browser.getMetrics();
    expect(metrics.load).toBeLessThan(10 * 1000);
  })

  it('Twitter test ', () => {
    browser.url('https://twitter.com')
    let metrics = browser.getMetrics();
    expect(metrics.load).toBeLessThan(10 * 1000);
  })

  afterEach(() => {
    browser.disablePerformanceAudits()
  })
})
