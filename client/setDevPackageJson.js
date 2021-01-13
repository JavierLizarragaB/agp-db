// Rewrite some fields of the package.json file in preparation
// for DEVELOPMENT configuration in a npm prebuild and prestart steps.
const fs = require('fs');
const packageJson = require('./package.json');
packageJson.proxy = 'http://localhost:5000';
packageJson.homepage = '.';
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 4));
