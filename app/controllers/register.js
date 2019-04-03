import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),

  actions: {
    createUser(newUser) {
      const { email, password } = newUser.getProperties('email', 'password');

      newUser
        .save({
          adapterOptions: {
            email,
            password,
          },
        })
        .then(() => {
          this.get('session')
            .authenticate('authenticator:jwt', email, password)
            .catch(reason => {
              this.set('errors', [reason.responseJSON && reason.responseJSON.error]);
            });
        })
        .catch(err => {
          this.set('errors', err.errors)
        });
    },
  },
});
