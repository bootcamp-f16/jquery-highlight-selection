const test = require('tape');

// Setup a browser environment
require('browser-env')();

// Setup jQuery and the plugin
const jQuery = require('jquery');
const $ = jQuery;
require('./jquery-highlight-selection')();


test('highlightSelection is a function on jQuery collection', (t) => {
    t.plan(1);
    t.equal(typeof $('div').highlightSelection, 'function');
});

test('returns the same jQuery collection plugin was invoked on',  (t) => {
    t.plan(1);
    divs = $('div');

    t.deepEqual(divs.highlightSelection(), divs);
});
