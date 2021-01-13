// Used to make sure the server/app/static/react/ dir exists
// at cloudbuild runtime because empty dirs are ignored by GitHub.
const fs = require('fs');
const path = require('path');
const dir = path.resolve(__dirname, '../server/app/static/react');
fs.existsSync(dir) && fs.rmdirSync(dir, { recursive: true, force: true });
fs.mkdirSync(dir);
