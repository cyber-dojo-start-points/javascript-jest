'use strict';

const answer = require('./hiker');

describe('answer size', () => {
  it('has two digits', () => {
    expect(String(answer()).length).toEqual(2);
  });
});
