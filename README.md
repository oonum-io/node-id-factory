# Friend(lier) Unique IDs

Nodejs module for making friendlier unique IDs: equivalent to `base58(uuid.v4())`

This library uses the Bitcoin base-58 alphabet.

## Use

```bash
npm install --save @oonum/id-factory
```

```typescript
import { newId } from '@oonum/id-factory'

const id = newId();
```

## Exports

```typescript
exports function newId(): string;
```
