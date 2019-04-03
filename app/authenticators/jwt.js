import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';
import { run } from '@ember/runloop';
import { Promise } from 'rsvp';
import $ from 'jquery';

export default Base.extend({
  tokenEndpoint: `${config.host}/auth/login`,

  restore(data) {
    return new Promise((resolve, reject) => {
      if (data.token) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(email, password) {
    const data = JSON.stringify({
      email,
      password,
    });
    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data,
      contentType: 'application/json',
    };

    return new Promise((resolve, reject) => {
      $.ajax(requestOptions).then(res => {
        run(() => {
          resolve(res);
        });
      }, (error) => {
        run(() => {
          reject(error);
        });
      });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
