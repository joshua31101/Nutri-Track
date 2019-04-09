import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  store: service(),
  ingredients_desc: alias('model.ingredients_english'),

  init() {
    this._super(...arguments);

    this.get('store')
      .findAll('ingredient', {
        adapterOptions: {
          product_id: this.model.get('id'),
        },
      })
      .then(ingredients => {
        this.set('ingredients', ingredients);
      });
  },
});
