import Bowser from 'bowser/bundled';

console.log('Bowser', Bowser);
const browser = Bowser.getParser(window.navigator.userAgent);
console.log('browser', browser);
