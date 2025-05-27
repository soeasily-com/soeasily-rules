import { Rule } from './types/dsl';

export function evaluateRule(rule: Rule, input: any): { matched: boolean; event?: any } {
  if ('expr' in rule) {
    const condition = new Function('input', `return ${rule.expr}`)(input);
    return condition ? { matched: true, event: rule.event ?? rule.then } : { matched: false };
  }
  return { matched: false };
}
