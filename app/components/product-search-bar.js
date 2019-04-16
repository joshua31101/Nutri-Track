import Component from '@ember/component';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import { run } from '@ember/runloop';

export default Component.extend({
  session: service(),
  store: service(),
  query: '',

  actions: {
    searchProduct(query) {
      if (query.length > 1) {
        let url = this.store.adapterFor('product').buildURL('','',null, 'findAll');
        url += `/search-products?query=${encodeURIComponent(query)}`;
        $.ajax({
          url,
          headers: {
            'Authorization': `Bearer ${this.get('session.data.authenticated.token')}`,
          },
          method: 'GET',
        })
        .then(results => {
          run(() => {
            this.set('searchResults', results.searched_products);
          });
        });
      }
    },

    addProductToUser(product) {
      this._resetResults();

      const searchedProduct = this.get('store').createRecord('product', product);
      searchedProduct
        .save({
          adapterOptions: {
            uid: this.get('session.data.authenticated.uid'),
            productId: product.id,
          },
        })
        .then(() => {
          this.updateRecipes();
          this.updateRecommendedFoods();
        });
    },
  },

  _resetResults() {
    this.set('searchResults', []);
  },
});
