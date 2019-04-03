import DS from 'ember-data';

export default DS.Model.extend({
  ndb_number: DS.attr('number'),
  score: DS.attr('number'),
  long_name: DS.attr('string'),
  data_source: DS.attr('string'),
  gtin_upc: DS.attr('number'),
  manufacturer: DS.attr('string'),
  ingredients_english: DS.attr('string'),
});
