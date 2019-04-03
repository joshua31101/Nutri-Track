import Component from '@ember/component';

export default Component.extend({
  actions: {
    submit() {
      if (this._validateFields()) {
        this.createUser(this.get('user'));
      }
    },
  },

  _validateFields() {
    this.set('errors', null);

    const {
      email,
      password,
    } = this.get('user').getProperties(
      'email',
      'password',
    );
    let errors = [];
    if (!email) {
      errors.push('Email is empty');
    }
    if (!password) {
      errors.push('Password is empty');
    }
    if (password !== this.get('password_confirm')) {
      errors.push('Password and confirm password does not match');
    }
    this.set('errors', errors);
    return errors.length === 0;
  },
});
