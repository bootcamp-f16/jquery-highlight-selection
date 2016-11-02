const test = require('tape');

require('browser-env')();
// Setup jQuery and the plugin
const jQuery = require('jquery');
const $ = jQuery;
require('./jquery-highlight-selection')();


const clearBody = () => {
    $('body').html();
};

const setupDivs = (count, cssClass=null) => {
    const body = $('body');
    const itemsToTest = count;
    for(let x = 0; x < count; x++) {
        $(document.createElement('div'))
            .addClass(cssClass)
            .appendTo(body);
    }
}
test('highlightSelection is a function on jQuery collection', (t) => {
    t.plan(1);
    t.equal(typeof $('div').highlightSelection, 'function');
});

test('returns the same jQuery collection plugin was invoked on', (t) => {
    t.plan(1);
    const divs = $('div');

    t.deepEqual(divs.highlightSelection(), divs);
});

test('adds border style to every element in jQuery collection', (t) => {
    clearBody();
    const divCount = 5;
    t.plan(divCount);
    setupDivs(divCount);

    const divs = $('div');
    divs.highlightSelection();

    divs.each((index, element) => {
        t.equal($(element).attr('style'), 'border: 1px solid red;');
    });
});

test('remove border style from previous highlightSelection', (t) => {
    t.plan(15);

    clearBody();
    const divCount = 5;
    setupDivs(divCount, 'first');
    setupDivs(divCount, 'second');

    const first = $('.first').highlightSelection();
    first.each((index, element) => {
        t.equal($(element).attr('style'), 'border: 1px solid red;');
    });

    const second = $('.second').highlightSelection();
    second.each((index, element) => {
        t.equal($(element).attr('style'), 'border: 1px solid red;');
    });

    first.each((index, element) => {
        t.notOk($(element).attr('style'),
            'style should be empty');
    });

})