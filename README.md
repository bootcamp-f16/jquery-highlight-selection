# jQuery Highlight Selection

Simple jQuery  plugin to draw boxes around the items in the current jQuery
collection. 

## Usage

```
$('div').highlightSelection();
// All div tags will now have a red box around them

$('li').highlightSelction();
// All li tags will now have a red box around them and the ones around div
// tags are removed
```

## Configuration

```
$.fn.highlightSelection.defaults.border = "blue";
// border color will now be blue

$.fn.highlight.defaults.clearPreviousSelection = false;
// subsequent calls to highlight selection will no longer clear the old ones
```
