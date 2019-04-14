import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll(store, type, id, snapshot) {
    let url = this.buildURL('user', '', snapshot, 'findAll');
    url += `/${snapshot.adapterOptions.uid}/recommended-foods`;
    return this.ajax(url, 'GET');
  },
});
