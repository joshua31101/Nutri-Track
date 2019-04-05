import DS from 'ember-data';

export default DS.Model.extend({
  NDB_Number: DS.attr('number'),
  code: DS.attr('number'),
  deriv_code: DS.attr('string'),
  name: DS.attr('string'),
  product_id: DS.attr('string'),
  unit: DS.attr('string'),
  value: DS.attr('number'),
});
