import Service from '@ember/service';

export default Service.extend({
  actions: {
    getRecommendedFoods(uid, store) {
      return store
        .findAll('food-recommended', {
          adapterOptions: {
            uid,
          },
        });
    },
  },
});
