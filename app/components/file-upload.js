import FileField from 'ember-uploader/components/file-field';
import Uploader from 'ember-uploader/uploaders/uploader';

export default FileField.extend({
  filesDidChange(files) {
    const uploader = Uploader.create({
      url: this.get('url')
    });
    const addProducts = this.addProducts;

    if (files) {
      uploader.upload(files[0]);
      uploader.on('didUpload', function(e) {
        addProducts(e.products);
      });
    }
  },
});
