import FileField from 'ember-uploader/components/file-field';
import Uploader from 'ember-uploader/uploaders/uploader';

export default FileField.extend({
  filesDidChange(files) {
    const uploader = Uploader.create({
      url: this.get('url')
    });
    const addProducts = this.addProducts;

    if (files) {
      let inputElem = this.element;
      let spinner = inputElem.parentElement.querySelector('.spinner-grow');
      inputElem.classList.add('d-none');
      spinner.classList.remove('d-none')

      uploader.upload(files[0]);
      uploader.on('didUpload', function(e) {
        inputElem.classList.remove('d-none');
        spinner.classList.add('d-none');
        addProducts(e.products);
      });
    }
  },
});
