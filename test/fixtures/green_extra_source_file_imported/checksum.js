'use strict';

function checksum(text) {
  return text.length % 256;
}

module.exports = checksum;
