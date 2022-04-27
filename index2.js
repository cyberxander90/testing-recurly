// import Bowser from 'bowser/bundled';

// console.log('Bowser', Bowser);

// const browser = Bowser.getParser(window.navigator.userAgent);
// console.log('browser', browser);

// console.log({mobile: browser.is('mobile'), tablet: browser.is('tablet'), ios: browser.is('ios') })


// example 1
// Select the node that will be observed for mutations
const targetNode = document.createTextNode('');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer1 = new MutationObserver(callback);
const observer2 = new window.MutationObserver(callback);

// Start observing the target node for configured mutations
observer1.observe(targetNode, config);
observer2.observe(targetNode, config);
