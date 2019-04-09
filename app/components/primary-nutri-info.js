import Component from '@ember/component';
import { computed } from '@ember/object';
import gradeCalculator from '../utils/grade-calculator';

export default Component.extend({
  protein: 0,
  fat: 0,
  carbs: 0,
  calories: 0,
  grade: computed(function() {
    return this._calculateScore();
  }),
  generalGrade: computed('grade', function() {
    return this.get('grade').replace(/\+|-/g,'');
  }),

  _calculateScore() {
    let score = 0;
    if (this.model.length) {
      let totalScore = 0;
      let products = this.model.toArray();

      products.forEach(product => {
        this._setNutrientValue(product.nutrients);
        totalScore += product.score;
      });
      score = totalScore / products.length;
    } else {
      this._setNutrientValue(this.model.get('nutrients'));
      score = this.model.get('score');
    }
    return gradeCalculator(score);
  },

  _setNutrientValue(nutrients) {
    let calories = this.get('calories');
    let carbs = this.get('carbs');
    let fat = this.get('fat');
    let protein = this.get('protein');

    nutrients.forEach(nutrient => {
      let code = nutrient.code;
      if (code === 203) {
        protein += nutrient.value;
      } else if (code === 204) {
        fat += nutrient.value;
      } else if (code === 205) {
        carbs += nutrient.value;
      } else if (code === 208) {
        calories += nutrient.value;
      }
    });
    this.set('protein', protein);
    this.set('fat', fat);
    this.set('carbs', carbs);
    this.set('calories', calories);
  }
});
