import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service('session'),
  currentUser: service('current-user'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
  }
});
