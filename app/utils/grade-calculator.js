export default function gradeCalculator(score) {
  let grade = '';
  if (score > 1.5) {
    grade = 'A';
  }
  else if (score > 1) {
    grade = 'A-';
  }
  else if (score > 0.5) {
    grade = 'B+';
  }
  else if (score > 0) {
    grade = 'B';
  }
  else if (score > -0.5) {
    grade = 'B-';
  }
  else if (score > -1) {
    grade = 'C+';
  }
  else if (score > -1.5) {
    grade = 'C';
  }
  else if (score > -2) {
    grade = 'C-';
  }
  else if (score > -2.5) {
    grade = 'D+';
  }
  else if (score < -2.5) {
    grade = 'D';
  }
  return grade;
}
