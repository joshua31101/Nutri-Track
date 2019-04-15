import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  store: service(),
  foodRecommended: service('food-recommended'),

  init() {
    this._super(...arguments);
    
    this.get('foodRecommended.actions.getRecommendedFoods')(
      this.get('session.data.authenticated.uid'),
      this.get('store')
    )
    .then(recommendedFoods => {
      this.set('recommendedFoods', recommendedFoods);
    });
  },
});
