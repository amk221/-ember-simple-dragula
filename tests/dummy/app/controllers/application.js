/* eslint-disable no-console */

import Controller from '@ember/controller';
import jQuery from 'jquery';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('lists', [[
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5'
    ], [
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10'
    ]]);
  },

  actions: {
    addedToList(to, event) {
      const $list = jQuery(event.from);
      const from = $list.index();

      console.log('added', 'from', from, 'to', to);
    }
  }
});
