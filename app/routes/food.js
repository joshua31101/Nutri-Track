import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model(params) {
    return this.store.findRecord('product', params.food_id);
  },

  setupController(controller, product) {
    this._super(controller, product);

    this.store
      .findRecord('serving-size', product.id)
      .then(servingSize => {
        controller.set('servingSize', servingSize);
      });
  },
});
