// Rewrite some fields of the package.json file in preparation
// for PRODUCTION configuration in a npm prebuild and prestart steps.
const fs = require('fs');
const packageJson = require('./package.json');
packageJson.proxy = undefined;
packageJson.homepage = '/static/react';
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 4));
