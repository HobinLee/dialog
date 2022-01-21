import { atom } from 'recoil';

export const testState = atom({
  key: 'testStoreKey',
  default: 0,
});
