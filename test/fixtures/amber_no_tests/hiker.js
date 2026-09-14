'use strict';

// There is no test file at all, so jest collects nothing and reports
// "No tests found". That output carries neither PASS nor FAIL, which is the
// only way this start-point reaches amber without a SyntaxError.
function answer() {
  return 6 * 7;
}

module.exports = answer;
