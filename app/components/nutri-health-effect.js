import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import getGradeDesc from '../utils/get-grade-desc';

export default Component.extend({
  store: service(),
  ingredientsDesc: alias('model.ingredients_english'),

  init() {
    this._super(...arguments);

    this.get('store')
      .findAll('ingredient', {
        adapterOptions: {
          product_id: this.model.get('id'),
        },
      })
      .then(ingredients => {
        this.set('ingredients', ingredients);
        ingredients.forEach(ing => {
          ing.set('gradeDesc', getGradeDesc(ing.grade));
        });
      });
  },

  didRender() {
    this._super(...arguments);

    let tooltip = $('[data-toggle="tooltip"]');
    if (tooltip) {
      tooltip.tooltip();
    }
  },
});
