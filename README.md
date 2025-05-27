# @soeasily/rules

A lightweight, AI-friendly rule engine for evaluating and validating SoEasily DSL rules in Node.js or TypeScript.

> Write simple, JSON-based rules like:
> `"when": "user.age >= 18", then: { type: 'approve' }`

## ✨ Features

- ✅ Evaluate rules with simple `expr` or `when`/`then` syntax
- ✅ Validate rules using the official JSON Schema
- 🔧 Typed with TypeScript
- 🧪 Includes a test harness
- ⚡ Fast and dependency-light (uses Ajv only)

---

## 📦 Install

```bash
npm install @soeasily/rules
```

or with yarn:

```bash
yarn add @soeasily/rules
```

---

## 🔧 Usage

### Evaluate a Rule
```ts
import { evaluateRule } from '@soeasily/rules';

const rule = {
  name: 'is_adult',
  expr: 'input.age >= 18',
  event: { type: 'allow' }
};

const input = { age: 20 };
const result = evaluateRule(rule, input);
// result: { matched: true, event: { type: 'allow' } }
```

### Validate a Rule
```ts
import { validateRule } from '@soeasily/rules';

const rule = {
  name: 'missing_expr'
};

const validation = validateRule(rule);
// validation: { valid: true/false, errors: [...] }
```

---

## 📘 Supported DSL Fields

| Field             | Description                                  |
|------------------|----------------------------------------------|
| `name`           | Required. Unique rule name.                  |
| `expr`           | JS expression to evaluate (e.g. `input.age > 18`) |
| `when` / `then`  | Simplified condition + action shortcut       |
| `event`          | Fallback standard format                     |

Planned: support for `lookup`, `extends`, `test_cases`, `settings`.

---

## 🧪 Run the Test

```bash
npm install
npm run test
```

---

## 📄 License

MIT — Copyright © 2025 SoEasily
