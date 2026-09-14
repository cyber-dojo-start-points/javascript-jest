'use strict';

const answer = require('./hiker');

describe('answer size', () => {
  it('has three digits', () => {
    expect(String(answer()).length).toEqual(3);
  });
});
