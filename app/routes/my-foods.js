import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  store: service(),

  model() {
    return this.get('store')
      .findAll('product', {
        adapterOptions: {
          uid: this.get('session.data.authenticated.uid'),
        },
      });
  },
});
