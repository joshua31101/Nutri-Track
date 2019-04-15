import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  recipe: service('recipe'),
  store: service(),

  init() {
    this._super(...arguments);

    this.get('recipe.actions.getRecipes')(
      this.get('products'),
      this.get('session.data.authenticated.uid'),
      this.get('store')
    )
    .then(recipes => {
      this.set('recipes', recipes);
    });
  },
});
