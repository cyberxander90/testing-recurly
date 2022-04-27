import Bowser from 'bowser/bundled';

console.log('Bowser', Bowser);

const browser = Bowser.getParser(window.navigator.userAgent);
console.log('browser', browser);

console.log({mobile: browser.is('mobile'), tablet: browser.is('tablet'), ios: browser.is('ios') })
