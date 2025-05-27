import { evaluateRule } from '../src/evaluate';

const rule = {
  name: 'is_adult',
  expr: 'input.age >= 18',
  event: { type: 'allow' }
};

const input = { age: 20 };
console.log(evaluateRule(rule, input)); // { matched: true, event: { type: 'allow' } }
