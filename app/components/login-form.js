import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service('session'),

  actions: {
    authenticate() {
      const credentials = this.getProperties('email', 'password');
      if (this._validateFields()) {
        this.get('session')
          .authenticate('authenticator:jwt', credentials)
          .catch(reason => {
            this.set('errors', [reason.responseJSON && reason.responseJSON.error]);
          });
      }
    },
  },

  _validateFields() {
    this.set('errors', null);

    const { email, password } = this.getProperties('email', 'password');
    let errors = [];
    if (!email) {
      errors.push('Email is empty');
    }
    if (!password) {
      errors.push('Password is empty');
    }
    this.set('errors', errors);
    return errors.length === 0;
  },
});
