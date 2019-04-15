import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll(store, type, id, snapshot) {
    let url = '';
    let ingredients = snapshot.adapterOptions.ingredients;
    url = this.buildURL('user', '', snapshot, 'findAll');
    url += `/${snapshot.adapterOptions.uid}/product-recipes?ingredients=${ingredients}`;
    return this.ajax(url, 'GET');
  },
});
