# -ember-simple-dragula

<!--
<a href="http://emberobserver.com/addons/-ember-simple-dragula"><img src="http://emberobserver.com/badges/-ember-simple-dragula.svg"></a> &nbsp; <a href="https://david-dm.org/amk221/-ember-simple-dragula#badge-embed"><img src="https://david-dm.org/amk221/-ember-simple-dragula.svg"></a> &nbsp; <a href="https://david-dm.org/amk221/-ember-simple-dragula#dev-badge-embed"><img src="https://david-dm.org/amk221/-ember-simple-dragula/dev-status.svg"></a> &nbsp; <a href="https://codeclimate.com/github/amk221/-ember-simple-dragula"><img src="https://codeclimate.com/github/amk221/-ember-simple-dragula/badges/gpa.svg" /></a> &nbsp; <a href="http://travis-ci.org/amk221/-ember-simple-dragula"><img src="https://travis-ci.org/amk221/-ember-simple-dragula.svg?branch=master"></a>
-->

## Demo

https://amk221.github.io/-ember-simple-dragula

## Example

See https://github.com/bevacqua/dragula#dragulacontainers-options for the available options.

```handlebars
{{#x-dragula on-drop=(action "dropped") as |d|}}
  {{#d.container tagName="ul"}}
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  {{/d.container}}

  {{#d.container tagName="ul"}}
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
  {{/d.container}}
{{/x-dragula}}
```

## Notes

* This addon is not used in production, it was just an experiment to test out Dragula
* Also see Sortable.js version https://github.com/amk221/-ember-simple-sortable

### Installation
```
ember install -ember-simple-dragula
```
