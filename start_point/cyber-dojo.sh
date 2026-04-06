
ln -s /etc/jest/node_modules ${CYBER_DOJO_SANDBOX}/node_modules

# Calling [npm run ...] is sloooow so don't to that.

node_modules/.bin/eslint --config ${CYBER_DOJO_SANDBOX}/eslint.config.js /**/*.js
node_modules/.bin/jest --coverage
