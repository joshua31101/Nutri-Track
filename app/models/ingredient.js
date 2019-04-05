import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  alt_names: DS.attr('string'),
  desc: DS.attr('string'),
  additional_info: DS.attr('string'),
  found_in: DS.attr('string'),
  possible_health_effects: DS.attr('string'),
  allergy: DS.attr('string'),
});
