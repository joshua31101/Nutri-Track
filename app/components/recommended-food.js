import Component from '@ember/component';
import { inject as service } from '@ember/service';
import gradeCalculator from '../utils/grade-calculator';

export default Component.extend({
  session: service(),
  store: service(),

  init() {
    this._super(...arguments);
    
    this.get('store')
      .findAll('food-recommended', {
        adapterOptions: {
          uid: this.get('session.data.authenticated.uid'),
        },
      })
      .then(recommendedFoods => {
        this._calculateScore(recommendedFoods.toArray());
        this.set('recommendedFoods', recommendedFoods);
      });
  },

  _calculateScore(products) {
    let grade = '';
    products.forEach(product => {
      grade = gradeCalculator(product.score);
      product.set('grade', grade);
      product.set('generalGrade', grade.replace(/\+|-/g,''));
    });
  },
});
