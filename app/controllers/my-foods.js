import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import config from '../config/environment';
import scoreCalculator from '../utils/score-calculator';

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
      this._updateRecipes();
      this._updateRecommendedFoods();
    },

    deleteProduct(product) {
      product.destroyRecord({
        adapterOptions: {
          uid: this.get('session.data.authenticated.uid'),
          product_id: product.get('id'),
        },
      });
      this._updateRecipes();
      this._updateRecommendedFoods();
    },

    displayErrorMsg() {
      this.set('error', true);
    },

    updateRecipes() {
      this._updateRecipes();
    },

    updateRecommendedFoods() {
      this._updateRecommendedFoods();
    },
  },

  _updateRecipes() {
    this.get('recipe.actions.getRecipes')(
      this.get('model'),
      this.get('session.data.authenticated.uid'),
      this.get('store')
    )
    .then(recipes => {
      this.get('store').unloadAll('recipes');
      this.set('recipes', recipes);
    });
  },

  _updateRecommendedFoods() {
    this.get('foodRecommended.actions.getRecommendedFoods')(
      this.get('session.data.authenticated.uid'),
      this.get('store')
    )
    .then(recommendedFoods => {
      this.get('store').unloadAll('recommended-food');
      scoreCalculator(recommendedFoods);
      recommendedFoods = recommendedFoods.toArray().sort((a, b) => {
        return a.grade.charCodeAt(0) - b.grade.charCodeAt(0);
      });
      this.set('recommendedFoods', recommendedFoods);
    });
  }
});
