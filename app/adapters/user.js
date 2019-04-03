import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, snapshot) {
    const url = this.buildURL('user', '', snapshot, 'createRecord');
    const requestOptions = {
      data: { user: snapshot.adapterOptions },
      contentType: 'application/json',
    };
    return this.ajax(url, 'POST', requestOptions);
  },
});
