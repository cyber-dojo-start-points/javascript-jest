'use strict';

// No test file requires this, so jest never parses it. Only eslint reads it,
// and it reports a parsing error without ever printing the word SyntaxError.
function checksum(text) {
  return text.length %%% 256;
}

module.exports = checksum;
