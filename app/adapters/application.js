import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: config.host,
  namespace: config.namespace,
  authorizer: 'authorizer:jwt',
});
