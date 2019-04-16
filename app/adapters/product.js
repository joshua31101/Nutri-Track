import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll(store, type, id, snapshot) {
    let url = '';
    if (snapshot.adapterOptions.uid) {
      url = this.buildURL('user', '', snapshot, 'findAll');
      url += `/${snapshot.adapterOptions.uid}/products`;
    } else {
      url = this.buildURL('product', '', snapshot, 'findAll');
    }
    return this.ajax(url, 'GET');
  },

  createRecord(store, type, snapshot) {
    let url = this.buildURL('user', '', snapshot, 'createRecord');
    url += `/${snapshot.adapterOptions.uid}/products/${snapshot.adapterOptions.productId}`;
    return this.ajax(url, 'POST');
  },

  deleteRecord(store, type, snapshot) {
    let url = '';
    if (snapshot.adapterOptions.uid) {
      url = this.buildURL('user', '', snapshot, 'deleteRecord');
      url += `/${snapshot.adapterOptions.uid}/products/${snapshot.adapterOptions.product_id}`;
    } else {
      url = this.buildURL('product', '', snapshot, 'deleteRecord');
    }
    return this.ajax(url, 'DELETE');
  },
});
