// https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs

const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

const { USER, PASS } = process.env;
if (!USER || !PASS) {
  throw new Error('USER and PASS must be provided as environment variables');
}

const capabilities = {
  os_version: 'Catalina',
  resolution: '1024x768',
  browserName: 'Safari',
  browser_version: '13.1',
  os: 'OS X',
  name: 'BStack-[NodeJS] Test recurly configuration with hosted-fields',
  build: 'BStack Testing RecurlyJS'
}

const report = ({ status, reason }) => `browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"${status}","reason": "${reason}"}}'`;

const test = async () => {
  const driver = new webdriver.Builder()
    .usingServer(`https://${USER}:${PASS}@hub-cloud.browserstack.com/wd/hub`)
    .withCapabilities(capabilities)
    .build();

  try {
    await driver.get('https://cyberxander90.github.io/testing-recurly/index.html');
    await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.xpath("//*[contains(text(),'Recurly is Ready')]"), 10000)));
    await driver.executeScript(report({ status: 'passed', reason: 'Recurly has been configured' }));
  } catch (e) {
    await driver.executeScript(report({ status: 'failed', reason: e.message }));
  }
  await driver.quit();
}

test();
