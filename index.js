/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-simple-dragula',

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/dragula/dist/dragula.js');
    app.import('vendor/shims/dragula.js');
    app.import('node_modules/dragula/dist/dragula.css');
  }
};
