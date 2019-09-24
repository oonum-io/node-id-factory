import { v4 } from 'uuid';
import baseX from 'base-x';

const base62 = baseX('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

export function newId(): string {
  const buf = Buffer.alloc(16);
  const uuid = v4(null, buf);
  return base62.encode(uuid);
}
