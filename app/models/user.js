import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  products: DS.hasMany('products'),
});
