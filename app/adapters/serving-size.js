import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findRecord(store, type, id, snapshot) {
    let url = this.buildURL('product', id, snapshot, 'findRecord');
    url += '/serving-size';
    return this.ajax(url, 'GET');
  },
});
