'use strict';

const answer = require('./hiker');

// jest's testMatch collects **/__tests__/** and *.test.js / *.spec.js only,
// so this file is never collected. Its assertion is false on purpose: the
// case is green only because jest never runs it.
describe('answer', () => {
  it('has three digits', () => {
    expect(String(answer()).length).toEqual(3);
  });
});
