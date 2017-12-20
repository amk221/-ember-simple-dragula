import Component from '@ember/component';
import layout from '../templates/components/x-dragula';
// import Dragula from 'Dragula';
// import { assign } from '@ember/polyfills';

export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);

  },

  willDestroyElement() {
    this._super(...arguments);

  }
});
