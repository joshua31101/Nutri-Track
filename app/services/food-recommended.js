import Service from '@ember/service';
import scoreCalculator from '../utils/score-calculator';

export default Service.extend({
  actions: {
    getRecommendedFoods(uid, store) {
      return store
        .findAll('food-recommended', {
          adapterOptions: {
            uid,
          },
        })
        .then(recommendedFoods => {
          scoreCalculator(recommendedFoods.toArray());
        })
    },
  },
});
