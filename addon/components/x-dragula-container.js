import Component from '@ember/component';
import layout from '../templates/components/x-dragula-container';

export default Component.extend({
  layout,
  classNames: ['x-dragula-container'],

  didInsertElement() {
    this._super(...arguments);
    this.get('on-insert')(this);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('on-destroy')(this);
  }
});
