const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  defaults: {
    title: '',
    author: '',
    edition: -1,
    category: '',
    overview: '',
    img: undefined
  }
});
