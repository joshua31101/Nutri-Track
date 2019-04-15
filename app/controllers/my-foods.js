import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import config from '../config/environment';

export default Controller.extend({
  session: service('session'),
  recipe: service('recipe'),
  foodRecommended: service('food-recommended'),
  uploadUrl: computed('session', function() {
    return `${config.host}/${config.namespace}/users/${this.session.data.authenticated.uid}/upload-receipt`;
  }),

  actions: {
    addProducts(products) {
      for (let i = 0; i < products.length; i++) {
        this.store.push(this.store.normalize('product', products[i]));
      }
      this._updateRecipes(products);
      this._updateRecommendedFoods();
    },

    deleteProduct(product) {
      product.destroyRecord({
        adapterOptions: {
          uid: this.get('session.data.authenticated.uid'),
          product_id: product.get('id'),
        },
      });
    },

    displayErrorMsg() {
      this.set('error', true);
    },
  },

  _updateRecipes(products) {
    this.get('recipe.actions.getRecipes')(
      products,
      this.get('session.data.authenticated.uid'),
      this.get('store')
    )
    .then(recipes => {
      this.set('recipes', recipes);
    });
  },

  _updateRecommendedFoods() {
    this.get('foodRecommended.actions.getRecommendedFoods')(
      this.get('session.data.authenticated.uid'),
      this.get('store')
    )
    .then(recommendedFoods => {
      this.set('recommendedFoods', recommendedFoods);
    });
  }
});
