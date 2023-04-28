import formatMoney from '../lib/formatMoney';

describe('format Money function', () => {
  it('works wit fractional dollars', () => {
    expect(formatMoney(1)).toEqual('£0.01');
    expect(formatMoney(10)).toEqual('£0.10');
    expect(formatMoney(9)).toEqual('£0.09');
    expect(formatMoney(40)).toEqual('£0.40');
    expect(formatMoney(140)).toEqual('£1.40');
  });
  it('leaves off cents when its whole dollars', () => {
    expect(formatMoney(5000)).toEqual('£50');
    expect(formatMoney(100)).toEqual('£1');
    expect(formatMoney(50000000)).toEqual('£500000');
  });
  it('wrks with whole and fractional dollars', () => {
    expect(formatMoney(140)).toEqual('£1.40');
    expect(formatMoney(5012)).toEqual('£50.12');
    expect(formatMoney(110)).toEqual('£1.10');
    expect(formatMoney(101)).toEqual('£1.01');
    expect(formatMoney(3455374787887)).toEqual('£34553747878.87');
  });
});
