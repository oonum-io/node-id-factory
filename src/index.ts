import { v4 } from 'uuid';
import baseX from 'base-x';

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const base58 = baseX(ALPHABET);

export function newId(): string {
  const buf = Buffer.alloc(16);
  const uuid = v4(null, buf);
  return base58.encode(uuid);
}
