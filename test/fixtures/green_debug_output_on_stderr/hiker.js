'use strict';

function answer() {
  process.stderr.write('answer was called\n');
  return 6 * 7;
}

module.exports = answer;
