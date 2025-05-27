import Ajv from 'ajv';
import schema from '../schemas/soeasily-dsl-v1.schema.json';
import { Rule } from './types/dsl';

const ajv = new Ajv({ allErrors: true });

export function validateRule(rule: Rule): { valid: boolean; errors?: any } {
  const validate = ajv.compile(schema);
  const valid = validate(rule);
  return valid ? { valid: true } : { valid: false, errors: validate.errors };
}
