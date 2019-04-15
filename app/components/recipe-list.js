import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  store: service(),

  init() {
    this._super(...arguments);

    let products = this.get('products').toArray();
    if (products.length) {
      let ingredients = products.map(p => p.long_name).join(',');
      return this.get('store')
        .findAll('recipe', {
          adapterOptions: {
            uid: this.get('session.data.authenticated.uid'),
            ingredients,
          },
        })
        .then(recipes => {
          this.set('recipes', recipes);
        });
    }
  },
});
