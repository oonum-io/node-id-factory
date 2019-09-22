import { v4 } from 'uuid';
import { encode } from 'base32';

export function newId(): string {
  return encode(v4());
}
