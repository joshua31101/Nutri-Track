import EmberRouter from '@ember/routing/router';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('login');
  this.route('register');
  this.route('authenticated', () => {
    this.route('my-foods');
  });
});

export default Router.extend(UnauthenticatedRouteMixin);
