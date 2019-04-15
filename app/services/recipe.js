import Service from '@ember/service';

export default Service.extend({
  actions: {
    getRecipes(products, uid, store) {
      if (products.length) {
        let ingredients = products.map(p => p.long_name).join(',');
        return store
          .findAll('recipe', {
            adapterOptions: {
              uid,
              ingredients,
            },
          });
      }
      return Promise.resolve();
    },
  },
});
