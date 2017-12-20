import Component from '@ember/component';
import layout from '../templates/components/x-dragula';
import dragula from 'dragula';
import { assign } from '@ember/polyfills';
import { run } from '@ember/runloop';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.set('drake', dragula([], assign({}, this.get('options'))));
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('drake').destroy();
  },

  actions: {
    addChild(component) {
      run(() => {
        const element = component.get('element');
        const containers = this.get('drake.containers');
        containers.push(element);
      });
    },

    removeChild(component) {
      run(() => {
        const element = component.get('element');
        const containers = this.get('drake.containers');
        const index = containers.indexOf(element);
        containers.splice(index, 1);
      });
    }
  }
});
