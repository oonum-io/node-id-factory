# Friend(lier) Unique IDs

Nodejs module for making friendlier unique IDs: equivalent to `base32(uuid.v4())`

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
