const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
Backbone.LocalStorage = require('backbone.localstorage');
const Book = require('../models/todo');

module.exports = Backbone.Collection.extend({
  model: Book,
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  search() {
    return this.where({ title: '' });
  },

  nextOrder() {
    return this.length ? this.last().get('order') + 1 : 1;
  },

  comparator: 'order'
});
