'use strict';

const answer = require('./hiker');
const checksum = require('./checksum');

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });

  it('has a two character checksum', () => {
    expect(checksum(String(answer()))).toEqual(2);
  });
});
