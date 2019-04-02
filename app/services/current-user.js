import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    let uid = this.get('session.data.authenticated.uid');
    if (uid) {
      return this.get('store')
        .findRecord('user', uid)
        .then(user => {
          this.set('user', user);
        });
    } else {
      return RSVP.resolve();
    }
  }
});
