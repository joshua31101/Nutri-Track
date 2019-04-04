import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll(store, type, id, snapshot) {
    let url = '';
    if (snapshot.adapterOptions.uid) {
      url = this.buildURL('user', '', snapshot, 'findAll');
      url += `/${snapshot.adapterOptions.uid}/products`;
      return this.ajax(url, 'GET');
    }
    url = this.buildURL('product', '', snapshot, 'findAll');
    return this.ajax(url, 'GET');
  },
});
