import Component from '@ember/component';
import layout from '../templates/components/x-dragula';
import dragula from 'dragula';
import { assign } from '@ember/polyfills';
import { run, bind } from '@ember/runloop';

const events = [
  'drag',
  'dragend',
  'drop',
  'cancel',
  'remove',
  'shadow',
  'over',
  'out',
  'cloned'
];

export default Component.extend({
  layout,
  classNames: ['x-dragula'],

  init() {
    this._super(...arguments);

    const drake = dragula([], assign({}, this.get('options')));

    this.set('drake', drake);

    events.forEach(name => {
      drake.on(name, bind(this, '_fireAction', name));
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('drake').destroy();
  },

  _fireAction() {
    const [name, ...args] = arguments;
    const action = this.get(`on-${name}`);
    if (typeof action === 'function') {
      action(...args);
    }
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
