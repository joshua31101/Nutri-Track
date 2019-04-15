import gradeCalculator from "./grade-calculator";

export default function scoreCalculator(products) {
  let grade = '';
  products.forEach(product => {
    grade = gradeCalculator(product.score);
    product.set('grade', grade);
    product.set('generalGrade', grade.replace(/\+|-/g,''));
  });
}
