import DS from 'ember-data';

export default DS.Model.extend({
  NDB_No: DS.attr('number'),
  Serving_Size: DS.attr('number'),
  Serving_Size_UOM: DS.attr('string'),
  Household_Serving_Size: DS.attr('number'),
  Household_Serving_Size_UOM: DS.attr('string'),
  Preparation_State: DS.attr('string'),
});
