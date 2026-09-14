'use strict';

const answer = require('./hiker');

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });

  it('has two digits', () => {
    const digits = null;
    expect(digits.length).toEqual(2);
  });
});
