'use strict';

const answer = require('./hiker');

// jest's testMatch never collects this name, so the unparseable line below
// reaches eslint only. eslint reports a parsing error, jest stays green.
describe('answer', () => {
  it('has three digits', () => {
    expect(String(answer()).length).toEqual(???);
  });
});
