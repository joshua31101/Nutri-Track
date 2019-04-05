import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll(store, type, id, snapshot) {
    let url = '';
    url = this.buildURL('products', '', snapshot, 'findAll');
    url += `/${snapshot.adapterOptions.product_id}/ingredients`;
    return this.ajax(url, 'GET');
  },
});
