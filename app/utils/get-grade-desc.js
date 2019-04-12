export default function getGradeDesc(grade) {
  let tooltip = '';
  if (grade === 'A') {
    tooltip = 'There are positive health benefits to consuming this ingredient. No major controversy surrounding safety of the ingredient.';
  } else if (grade === 'B') {
    tooltip = 'There may be some positive health benefits to consuming this ingredient. Minimal negative health effects. No major controversy surrounding safety of the ingredient.';
  } else if (grade === 'C') {
    tooltip = 'Consumption of the ingredient does not generally result in major positive or negative effects. A somewhat benign ingredient that doesn\'t add much to your diet. No major controversy surrounding safety of the ingredient. In general, okay to consume for most people.';
  } else if (grade === 'D') {
    tooltip = 'Some possible negative health effects and/or animal studies showing negative effects. Some controversy surrounding the safety of the additive. Best avoided.';
  } else if (grade === 'F') {
    tooltip = 'Safety of the additive is highly controversial. Many animal and/or human studies showing negative health effects. May be categorized by U.S. FDA as "possibly cancer causing in humans." May be banned in some countries. Hazardous, avoid completely.';
  } else if (grade === 'G') {
    tooltip = 'G - "GRAS" is an acronym for the phrase Generally Recognized As Safe by the US Food & Drug Administration. An additive given GRAS approval is "adequately shown to be safe under the conditions of its intended use." Be Food Smart has not evaluated this specific ingredient for a grade.';
  } else {
    tooltip = 'This ingredient has not been completed and is awaiting a grade.';
  }
  return tooltip;
}
