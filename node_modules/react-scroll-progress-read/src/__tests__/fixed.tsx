import {fixed} from '../utils';

describe('test fixed function', () => {
  it('return number', () => {
    expect(fixed(1)).toBe(1);
  });
  it('return float with default', () => {
    expect(fixed(1.323323323231)).toBe(1.32332);
  });
  it('return float with 2 number after dot', () => {
    expect(fixed(1.323323323231, 1)).toBe(1.3);
  });
});
