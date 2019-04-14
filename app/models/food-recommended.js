import DS from 'ember-data';

export default DS.Model.extend({
  product_id: DS.attr('number'),
  recommended_product_ids: DS.attr(),
});
