import { Types } from 'mongoose';
import { v4 } from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('base-x');

const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const base58 = base(ALPHABET);

export default (): string => {
  return mongoObjectId();
};

export function mongoObjectId(): string {
  return Types.ObjectId().toString();
}

export function uuid58Id(): string {
  const buf = Buffer.alloc(16);
  const uuid = v4(null, buf);
  return base58.encode(uuid);
}
