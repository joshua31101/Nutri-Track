import Component from '@ember/component';
import { inject as service } from '@ember/service';
import scoreCalculator from '../utils/score-calculator';

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
      scoreCalculator(recommendedFoods);
      recommendedFoods = recommendedFoods.toArray().sort((a, b) => {
        return a.grade.charCodeAt(0) - b.grade.charCodeAt(0);
      });
      this.set('recommendedFoods', recommendedFoods);
    });
  },
});
