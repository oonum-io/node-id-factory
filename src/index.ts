import { v4 } from 'uuid';
const base = require('base-x');

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const base58 = base(ALPHABET);

export function newId(): string {
  const buf = Buffer.alloc(16);
  const uuid = v4(null, buf);
  return base58.encode(uuid);
}
